function Userinfo() {
    return (
      <div>
        <form>
          <div className="mb-3">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Middle name"
                  aria-label="Middle name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
            </div>
            <label htmlFor="dateofbirth" className="form-label">
              Date of Birth
            </label>
            <input type="date" className="form-control" id="dateofbirth" />
          </div>
          <div className="mb-3">
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
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="male"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="female"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Female
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input type="age" className="form-control" id="age" />
          </div>
          <div className="mb-3">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue="">Race</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Next
          </button>
        </form>
      </div>
    );
  }
  
  export default Userinfo;
  