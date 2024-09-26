from flask import Flask, jsonify, request
from urllib.parse import unquote
import os
import re
import json
import geopandas as gpd
from shapely.geometry import Point
from geopy.geocoders import Nominatim
from airspace_data_extractor import (
    extract_airspace_data,
    decode_paths,
    create_geometries,
    create_geodataframe,
    save_airspace_data
)

app = Flask(__name__)


# Function to parse altitude strings into numerical values
def parse_altitude(altitude_str):
    import re
    altitude_str = altitude_str.strip().upper()
    if 'SFC' in altitude_str or 'GROUND' in altitude_str:
        return 0.0
    elif 'AGL' in altitude_str:
        value = float(re.findall(r'\d+', altitude_str)[0])
        return value  # AGL values are relative to ground level
    elif 'FL' in altitude_str:
        value = float(re.findall(r'\d+', altitude_str)[0]) * 100  # Flight levels are in hundreds of feet
        return value
    elif 'OVERLYING AIRSPACE' in altitude_str:
        return 60000.0  # Assign a high altitude for overlying airspace
    else:
        try:
            return float(re.findall(r'[\d\.]+', altitude_str)[0])
        except IndexError:
            return None  # Unable to parse altitude

# Function to add parsed altitude columns to the GeoDataFrame
def add_parsed_altitudes(airspace_gdf):
    airspace_gdf['altLow_ft'] = airspace_gdf['altLow'].apply(parse_altitude)
    airspace_gdf['altHigh_ft'] = airspace_gdf['altHigh'].apply(parse_altitude)
    return airspace_gdf

def format_postal_code(postal_code):
    postal_code = postal_code.strip().upper()
    postal_code = re.sub(r'\s+', '', postal_code)
    formatted = f"{postal_code[:3]} {postal_code[3:]}"
    return formatted


def geocode_address(street_address, city, postal_code, country='Canada'):
    """
    Attempts to geocode the address first with the postal code.
    If that fails, attempts without the postal code.
    Returns the latitude and longitude if successful.
    Raises ValueError if both attempts fail.
    """
    geolocator = Nominatim(user_agent="airspace_finder")
    # Format postal code
    if postal_code is not None:
        postal_code_formatted = format_postal_code(postal_code)

        # Construct full addresses
        full_address_with_postal = f"{street_address}, {city}, {postal_code_formatted}, {country}"
        full_address_without_postal = f"{street_address}, {city}, {country}"

        # First attempt with postal code
        try:
            location = geolocator.geocode(full_address_with_postal)
            if location:
                # print(f"Geocoding successful with postal code: {location.latitude}, {location.longitude}")
                return location.latitude, location.longitude
            else:
                # print(f"Geocoding failed with postal code for address: {full_address_with_postal}")
                raise ValueError("Geocoding failed with postal code.")
        except Exception as e:
            # print(f"Exception during geocoding with postal code: {e}")
            # Second attempt without postal code
            try:
                location = geolocator.geocode(full_address_without_postal)
                if location:
                    # print(f"Geocoding successful without postal code: {location.latitude}, {location.longitude}")
                    return location.latitude, location.longitude
                else:
                    # print(f"Geocoding failed without postal code for address: {full_address_without_postal}")
                    raise ValueError("Geocoding failed without postal code.")
            except Exception as e:
                print(f"Exception during geocoding without postal code: {e}")
                raise ValueError("Address could not be geocoded with or without postal code.")
    
    full_address_without_postal = f"{street_address}, {city}, {country}"

    try:
        location = geolocator.geocode(full_address_without_postal)
        if location:
            # print(f"Geocoding successful without postal code: {location.latitude}, {location.longitude}")
            return location.latitude, location.longitude
        else:
            # print(f"Geocoding failed without postal code for address: {full_address_without_postal}")
            raise ValueError("Geocoding failed without postal code.")
    except Exception as e:
        print(f"Exception during geocoding without postal code: {e}")
        raise ValueError("Address could not be geocoded with or without postal code.")
    


# Function to find airspaces containing the point
def find_airspace(airspace_gdf, latitude, longitude):
    point = Point(longitude, latitude)
    containing_airspaces = airspace_gdf[airspace_gdf.contains(point)]
    return containing_airspaces

# Function to filter airspaces by altitude
def filter_airspaces_by_altitude(airspaces, altitude):
    """
    Filters the airspaces to those that include the given altitude.
    """
    # Handle cases where altHigh is 'overlying airspace' or not specified
    airspaces = airspaces.copy()
    airspaces['altHigh_ft'] = airspaces['altHigh_ft'].fillna(60000)  # Set a high value for unspecified upper limits
    # Include airspaces where:
    # altLow_ft <= altitude < altHigh_ft
    relevant_airspaces = airspaces[(airspaces['altLow_ft'] <= altitude) & (airspaces['altHigh_ft'] > altitude)]
    return relevant_airspaces

# Paths to data files
js_file_path = 'canadian_airspace307.js'
data_file_path = 'airspace_data.gpkg'

# Global variable to store the airspace GeoDataFrame
airspace_gdf = None

# Load or process airspace data at startup
if os.path.exists(data_file_path):
    print("Loading airspace data from file.")
    airspace_gdf = gpd.read_file(data_file_path, layer='airspace')
    airspace_gdf = add_parsed_altitudes(airspace_gdf)
else:
    print("Processed airspace data not found. Processing raw data...")
    # Extract airspace data
    airspace_data = extract_airspace_data(js_file_path)
    # Decode paths
    airspace_data = decode_paths(airspace_data)
    # Create geometries
    airspace_data = create_geometries(airspace_data)
    # Create GeoDataFrame
    airspace_gdf = create_geodataframe(airspace_data)
    # Save the processed data for future use
    save_airspace_data(airspace_gdf, data_file_path)
    airspace_gdf = add_parsed_altitudes(airspace_gdf)

@app.route('/airspace', methods=['GET'])
def get_airspace_info():
    
    try:
                
        # Decode URL-encoded strings
        street_address = request.args.get('street_address').strip()
        city = request.args.get('city').strip()
        postal_code = request.args.get('postal_code', '').strip() or None
        operating_altitude = float(request.args.get('operating_altitude').strip())
        
        # Geocode address using the updated function
        try:
            latitude, longitude = geocode_address(street_address, city, postal_code)
        except ValueError as e:
            print(f"Geocoding failed: {e}")
            return jsonify({'error': str(e)}), 400
        

        # Find containing airspaces
        containing_airspaces = find_airspace(airspace_gdf, latitude, longitude)

        # Find relevant airspaces
        relevant_airspaces = filter_airspaces_by_altitude(containing_airspaces, operating_altitude)


        # Prepare results
        if not relevant_airspaces.empty:
            airspace_info = []  
            for idx, row in relevant_airspaces.iterrows():
                airspace_info.append({
                    'Airport Details' : (row['title']).replace('<br>', ' '),
                    'Airspace Class': row['airClass'],
                    'Airspace Type': row['airType'],
                    'Altitudes': f"{row['altLow']} to {row['altHigh']}",
                    'Description': (row['description']).replace('<br>', ' ')
                })
            
            print(json.dumps(airspace_info))
            
            return jsonify(airspace_info), 200
                

        else:
            return jsonify({'message': 'No airspace restrictions at your operating altitude for this location.'}), 200

    except Exception as e:
        return jsonify({'error': f"An error occurred: {str(e)}"}), 500
    

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)

