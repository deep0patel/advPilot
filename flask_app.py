from flask import Flask, jsonify, request
import os
import json
import geopandas as gpd
from Drone_Info.drone_info import search_drone
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
from Flight_Planning.flight_plan import (
    load_airports_from_json,
    find_closest_airport
)

app = Flask(__name__)


all_airdrome_airports_file = "Flight_Planning//Aerodromes_&_Airspace.json"
airports = load_airports_from_json(all_airdrome_airports_file)



# necessary file loading.

# Load JSON data from file
try:
    with open("Drone_Info/info.json", "r") as file:
        drone_data = json.load(file)
except FileNotFoundError:
    drone_data = None
    print("Error: JSON file not found.")
except json.JSONDecodeError:
    drone_data = None
    print("Error: Failed to decode JSON file.")


# Paths to data files
airspace_file_path = 'Airspace//canadian_airspace307.js'
airspace_data_file_path = 'Airspace//airspace_data.gpkg'

# Global variable to store the airspace GeoDataFrame
airspace_gdf = None

# Load or process airspace data at startup
if os.path.exists(airspace_data_file_path):
    print("Loading airspace data from file.")
    airspace_gdf = gpd.read_file(airspace_data_file_path, layer='airspace')
    airspace_gdf = add_parsed_altitudes(airspace_gdf)
else:
    print("Processed airspace data not found. Processing raw data...")
    # Extract airspace data
    airspace_data = extract_airspace_data(airspace_file_path)
    # Decode paths
    airspace_data = decode_paths(airspace_data)
    # Create geometries
    airspace_data = create_geometries(airspace_data)
    # Create GeoDataFrame
    airspace_gdf = create_geodataframe(airspace_data)   
    # Save the processed data for future use
    save_airspace_data(airspace_gdf, airspace_data_file_path)
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
            
            # print(latitude, longitude)
        except ValueError as e:
            print(f"Geocoding failed: {e}")
            return jsonify({'error': str(e)}), 400

        # Find containing airspaces
        containing_airspaces = find_airspace(airspace_gdf, latitude, longitude)

        # Find relevant airspaces
        relevant_airspaces = filter_airspaces_by_altitude(containing_airspaces, operating_altitude)

        # Find the closest airport
        closest_airport, distance_nm, direction = find_closest_airport(latitude, longitude, airports)

        # Prepare results
        if not relevant_airspaces.empty:
            airspace_info = []
            for idx, row in relevant_airspaces.iterrows():
                airspace_info.append({
                    'Airport Details': (row['title']).replace('<br>', ' '),
                    'Airspace Class': row['airClass'],
                    'Airspace Type': row['airType'],
                    'Altitudes': f"{row['altLow']} to {row['altHigh']}",
                    'Description': (row['description']).replace('<br>', ' ')
                })

            # Add closest airport details to the response
            result = {
                'airspace_info': airspace_info,
                'closest_airport': {
                    'name': closest_airport,
                    'distance_nautical_miles': f"{distance_nm:.2f} NM",
                    'direction': direction
                }
            }

            return jsonify(result), 200

        else:
            result = {
                'message': 'No airspace restrictions at your operating altitude for this location.',
                'closest_airport': {
                    'name': closest_airport,
                    'distance_nautical_miles': f"{distance_nm:.2f} NM",
                    'direction': direction
                }
            }
            return jsonify(result), 200

    except Exception as e:
        return jsonify({'error': f"An error occurred: {str(e)}"}), 500

    
    
    
@app.route('/search_drone', methods=['GET'])
def search_drone_endpoint():
    if not drone_data:
        return jsonify({"error": "Drone database not available"}), 500
    
    # Get the search query from the request
    search_query = request.args.get('query')
    
    if not search_query:
        return jsonify({"error": "Query parameter 'query' is required"}), 400

    # Call the search function
    result = search_drone(drone_data, search_query)
    
    if result:
        return jsonify(result), 200
    else:
        return jsonify({"message": "No matching result found"}), 404

# Error handling for 404
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Resource not found"}), 404

# Error handling for 500
@app.errorhandler(500)
def internal_error(error):
    return jsonify({"error": "Internal server error"}), 500

    


# @app.route('/closest_airport', methods=['GET'])
# def get_closest_airport():
#     if not airport_data:
#         return jsonify({"error": "Airport database not available"}), 500
        
#         # Get the search query from the request
#     search_query = request.args.get('query')
    
#     if not search_query:
#         return jsonify({"error": "Query parameter 'query' is required"}), 400


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)

