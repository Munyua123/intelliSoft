function Address() {
    return (
      <div>
        <form className="row g-3">
          <div className="col-12">
            <label htmlFor="physicaladdress" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="physicaladdress"
              placeholder="1234 Main St"
            />
          </div>
  
          <div className="col-md-6">
            <label htmlFor="physicalcity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="physicalcity" />
          </div>
          <div className="col-md-4">
            <label htmlFor="physicalcounty" className="form-label">
              County
            </label>
            <select id="physicalcounty" className="form-select">
              <option defaultValue>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="physicalstate" className="form-label">
              State
            </label>
            <input type="text" className="form-control" id="physicalstate" />
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
  
  export default Address;
  