
import re
import polyline
from shapely.geometry import Polygon, Point
import geopandas as gpd
import re
import geopandas as gpd
from shapely.geometry import Point
from geopy.geocoders import Nominatim


def extract_airspace_data(js_file_path):
    airspace_data = []
    with open(js_file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Split the content into blocks for each airspace polygon
    blocks = content.split('cdah.push(a)')

    for block in blocks:
        if not block.strip():
            continue

        # Extract properties using regular expressions
        tt_match = re.search(r'tt="([^"]+)"', block)
        mt_match = re.search(r'mt="([^"]+)"', block)
        path_match = re.search(r'decodePath\("([^"]+)"\)', block)
        stroke_color_match = re.search(r'po.strokeColor="([^"]+)"', block)
        fill_color_match = re.search(r'po.fillColor="([^"]+)"', block)
        air_class_match = re.search(r'a.airClass="([^"]+)"', block)
        alt_low_match = re.search(r'a.altLow="([^"]+)"', block)
        alt_high_match = re.search(r'a.altHigh="([^"]+)"', block)
        air_type_match = re.search(r'a.airType="([^"]+)"', block)

        airspace = {
            'title': tt_match.group(1) if tt_match else '',
            'description': mt_match.group(1) if mt_match else '',
            'encoded_path': path_match.group(1) if path_match else '',
            'strokeColor': stroke_color_match.group(1) if stroke_color_match else '',
            'fillColor': fill_color_match.group(1) if fill_color_match else '',
            'airClass': air_class_match.group(1) if air_class_match else '',
            'altLow': alt_low_match.group(1) if alt_low_match else '',
            'altHigh': alt_high_match.group(1) if alt_high_match else '',
            'airType': air_type_match.group(1) if air_type_match else ''
        }

        airspace_data.append(airspace)

    return airspace_data

def decode_paths(airspace_data):
    for airspace in airspace_data:
        encoded_path = airspace['encoded_path']
        cleaned_path = encoded_path.replace('\\\\', '\\')
            # Remove any non-printable or non-ASCII characters
        cleaned_path = re.sub(r'[^\x20-\x7E]', '', cleaned_path)
        if encoded_path:
            # Decode to a list of (latitude, longitude) tuples
            try:
                coordinates = polyline.decode(cleaned_path)
                airspace['coordinates'] = coordinates
            except Exception as e:
                print(f"Error decoding polyline: {e}")
                print("en",encoded_path)
                print("cl", cleaned_path)
                airspace['coordinates'] = []
        else:
            airspace['coordinates'] = []
    return airspace_data

def create_geometries(airspace_data):
    for airspace in airspace_data:
        coords = airspace['coordinates']
        if coords:
            # Shapely expects coordinates in (longitude, latitude) order
            polygon = Polygon([(lon, lat) for lat, lon in coords])
            airspace['geometry'] = polygon
        else:
            airspace['geometry'] = None
    return airspace_data

def create_geodataframe(airspace_data):
    df = gpd.GeoDataFrame(airspace_data)
    df = df.set_geometry('geometry')
    df = df[df['geometry'].notnull()]  # Remove entries without geometry
    df.crs = "EPSG:4326"  # WGS84 coordinate system
    return df

def save_airspace_data(airspace_gdf, filepath='airspace_data.gpkg'):
    airspace_gdf.to_file(filepath, layer='airspace', driver='GPKG')

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
                # print(f"Exception during geocoding without postal code: {e}")
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
        # print(f"Exception during geocoding without postal code: {e}")
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
