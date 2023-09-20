import React from "react";
const SignUpForm = () => {
  const design = (
    <form className="row g-3">
      <div className="mb-4 ">
        <a href="#" className="brand-icon align-items-center text-primary">
          <img
            src="assets/images/logo/customermanagement.png"
            alt="Customer Management"
            style={{ height: 90 }}
          />
        </a>
      </div>
      <div className="col-12">
        <div className="">
          <label className="form-label">Enter a username</label>
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Username"
          />
        </div>
      </div>
      <div className="col-12">
        <div className="mb-2">
          <div className="form-label">
            <span className="d-flex justify-content-between align-items-center">
              Enter your Phone number
            </span>
          </div>
          <input
            type="number"
            className="form-control form-control-sm"
            placeholder="(+91) 222 55 685 22"
          />
        </div>
      </div>
      <div className="col-12">
        <div className="mb-2">
          <div className="form-label">
            <span className="d-flex justify-content-between align-items-center">
              Enter a password
            </span>
          </div>
          <input
            type="number"
            className="form-control form-control-sm"
            placeholder="********"
          />
        </div>
      </div>
      <div className="col-12">
        <div className="mb-2">
          <div className="form-label">
            <span className="d-flex justify-content-between align-items-center">
              Confirm password
            </span>
          </div>
          <input
            type="password"
            className="form-control form-control-sm"
            placeholder="********"
          />
        </div>
      </div>
      <div className="col-lg-12 col-md-12 mt-4">
        <a
          className="btn btn-sm btn-block btn-primary lift px-3"
          href="/auto_two_step"
          title=""
        >
          Verify
        </a>
      </div>
    </form>
  );
  return design;
};
export default SignUpForm;
