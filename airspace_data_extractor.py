
import re
import polyline
from shapely.geometry import Polygon, Point
import geopandas as gpd


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
