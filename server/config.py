import os

from dotenv import load_dotenv
load_dotenv()

from flask import Flask
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_bcrypt import Bcrypt

app = Flask(__name__,)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///medical.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
secret_key = os.urandom(21)
app.secret_key = secret_key

db = SQLAlchemy()

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)


CORS(app)