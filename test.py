from geopy.geocoders import Nominatim

def geocode_address(address):
    geolocator = Nominatim(user_agent="airspace_locator")
    location = geolocator.geocode(address)
    if location:
        return location.latitude, location.longitude
    else:
        raise ValueError("Address could not be geocoded.")  # Geocode address
    
latitude, longitude = geocode_address("310 silvercreek parkway north, guelph, n1h7j4")
print(latitude, longitude)
