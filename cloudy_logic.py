"""CLOUDY LOGIC: A Visual Manifesto on Bias.

Designed by pixel-tree, 2020.
"""

import os

from flask import Flask, jsonify, request, send_file

from pythia import detect_intent_texts

app = Flask(__name__,
            static_url_path="",
            static_folder=os.path.abspath("./static"))


# Pythia.
@app.route('/send_message', methods=['POST'])
def send_message():
    message = request.get_data()
    # message = request.form['message']
    project_id = os.getenv('DIALOGFLOW_PROJECT_ID')
    fulfillment_text = detect_intent_texts(project_id, "unique", message, 'en')
    response_text = {"message":  fulfillment_text}

    return jsonify(response_text)


# General.
@app.route('/', methods=['GET', 'POST'])
def index():
    return send_file("./static/index.html")


# About.
@app.route('/about', methods=['GET', 'POST'])
def about():
    return send_file("./static/about/about.html")


# Use cloudy_logic.py for development;
# but gunicorn (or other production WSGI) + _wsgi.py_ for deployment.
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
