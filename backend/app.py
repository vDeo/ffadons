from flask import Flask
from flask_cors import CORS

import requests
app = Flask(__name__) 
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/api/addons")
def get_addons():
    addOnApi = "https://addons.mozilla.org/api/v4/addons/search?sort=downloads&page_size=10"
    response = requests.get(addOnApi)
    return response.json();