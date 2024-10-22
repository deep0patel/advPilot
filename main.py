import os
import geopandas as gpd
from shapely.geometry import Point
from geopy.geocoders import Nominatim
from Airspace.airspace_data_extractor import extract_airspace_data, decode_paths, create_geometries, create_geodataframe, save_airspace_data



def load_airspace_data(filepath='airspace_data.gpkg'):
    if os.path.exists(filepath):
        airspace_gdf = gpd.read_file(filepath, layer='airspace')
        return airspace_gdf
    else:
        return None

def geocode_address(address):
    geolocator = Nominatim(user_agent="airspace_locator")
    location = geolocator.geocode(address)
    if location:
        print(location.latitude, location.longitude)
        return location.latitude, location.longitude
    else:
        raise ValueError("Address could not be geocoded.")

def find_airspace(airspace_gdf, latitude, longitude):
    point = Point(longitude, latitude)
    containing_airspaces = airspace_gdf[airspace_gdf.contains(point)]
    return containing_airspaces

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


def add_parsed_altitudes(airspace_gdf):
    airspace_gdf['altLow_ft'] = airspace_gdf['altLow'].apply(parse_altitude)
    airspace_gdf['altHigh_ft'] = airspace_gdf['altHigh'].apply(parse_altitude)
    return airspace_gdf

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


def main():

    js_file_path = 'canadian_airspace307.js'
    data_file_path = 'airspace_data.gpkg'
    
    # # Prompt user for address components
    # street_address = input("Enter the street address: ").strip()
    # city = input("Enter the city: ").strip()
    # postal_code = input("Enter the postal code: ").strip()
    
    street_address = "358 balmoral dr"
    city = "brampton"
    postal_code = "l6t1v9"

    try:
        # operating_altitude = float(input("Enter your operating altitude in feet AGL: "))
        operating_altitude = 300
    except ValueError:
        print("Invalid altitude input. Please enter a numeric value.")
        return

    # With postal code
    full_address_with_postal = f"{street_address}, {city}, {postal_code}, Canada"
    latitude, longitude = geocode_address(full_address_with_postal)

    # Without postal code
    full_address_without_postal = f"{street_address}, {city}, Canada"
    latitude, longitude = geocode_address(full_address_without_postal)


    # Attempt to load the processed airspace data
    airspace_gdf = load_airspace_data(data_file_path)

    if airspace_gdf is None:
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
    else:
        print("Loaded airspace data from file.")
        airspace_gdf = add_parsed_altitudes(airspace_gdf)

    # # Geocode address
    # try:
    #     latitude, longitude = geocode_address(full_address)
    # except ValueError as e:
    #     print(f"Error: {e}")
    #     return

    # Find containing airspaces
    containing_airspaces = find_airspace(airspace_gdf, latitude, longitude)

    relevant_airspaces = filter_airspaces_by_altitude(containing_airspaces, operating_altitude)

    # Display results
    if not relevant_airspaces.empty:
        print("\nAirspace Information at Your Operating Altitude:")
        for idx, row in relevant_airspaces.iterrows():
            print(f"Airspace Class: {row['airClass']}")
            print(f"Airspace Type: {row['airType']}")
            print(f"Altitudes: {row['altLow']} to {row['altHigh']}")
            print(f"Description: {(row['description']).replace('<br>', ' ')}\n")
    else:
        print("No airspace restrictions at your operating altitude for this location.")
        
        
        


if __name__ == "__main__":
    main()
