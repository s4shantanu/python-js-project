#!/usr/bin/env python
# coding: utf-8
from flask import Flask, render_template
from flask_assets import Environment, Bundle
import requests

app = Flask(__name__)

assets = Environment(app)
assets.url = app.static_url_path
scss = Bundle('styles.scss', filters='pyscss', output='all.css')
assets.register('css_all', scss)

@app.route("/users/<page>")
def users(page):
    response = requests.get("https://reqres.in/api/users?page={0}".format(page))
    return render_template('index.html', users=response.json()['data'])

