import sys
import os

path_to_cwd = os.getcwd()
sys.path.append(path_to_cwd)

from application import app
from .get_satelite_data import get_satelite_data, get_location
from olek_stuff.calc_satellite_emissions import MapMaker

from flask import send_from_directory, jsonify, request, abort
from flask_cors import cross_origin


@app.route("/getMap")
@cross_origin()
def send_map():
    """"
    Route to return html file of map with mapp of distribution of gas from asteroids
    if they would have been destroyed

    This endpoint needs city param to return the map
    """
    city = request.args.get('city', default='Warsaw', type=str).strip()
    try:
        satelite_data = get_satelite_data(city)
        lat, lng, observer_alt = get_location(city)
    except Exception:
        abort(404, 'Wrong city')

    cummulated_mass = 0
    # lat = lng = 0.0
    if isinstance(satelite_data, list):
        for single_satelite in satelite_data:
            cummulated_mass += single_satelite["mass"]
        #     lat += single_satelite['satlat']
        #     lng += single_satelite["satlng"]
        # lat /= len(satelite_data)
        # lng /= len(satelite_data)
    else:
        cummulated_mass = satelite_data["mass"]
        lat = satelite_data["satlat"]
        lng = satelite_data["satlng"]

    map_maker = MapMaker()
    file_path = map_maker.generate_heatmap_with_time(cummulated_mass, (lat, lng))
    return send_from_directory(os.path.join(os.getcwd(), 'olek_stuff', 'maps'), os.path.basename(file_path))


@app.route("/getSatelites")
@cross_origin()
def send_satelites_data():
    """
    Route to return json of informations about ateroids that are above given city

    This endpoint needs city param to return the map
    """
    city = request.args.get('city', default='Warsaw', type=str).strip()
    try:
        satelite_data = get_satelite_data(city)
    except Exception:
        abort(404, 'Wrong city')

    return jsonify(satelite_data)
