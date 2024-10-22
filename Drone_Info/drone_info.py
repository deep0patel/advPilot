import json
import re



def flatten_search_data(data, company="", model="", version=""):
    """
    Flatten the JSON data into a list of drones with their full names and attributes
    """
    flattened = []
    for company_name, models in data.items():
        for model_name, model_info in models.items():
            for version_name, version_info in model_info.items():
                for version_type, details in version_info['Versions'].items():
                    full_name = f"{company_name} {model_name} {version_name} {version_type}".lower()
                    flattened.append((full_name, details))
    print(flattened)
    return flattened

def smart_search(query, drone_data):
    """
    Perform a smart search by matching jumbled, incomplete, and case-insensitive keywords
    """
    query_tokens = set(re.split(r'\s+', query.lower().strip()))  # Tokenize and normalize input query
    flattened_data = flatten_search_data(drone_data)

    results = []
    for full_name, details in flattened_data:
        full_name_tokens = set(full_name.split())  # Tokenize the flattened drone name
        
        # Check if there is an intersection between query tokens and full name tokens
        if query_tokens.intersection(full_name_tokens):
            results.append((full_name, details))  # Add to results if there is any match

    return results

def search_drone(database, search_query):
    """
    Perform a layer-by-layer search in the drone database.
    The function will try to go as granular as possible, and if something is not found at a layer,
    it returns the result of the last successfully matched layer.
    """
    # Normalize the search query to lowercase and split into tokens
    search_tokens = search_query.lower().split()
    
    print(search_tokens)

    result = database  # Start with the full database
    last_valid_result = None  # Store the last valid layer's result

    # Expected layers in order: company -> series -> model/version
    layer_names = ['company', 'series', 'model']

    # Search layer-by-layer (company -> series -> model/version)
    for idx, layer in enumerate(layer_names):
        if not result:
            break  # Stop if no valid result at this layer
        
        found = False
        # Iterate through current layer options (keys of the result dict)
        for key in result.keys():

            key_tokens = key.split()  # Split the key for comparison
            
            # Check if the search tokens are part of the current key tokens
            if all(token in search_tokens for token in key_tokens):
                
                print("in")
                last_valid_result = result[key]  # Update the last valid result
                print(last_valid_result)
                result = result[key]  # Move deeper into the structure
                found = True
                break
        
        # If nothing is found in this layer, return the last valid result
        if not found:
            return last_valid_result  # Return the last successfully matched layer

    # If we reach here, it means we found the most granular match
    return last_valid_result    


def search_drone_details(company_name, series_name, model_name, version_name, drone_data):
    """
    Perform a structured search based on company, series, model, and version
    """
    company_name = company_name.lower()
    series_name = series_name.lower()
    model_name = model_name.lower()
    version_name = version_name.lower()

    # Traverse the JSON tree with case-insensitive matching
    try:
        company = drone_data.get(company_name)
        # print(company)
        if not company:
            return None
        
        series = company.get(f"{series_name} series")
        print(series)
        if not series:
            return None
        
        model = series.get(model_name)
        if not model:
            return None
        
        version = model.get("Versions").get(version_name)
        if not version:
            return None

        return version
    except AttributeError:
        return None

# # Example usage
# if __name__ == "__main__":
#     search_query = input("Enter your search query: ")  # Example: "DJI mavic 3 cine"
#     results = smart_search(search_query, drone_data)

#     if results:
#         for result in results:
#             drone_name, drone_info = result
#             print(f"Drone Name: {drone_name.title()}")
#             print(f"Details: {drone_info}")
#     else:
#         print("No matching drones found.")
