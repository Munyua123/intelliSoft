function Medical() {
    return (
      <div>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="facilityname" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="facilityname" />
          </div>
          <div className="col-12">
            <label htmlFor="facilitycity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="facilitycity"
              placeholder="City"
            />
          </div>
  
          <div className="col-md-6">
            <label htmlFor="facilitycounty" className="form-label">
              County
            </label>
            <input type="text" className="form-control" id="facilitycounty" />
          </div>
          <div className="col-md-4">
            <label htmlFor="facilitystate" className="form-label">
              State
            </label>
            <input type="text" className="form-control" id="facilitystate" />
          </div>
          <div className="col-md-2">
            <label htmlFor="phonenumber" className="form-label">
              Phone number
            </label>
            <input type="number" className="form-control" id="phonenumber" />
          </div>
          <div className="col-12">
            <label htmlFor="medicalrecord" className="form-label">
              Medical Record
            </label>
            <input
              type="text"
              className="form-control"
              id="medicalrecord"
              placeholder="If you have a medical record insert here"
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
  
  export default Medical;
  