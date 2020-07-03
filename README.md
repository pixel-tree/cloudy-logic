![Pythia](repo-media/pythia.png)

# CLOUDY LOGIC: A Visual Manifesto on Bias

Live demo: [cloudylogic.space](https://cloudylogic.space).

### CONTEXT

Cloudy Logic is a piece of philosophical writing and a multimedia artwork hosted online, made up of several narratives that broadly contemplate representations, knowledge and the nature of reality. It is inspired by an article of the same name ([James, 2015](https://thenewinquiry.com/cloudy-logic/)), in which parallels are made between machine learning and pseudo-rational practices such as astrological forecasting: essentially, masquerading superstitions in empirical terms to make them seem more credible.

Most machine learning systems may be broken down into three main components: data representation (how information is fed into the network), objective function (a way to represent the problem) and optimisation method (the means to achieve our objective). Bias, in this context, is often associated with its negative connotations (e.g. racial bias) or in a more technical sense with underfitting (i.e. failure to capture underlying patterns in the data). The mainstream conversation rarely addresses (inductive) bias for its utility, as the necessary evil: assumptions help learning algorithms distinguish signal from noise (further reading: priors).

Developed in response to conversations with various experts and nonexperts about interpretability in AI, the core idea behind the featured stories is to consider bias in the context of knowledge production, because, without specificity it is merely reduced to rhetoric—a scapegoat for a more expansive problem.

### DEVELOPMENT

Yada yada. TBW.

### INSTALLATION

Developed using Python 3 and Node v13.

Project split into two folders: **server/** for Python backend and **static/** for frontend. The reason being that one of the backend for one of the main components is written in Python.

***Disclaimer!***

*I was learning JS and Node during this project and so the code is fairly messy. Needs a major rework, e.g., lazy loading, build class of utilities for repetitive tasks/functions, implement algorithms to create elements, etc... should be redesigned top-down.*

Clone repository:

```
git clone https://github.com/pixel-tree/cloudy-logic.git
```

Create virtualenv/pipenv install:

e.g.

```
cd cloudy-logic
virtualenv -p python3 .
source ./bin/activate
```

#### FRONTEND

Install Node dependencies:

```
cd static
npm install
```

Sequencer functions are disabled in dev mode. You may develop individual components using the dedicated dev section in src/Main.js.

Start webpack-dev-server (skip to build if no further development needed):

```
npm run start
```

Access the app through ***[localhost:8080](http://localhost:8080)***. Browser refreshes automatically when changes are made.

Once finished developing frontend, build the app:

```
npm run build
npm run loader
```

#### DIALOGFLOW

The chatbot component should be implemented using Dialogflow v2.

It is possible to use a bespoke machine learning model instead; but in that case you will have to rewrite pythia.py. I have chosen to use Dialogflow as Pythia NPC is used for navigation (needs to be trained to recognise specific intents).

Create new project and agent; navigate to GCP console and create a Service Account for agent; export the keys as .json file and place in project root; create .env file for environment variables and place in root (Dialogflow Project ID and path to .json file; see placeholders in repo) ***-- important! --*** used to prevent sharing sensitive information.

Chatbot will only work when running Flask/Python WSGI server; not with Node server (see below).

#### SERVER

Install dependencies:

```
pip install -r ../server/requirements.txt
```

For local dev server simply run:

```
python ../server/cloudy_logic.py
```

Access the app through ***[localhost:8000](http://localhost:8000)***.

#### DEPLOYMENT

Having made sure that everything works as intended, configure production server for deployment. There are a multitude of options and it may be easiest to use an app hosting service (GCP App Engine, Heroku, etc.), but I will briefly describe my workflow:

Debian 10 VM running on GCP with static IP;

clone repo and install dependencies;

purchase domain and set up DNS A record for external IP;

configure ***[NGINX](http://nginx.org/en/docs/beginners_guide.html#conf_structure)*** and ***[Gunicorn](https://docs.gunicorn.org/en/stable/index.html)***;

request SSL certificate using ***[Certbot](https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx)***;

set up a background service for the server to stay live 24/7 + automate server launch on boot;

and use wsgi.py as entrypoint, e.g., gunicorn wsgi:app.
