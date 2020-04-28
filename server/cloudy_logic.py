"""An alternative guide to bias in AI.

Designed and implemented by pixel-tree, 2020.
"""

import os

from flask import Flask, send_file

app = Flask(__name__,
            static_url_path="",
            static_folder=os.path.abspath("../static"))


@app.route("/", methods=["GET", "POST"])
def index():
    return send_file("../static/index.html")


# Use cloudy_logic.py for development;
# but use gunicorn (or other production WSGI) for deployment.
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
