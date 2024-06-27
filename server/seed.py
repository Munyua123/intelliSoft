from random import choice as rc
from faker import Faker

from config import app
from models import db, User, Address, Medical
fake = Faker()

with app.app_context():

    User.query.delete()
    Address.query.delete()
    Medical.query.delete()

    users = []
    sex=["Male", "Female"]
    hispanic = ["yes", "no"]
    age=[10,11,12,13,14,15,16,17,18]
    for n in range(50):
        user = User(firstname=fake.first_name(), middlename=fake.name(), lastname=fake.name(), dateofbirth=fake.date, sex=rc(sex), age=rc(age), race="black", hispanic=rc(hispanic))
        users.append(user)

    db.session.add_all(users)
    db.session.commit()

    address = []
    country = ["kenya", "nakuru", "kisumu", "afganistan"]
    for n in range(100):
        addresses = Address(physicaladdress=fake.company(), country=rc(country), physicalcounty=fake.county(), physicalstate=fake.state(), user=rc(users))
        address.append(addresses)

    db.session.add_all(address)
    db.session.commit()

    medical= []
    for n in range(100):
        medicals = Medical(facilityname=fake.company(), facilitycity=fake.city(), facilitycounty=fake.county(), phonenumber=fake.phone_number(), medicalrecord=fake.paragraph())
        medical.append(medicals)

    db.session.add_all(medical)
    db.session.commit()