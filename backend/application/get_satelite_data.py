import requests
from geopy.geocoders import Nominatim
from random import random, randint


def get_location(city):
    geolocator = Nominatim(user_agent="MyApp")
    location = geolocator.geocode(city)
    if location is None:
        raise ValueError("Wrong city name")
    else:
        return location.latitude, location.longitude, location.altitude


def get_mass():
    mass_mapping = {
        0.0: 0,
        0.55: 10,
        0.8: 100,
        0.92: 500,
        0.97: 1000,
        1.0: 5000
    }
    probability_distribution = list(mass_mapping.keys())
    random_number = random()
    for i in range(1, len(probability_distribution), 1):
        if random_number <= probability_distribution[i]:
            return randint(mass_mapping[probability_distribution[i-1]], mass_mapping[probability_distribution[i]])


def get_satelite_data(city):
    APIkey = 'USY5FD-UUN2G6-S66RR9-5DRE'
    base_url = 'https://api.n2yo.com/rest/v1/satellite/'

    observer_lat, observer_lng, observer_alt = get_location(city)
    search_radius = 10
    category_id = 0

    response = requests.get(f"{base_url}/above/{observer_lat}/{observer_lng}/{observer_alt}/{search_radius}/{category_id}&apiKey={APIkey}").json()
    response_above = response['above']

    if isinstance(response_above, list):
        for single_satelite in response_above:
            single_satelite["mass"] = get_mass()
        if len(response_above) > 10:
            return response_above[:10]
        else:
            return response_above
    else:
        response_above["mass"] = get_mass()
        return response_above
