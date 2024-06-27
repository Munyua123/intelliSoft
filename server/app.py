from flask import request, jsonify, make_response, session,render_template
from flask_restful import Resource
from config import bcrypt, api, db, app
from models import User, Address, Medical

if __name__ == '__main__':
    app.run(debug=True, port=8000)