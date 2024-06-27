import "./App.css";
import Userinfo from "./Components/Userinfo";
import Medical from "./Components/Medical";
import Address from "./Components/Address";
import { useState } from "react";

function App() {
  const [newInfo, setNewInfo] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    dateofbirth: "",
    sex: "",
    age: "",
    race: "",
    hispanic: "",
  });

  function handleInfoChange(e) {
    const { id, value, type, name } = e.target;

    if (type === "radio") {
      setNewInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    } else {
      setNewInfo((prevInfo) => ({
        ...prevInfo,
        [id]: value,
      }));
    }
  }

  function handleInfoSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: newInfo.firstname,
        middlename: newInfo.middlename,
        lastname: newInfo.lastname,
        dateofbirth: newInfo.dateofbirth,
        sex: newInfo.sex,
        age: newInfo.age,
        race: newInfo.race,
        hispanic: newInfo.hispanic,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    setNewInfo({
      firstname: "",
      middlename: "",
      lastname: "",
      dateofbirth: "",
      sex: "",
      age: "",
      race: "",
      hispanic: "",
    });
  }

  const [newAddress, setNewAddress] = useState({
    physicaladdress: "",
    country: "",
    physicalcounty: "",
    physicalstate: "",
  });

  function handleAddressChange(e) {
    e.preventDefault();
    setNewAddress({
      ...newAddress,
      [e.target.id]: e.target.value,
    });
  }

  function handleAddressSubmit(e) {
    e.preventDefault();
    fetch("/address", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        physicaladdress: newAddress.physicaladdress,
        country: newAddress.country,
        physicalcounty: newAddress.physicalcounty,
        physicalstate: newAddress.physicalstate,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    setNewAddress({
      physicaladdress: "",
      country: "",
      physicalcounty: "",
      physicalstate: "",
    });
  }

  const [newMedical, setNewMedical] = useState({
    facilityname: "",
    facilitycity: "",
    facilitycounty: "",
    facilitystate: "",
    phonenumber: "",
    medicalrecord: "",
  });

  function handleMedicalChange(e) {
    e.preventDefault();
    setNewMedical({
      ...newMedical,
      [e.target.id]: e.target.value,
    });
  }

  function handleMedicalSubmit(e) {
    e.preventDefault();
    fetch("/medical", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        facilityname: newMedical.facilityname,
        facilitycity: newMedical.facilitycity,
        facilitycounty: newMedical.facilitycounty,
        facilitystate: newMedical.facilitystate,
        phonenumber: newMedical.phonenumber,
        medicalrecord: newMedical.medicalrecord,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    setNewMedical({
      facilityname: "",
      facilitycity: "",
      facilitycounty: "",
      facilitystate: "",
      phonenumber: "",
      medicalrecord: "",
    });
  }
  return (
    <div>
      <Userinfo
        firstname={newInfo.firstname}
        middlename={newInfo.middlename}
        lastname={newInfo.lastname}
        dateofbirth={newInfo.dateofbirth}
        sex={newInfo.sex}
        age={newInfo.age}
        race={newInfo.race}
        hispanic={newInfo.hispanic}
        handleInfoChange={handleInfoChange}
        handleInfoSubmit={handleInfoSubmit}
      />
      <Address
        physicaladdress={newAddress.physicaladdress}
        country={newAddress.country}
        physicalcounty={newAddress.physicalcounty}
        physicalstate={newAddress.physicalstate}
        handleAddressChange={handleAddressChange}
        handleAddressSubmit={handleAddressSubmit}
      />
      <Medical
        facilitycity={newMedical.facilitycity}
        facilitycounty={newMedical.facilitycounty}
        facilityname={newMedical.facilityname}
        facilitystate={newMedical.facilitystate}
        phonenumber={newMedical.phonenumber}
        medicalrecord={newMedical.medicalrecord}
        handleMedicalChange={handleMedicalChange}
        handleMedicalSubmit={handleMedicalSubmit}
      />
    </div>
  );
}

export default App;
