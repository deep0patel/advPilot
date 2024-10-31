import os, sys
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from Airspace.airspace_data_extractor import geocode_address

import json
import math
from geopy.distance import geodesic

# Constants for degree direction labels
DIRECTION_LABELS = [
    "N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"
]

def calculate_bearing(lat1, lon1, lat2, lon2):
    """
    Calculates the bearing (heading) between two geographical points.
    """
    d_lon = math.radians(lon2 - lon1)
    
    lat1 = math.radians(lat1)
    lat2 = math.radians(lat2)

    x = math.sin(d_lon) * math.cos(lat2)
    y = math.cos(lat1) * math.sin(lat2) - (math.sin(lat1) * math.cos(lat2) * math.cos(d_lon))
    
    initial_bearing = math.atan2(x, y)
    
    # Convert bearing from radians to degrees and normalize it to 0-360
    bearing = (math.degrees(initial_bearing) + 360) % 360
    return bearing

def get_direction(bearing):
    """
    Returns the direction (N, E, W, S, etc.) based on the bearing.
    """
    idx = round(bearing / 45) % 8
    return DIRECTION_LABELS[idx]

def load_airports_from_json(json_file):
    """
    Loads airport data from the JSON file.
    """
    with open(json_file, 'r', encoding='utf-8') as f:
        airports = json.load(f)
    return airports

def find_closest_airport(lat, lon, airports):
    """
    Finds the closest airport to the given latitude and longitude.
    Returns the nearest airport name, distance in nautical miles, and heading.
    """
    closest_airport = None
    min_distance = float('inf')  # Start with a very large number for minimum distance
    closest_coords = None
    
    # print(geodesic((43.9960821, -79.57132), (43.98614524, -79.72728968)).nautical)

    for airport in airports:
        airport_lat = airport['coordinates']['latitude']
        airport_lon = airport['coordinates']['longitude']

        # Calculate the distance between the input coordinates and the airport in nautical miles
        distance = geodesic((lat, lon), (airport_lat, airport_lon)).nautical

        if distance < min_distance:
            
            # if min_distance < 10:
                # print(min_distance)
            
            min_distance = distance
            closest_airport = airport
            closest_coords = (airport_lat, airport_lon)

    # Calculate the bearing and direction to the closest airport
    if closest_coords:
        bearing = calculate_bearing(lat, lon, closest_coords[0], closest_coords[1])
        direction = get_direction(bearing)
        return closest_airport['name'], min_distance, direction
    else:
        return None, None, None











# # Example usage:
# json_file = "Aerodromes_&_Airspace.json"
# airports = load_airports_from_json(json_file)


# latitude, longitude = 0 , 0
        
# # Geocode address using the updated function
# try:
#     latitude, longitude = geocode_address("94b admiral rd", "toronto", "m5r2l6" )
# except ValueError as e:
#     print(f"Geocoding failed: {e}")

# # Find and print the closest airport
# closest_airport, distance_nm, direction = find_closest_airport(latitude, longitude, airports)

# if closest_airport:
#     print(f"Closest Airdrome: {closest_airport}")
#     print(f"Distance: {distance_nm:.2f} nautical miles")
#     print(f"Direction: {direction}")
# else:
#     print("No airports found.")