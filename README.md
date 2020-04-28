![Pythia](media/pythia.png)

# CLOUDY LOGIC: An Alternative Guide to Bias in AI

Live demo: [cloudylogic.space](http://cloudylogic.space).

### Context

Cloudy Logic essay. Adorno. Postmodernism. Representationalism to performativity. Axiomatic knowledge. Neural nets. Abstract authority -- dressing up superstitions in empirical terms to make them seem more credible. Tension between different logics in AI development: business <---> technical / the expectation vs reality -- design and appearance are like magic tricks to divert attention from flaws and limitations -- enveloping the world / developing space for technology rather than vice versa. Yada yada.

### Development

Prototypes:
1. Local/terminal
2. Discord
3. Browser

Current implementation: x.

Yada yada.

### Installation

Developed using Python 3.6 and Node v13.

Clone (or download) repository:

```
git clone https://github.com/pixel-tree/cloudy-logic.git
```

Create and activate virtualenv (alternatively use whatever you use):

```
cd cloudy-logic
virtualenv -p python3.6 .
source ./bin/activate
```

Install and build front-end JS:

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

For local development and testing run:

```
python cloudy_logic.py
```

You now have access through to the application through [localhost](http://localhost:8000).

For deployment configure a production WSGI such as *gunicorn* and use *wsgi.py* instead. For more information on this see [Gunicorn docs](https://docs.gunicorn.org/en/stable/index.html).
