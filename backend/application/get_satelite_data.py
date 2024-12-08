import requests
from geopy.geocoders import Nominatim


def get_location(city):
    geolocator = Nominatim(user_agent="MyApp")
    location = geolocator.geocode(city)
    if location is None:
        raise ValueError("Wrong city name")
    else:
        return location.latitude, location.longitude, location.altitude


def get_satelite_data(city):
    APIkey = 'USY5FD-UUN2G6-S66RR9-5DRE'
    base_url = 'https://api.n2yo.com/rest/v1/satellite/'

    observer_lat, observer_lng, observer_alt = get_location(city)
    search_radius = 10
    category_id = 0

    response = requests.get(f"{base_url}/above/{observer_lat}/{observer_lng}/{observer_alt}/{search_radius}/{category_id}&apiKey={APIkey}").json()
    response_above = response['above']

    if len(response) > 10:
        return response_above[:10]
    else:
        return response
