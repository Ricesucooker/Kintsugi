#main config
from flask import Flask
from flask_sqlalchemy import SQLAlchmey
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URL"] = "sqllite:///luna.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchmey(app)
