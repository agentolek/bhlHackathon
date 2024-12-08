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
    designator = request.args.get('designator', type=str)
    print(designator)

    try:
        satelite_data = get_satelite_data(city)
    except Exception:
        abort(404, 'Wrong city')

    satelite = None
    if isinstance(satelite_data, list):
        for single_satelite in satelite_data:
            print(single_satelite["intDesignator"])
            if single_satelite["intDesignator"] == designator:
                satelite = single_satelite
    else:
        satelite = satelite_data

    if satelite is None:
        abort(404, 'Wrong designator')

    map_maker = MapMaker()
    file_path = map_maker.generate_heatmap_with_time(satelite["mass"], (satelite["satlat"], satelite["satlng"]))
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
