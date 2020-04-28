![Pythia](media/pythia.png)

# CLOUDY LOGIC: An Alternative Guide to Bias in AI

Live demo: (cloudylogic.space).

### Context

Cloudy Logic essay. Adorno. Postmodernism. Representationalism to performativity. Neural nets. Abstract authority - dressing up superstitions in empirical terms to make them seem more credible. Tension between different logics in AI development - business and technical / the expectation vs reality - design and appearance are magic tricks to divert attention from flaws and limitations - enveloping the world / developing space for technology rather than vice versa. Yada yada.

### Development

Prototypes:
1. Local/terminal
2. Discord
3. Browser

Current implementation: x.
Yada yada.

### Installation

Developed and tested using Python 3.6 and Node v13.

Clone repository (if you have git installed -- otherwise download):

```
git clone https://github.com/pixel-tree/cloudy-logic.git
```

Create and activate virtualenv (alternatively use whatever you use):

```
cd cloudy-logic
virtualenv -p python3.6 .
source ./bin/activate
```

To install and build front-end JS:

```
cd static
npm install
npm run build
```

Install server dependencies:

```
cd ../server
pip install -r requirements.txt
```

For development and local testing run:

```
python cloudy_logic.py
```

For deployment configure a production WSGI such as *gunicorn* and use:

```
python wsgi.py
```

For more information on the latter see [Gunicorn docs](https://docs.gunicorn.org/en/stable/index.html).
