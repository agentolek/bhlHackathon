from flask import Flask

app = Flask(__name__)
from flask_cors import CORS, cross_origin
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

from application import routes
