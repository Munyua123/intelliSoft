from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from config import db

class User(db.Model,SerializerMixin):
    __tablename__='users'

    id = db.Column(db.Integer, primary_key=True)
    firstname= db.Column(db.String, nullable=False)
    middlename = db.Column(db.String, nullable=False)
    lastname = db.Column(db.String)
    dateofbirth = db.Column(db.Integer)
    sex = db.Column(db.String)
    age = db.Column(db.Integer)
    race = db.Column(db.String)
    hispanic = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    address = db.relationship('Address', back_populates='user')
    medical = db.relationship('Medical', back_populates='user')

    @validates("age")
    def validate_age(self, key, age):
        age = int(age)
        if not (0 <= age <= 100):
            raise ValueError("Age can't be less than O or more than 100")
        return age  
    
    def __repr__(self):
        return f'<User {self.id}: {self.firstname} {self.age} >'
    
class Address(db.Model, SerializerMixin):
    __tablename__ = 'addresses'

    id = db.Column(db.Integer, primary_key=True)
    physicaladdress = db.Column(db.String, nullable=False)
    country = db.Column(db.String)
    physicalcounty = db.Column(db.String)
    physicalstate = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    user = db.relationship('User', back_populates='address')

    def __repr__(self):
        return f'<Address {self.id}: {self.physicaladdress} {self.physicalcounty} {self.country} >'


class Medical(db.Model, SerializerMixin):
    __tablename__ = 'medicals'

    id = db.Column(db.Integer, primary_key=True)
    facilityname = db.Column(db.String, nullable=False)
    facilitycity = db.Column(db.String)
    facilitycounty = db.Column(db.String)
    facilitystate = db.Column(db.String)
    phonenumber = db.Column(db.Integer, nullable=False)
    medicalrecord = db.Column(db.String)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    user = db.relationship("User", back_populates='medical')

    def __repr__(self):
        return f'<Medical {self.id}: {self.facilityname} {self.facilitycity} {self.phonenumber}>'