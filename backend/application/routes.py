from application import app
from .get_satelite_data import get_satelite_data
from flask_cors import cross_origin
import os

from flask import send_from_directory, jsonify, request, abort

@cross_origin()
@app.route("/getMap")
def send_map():
    return send_from_directory(os.path.join(os.getcwd(), 'olek_stuff'), 'index.html')

@cross_origin()
@app.route("/getSatelites")
def send_satelites_data():
    city = request.args.get('city', default='Warsaw', type=str).strip()
    try:
        satelite_data = get_satelite_data(city)
    except Exception:
        abort(404, 'Wrong city')

    return jsonify(satelite_data)
