from application import app
import os

from flask import send_from_directory


@app.route("/getMap")
def send_map():
    return send_from_directory(os.path.join(os.getcwd(), 'olek_stuff'), 'index.html')
