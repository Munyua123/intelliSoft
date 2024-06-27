import React from "react";

function Userinfo({
  firstname,
  middlename,
  lastname,
  dateofbirth,
  sex,
  age,
  race,
  hispanic,
  handleInfoChange,
  handleInfoSubmit,
}) {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>USER INFORMATION</h2>
      <form
        style={{
          border: "2px solid",
          padding: "1rem",
          backgroundColor: "black",
          color: "white",
        }}
        className="mx-auto d-block"
        onSubmit={handleInfoSubmit}
      >
        <div className="mb-3">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                id="firstname"
                value={firstname}
                onChange={handleInfoChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Middle name"
                id="middlename"
                value={middlename}
                onChange={handleInfoChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                id="lastname"
                value={lastname}
                onChange={handleInfoChange}
              />
            </div>
          </div>
          <div className="row g-1" style={{ marginTop: "1rem" }}>
            <div className="col-sm-1">
              <label htmlFor="dateofbirth" className="form-label">
                Date of Birth
              </label>
            </div>
            <input
              type="date"
              className="form-control"
              id="dateofbirth"
              value={dateofbirth}
              style={{ width: "15rem" }}
              onChange={handleInfoChange}
            />
          </div>
        </div>
        <div className="row g-4">
          <div className="col-sm-2">
            <label htmlFor="sex" className="form-label">
              Sex
            </label>
            <div
              className="form-check form-check-inline"
              style={{ marginLeft: "2rem" }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="sex"
                id="male"
                value="male"
                checked={sex === "male"}
                onChange={handleInfoChange}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="sex"
                id="female"
                value="female"
                checked={sex === "female"}
                onChange={handleInfoChange}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              id="age"
              value={age}
              onChange={handleInfoChange}
            />
          </div>
          <div className="col-sm-3">
            <select
              id="race"
              className="form-select"
              aria-label="Default select example"
              value={race}
              onChange={handleInfoChange}
            >
              <option defaultValue="">Race</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-sm-4">
            <label
              className="form-check-label"
              htmlFor="hispanic"
              style={{ marginRight: "2rem" }}
            >
              Hispanic or Latino:
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="hispanic"
                id="yes"
                value="yes"
                checked={hispanic === "yes"}
                onChange={handleInfoChange}
              />
              <label className="form-check-label" htmlFor="yes">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="hispanic"
                id="no"
                value="no"
                checked={hispanic === "no"}
                onChange={handleInfoChange}
              />
              <label className="form-check-label" htmlFor="no">
                No
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-auto d-block"
          style={{ width: "10rem", marginTop: "2rem" }}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default Userinfo;
