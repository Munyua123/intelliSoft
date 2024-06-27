import React from "react";

function Medical({
  facilitycity,
  facilitycounty,
  facilityname,
  facilitystate,
  phonenumber,
  medicalrecord,
  handleMedicalChange,
  handleMedicalSubmit,
}) {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Medical Details (If Hospitalized)</h2>
      <form
        className="row g-3"
        style={{
          border: "2px solid",
          backgroundColor: "black",
          color: "white",
          marginTop: "1rem",
        }}
        onSubmit={handleMedicalSubmit}
      >
        <div className="row g-2">
          <div className="col-sm-3">
            <label htmlFor="facilityname" className="form-label">
              Facility Name
            </label>
            <input
              type="text"
              className="form-control"
              id="facilityname"
              value={facilityname}
              onChange={handleMedicalChange}
            />
          </div>
          <div className="col-sm-3">
            <label htmlFor="facilitycity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="facilitycity"
              placeholder="City"
              value={facilitycity}
              onChange={handleMedicalChange}
            />
          </div>
        </div>

        <div className="col-md-4">
          <label htmlFor="facilitycounty" className="form-label">
            County
          </label>
          <input
            type="text"
            className="form-control"
            id="facilitycounty"
            value={facilitycounty}
            onChange={handleMedicalChange}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="facilitystate" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="facilitystate"
            value={facilitystate}
            onChange={handleMedicalChange}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="phonenumber" className="form-label">
            Phone number
          </label>
          <input
            type="number"
            className="form-control"
            id="phonenumber"
            value={phonenumber}
            onChange={handleMedicalChange}
          />
        </div>
        <div className="col-7">
          <label htmlFor="medicalrecord" className="form-label">
            Medical Record
          </label>

          <textarea
            className="form-control"
            id="medicalrecord"
            rows="3"
            value={medicalrecord}
            onChange={handleMedicalChange}
            placeholder="If you have a medical record insert here"
          ></textarea>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary mx-auto d-block"
            style={{ width: "10rem", marginBottom: "1rem" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Medical;
