from application import app
from .get_satelite_data import get_satelite_data
from flask_cors import cross_origin
import sys
import os

path_to_cwd = os.getcwd()
sys.path.append(path_to_cwd)

from application import app
from .get_satelite_data import get_satelite_data
from olek_stuff.calc_satellite_emissions import MapMaker

from flask import send_from_directory, jsonify, request, abort
from flask_cors import cross_origin

@cross_origin()
@app.route("/getMap")
@cross_origin()
def send_map():
    city = request.args.get('city', default='Warsaw', type=str).strip()
    try:
        satelite_data = get_satelite_data(city)
    except Exception:
        abort(404, 'Wrong city')

    cummulated_mass = 0
    lat = lng = 0.0
    if isinstance(satelite_data, list):
        lat = satelite_data[0]["satlat"]
        lng = satelite_data[0]["satlng"]
        for single_satelite in satelite_data:
            cummulated_mass += single_satelite["mass"]
    else:
        cummulated_mass = satelite_data["mass"]
        lat = satelite_data["satlat"]
        lng = satelite_data["satlng"]

    map_maker = MapMaker()
    file_path = map_maker.generate_heatmap_with_time(cummulated_mass, (lat, lng))
    return send_from_directory(os.path.join(os.getcwd(), 'olek_stuff', 'maps'), os.path.basename(file_path))

@cross_origin()
@app.route("/getSatelites")
@cross_origin()
def send_satelites_data():
    city = request.args.get('city', default='Warsaw', type=str).strip()
    try:
        satelite_data = get_satelite_data(city)
    except Exception:
        abort(404, 'Wrong city')

    return jsonify(satelite_data)
