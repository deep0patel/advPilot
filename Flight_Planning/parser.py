import json
import re

def parse_txt_to_json(txt_file, json_file):
    """
    Parses a text file containing placemark data and converts it to JSON.
    """
    placemarks = []
    current_placemark = {}

    with open(txt_file, 'r', encoding='utf-8') as file:
        lines = file.readlines()
        
        for line in lines:
            line = line.strip()
            
            # Match <name> tag
            if line.startswith("<name>") and line.endswith("</name>"):
                name = re.search(r"<name>(.*?)</name>", line).group(1)
                current_placemark['name'] = name
            
            # Match <coordinates> tag
            elif line.startswith("<coordinates>") and line.endswith("</coordinates>"):
                coords = re.search(r"<coordinates>(.*?)</coordinates>", line).group(1)
                lon, lat, _ = map(float, coords.split(','))
                current_placemark['coordinates'] = {'latitude': lat, 'longitude': lon}
            
            # End of a placemark
            elif line == "</Placemark>":
                placemarks.append(current_placemark)
                current_placemark = {}

    # Write the parsed placemarks to a JSON file
    with open(json_file, 'w', encoding='utf-8') as json_output:
        json.dump(placemarks, json_output, indent=4)

    print(f"Data has been successfully written to {json_file}.")

# Example usage:
txt_file = "Aerodromes_&_Airspace.txt"  # Replace with your .txt file path
json_file = "Aerodromes_&_Airspace.json"  # Output JSON file

parse_txt_to_json(txt_file, json_file)
