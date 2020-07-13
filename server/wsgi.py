"""WSGI entry point.

Ignore if no intention to deploy;
and run cloudy_logic.py as main.
"""

from cloudy_logic import app

if __name__ == "__main__":
    app.run()
