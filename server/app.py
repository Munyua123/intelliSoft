from flask import request, jsonify, make_response, session
from flask_restful import Resource
from config import api, db, app
from models import User, Address, Medical

class Users(Resource):
    def post(self):

        # firstname = request.form['firstname']
        # middlename = request.form['middlename']
        # lastname = request.form['lastname']
        # dateofbirth = request.form['dateofbirth']
        # sex = request.form['sex']
        # age = request.form['age']
        # race=request.form['race']
        # hispanic = request.form['hispanic']

        data = request.json

        firstname = data.get('firstname')
        middlename = data.get('middlename')
        lastname = data.get('lastname')
        dateofbirth = data.get('dateofbirth')
        sex = data.get('sex')
        age = data.get('age')
        race = data.get('race')
        hispanic = data.get('hispanic')
            
        new_user = User(
            firstname = firstname,
            middlename = middlename,
            lastname = lastname,
            dateofbirth = dateofbirth,
            sex = sex,
            age = age,
            race=race,
            hispanic = hispanic
            )

        db.session.add(new_user)
        db.session.commit()

        response_dict = new_user.to_dict()

        response = make_response(
            jsonify(response_dict),
            201
            )
        response.headers['Content-Type'] = 'application/json'
        return response
    
api.add_resource(Users, '/users')

class Addresses(Resource):
    def post(self):

        # physicaladdress = request.form['physicaladdress']
        # country = request.form['country']
        # physicalcounty = request.form['physicalcounty']
        # physicalstate = request.form['physicalstate']

        data = request.json

        physicaladdress = data.get('physicaladdress')
        country = data.get('country')
        physicalcounty = data.get('physicalcounty')
        physicalstate = data.get('physicalstate')
        

        new_address = Address(
            physicaladdress = physicaladdress,
            country = country,
            physicalcounty = physicalcounty,
            physicalstate = physicalstate
        )

        db.session.add(new_address)
        db.session.commit()

        response_dict = new_address.to_dict()

        response = make_response(
            jsonify(response_dict),
            201
        )
        response.headers['Content-Type'] = 'application/json'

        return response
api.add_resource(Addresses, '/address')

class Medicals(Resource):
    def post(self):

        # facilityname = request.form['facilityname']
        # facilitycity = request.form['facilitycity']
        # facilitycounty = request.form['facilitycounty']
        # facilitystate = request.form['facilitystate']
        # phonenumber = request.form['phonenumber']
        # medicalrecord = request.form['medicalrecord']

        data = request.json

        facilityname = data.get('facilityname')
        facilitycity = data.get('facilitycity')
        facilitycounty = data.get('facilitycounty')
        facilitystate = data.get('facilitystate')
        phonenumber = data.get('phonenumber')
        medicalrecord = data.get('medicalrecord')
        

        new_medical = Medical(
            facilityname = facilityname,
            facilitycity = facilitycity,
            facilitycounty = facilitycounty,
            facilitystate = facilitystate,
            phonenumber = phonenumber,
            medicalrecord = medicalrecord
        )

        db.session.add(new_medical)
        db.session.commit()

        response_dict = new_medical.to_dict()

        response = make_response(
            jsonify(response_dict),
            201
        )

        response.headers['Content-Type'] = 'application/json'
        return response

api.add_resource(Medicals, '/medical')

if __name__ == '__main__':
    app.run(debug=True, port=8000)