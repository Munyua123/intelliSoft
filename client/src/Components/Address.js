import React from "react";

function Address({
  physicaladdress,
  physicalcounty,
  country,
  physicalstate,
  handleAddressChange,
  handleAddressSubmit,
}) {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Physical Address</h2>
      <form
        className="row g-3"
        style={{
          border: "2px solid",
          backgroundColor: "black",
          color: "white",
          marginTop: "1rem",
        }}
        onSubmit={handleAddressSubmit}
      >
        <div className="col-12">
          <label htmlFor="physicaladdress" className="form-label">
            Physical Address
          </label>
          <input
            type="text"
            className="form-control"
            id="physicaladdress"
            placeholder="Facility Name"
            value={physicaladdress}
            onChange={handleAddressChange}
          />
        </div>
        <div className="row g-3">
          <div className="col-sm-3">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              id="country"
              placeholder="Enter your country"
              value={country}
              onChange={handleAddressChange}
            />
          </div>
          <div className="col-sm-4">
            <label htmlFor="physicalcounty" className="form-label">
              County
            </label>
            <select
              id="physicalcounty"
              className="form-select"
              value={physicalcounty}
              onChange={handleAddressChange}
            >
              <option defaultValue>Choose...</option>
              <option value="nairobi">Nairobi</option>
              <option value="kisumu">Kisumu</option>
              <option value="embu">Embu</option>
              <option value="machakos">Machakos</option>
              <option value="meru">Meru</option>
            </select>
          </div>
          <div className="col-sm-4">
            <label htmlFor="physicalstate" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="physicalstate"
              value={physicalstate}
              onChange={handleAddressChange}
            />
          </div>
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

export default Address;
