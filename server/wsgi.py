"""WSGI entry point.

Ignore this file if you have no intention of deploying the application;
and run cloudy_logic.py instead.
"""

from cloudy_logic import app

if __name__ == "__main__":
    app.run()
