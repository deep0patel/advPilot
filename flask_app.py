from flask import Flask, jsonify, request
from urllib.parse import unquote
import os
import re
import json
import geopandas as gpd
from shapely.geometry import Point
from geopy.geocoders import Nominatim
from Airspace.airspace_data_extractor import (
    extract_airspace_data,
    decode_paths,
    create_geometries,
    create_geodataframe,
    save_airspace_data,
    parse_altitude,
    add_parsed_altitudes,
    format_postal_code,
    filter_airspaces_by_altitude,
    find_airspace,
    geocode_address
    
)

app = Flask(__name__)

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
        operating_altitude = float(request.args.get('operating_altitude').strip()) or 699
        
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
            
            # print(json.dumps(airspace_info))
            
            return jsonify(airspace_info), 200
                

        else:
            return jsonify({'message': 'No airspace restrictions at your operating altitude for this location.'}), 200

    except Exception as e:
        return jsonify({'error': f"An error occurred: {str(e)}"}), 500
    

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)

