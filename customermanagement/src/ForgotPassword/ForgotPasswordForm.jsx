import React from "react";
const ForgotPasswordForm = () => {
  const design = (
    <form className="row g-3">
      <div className="col-12 mb-5">
        <div className="mb-4 ">
          <a
            href="#"
            className="brand-icon d-flex align-items-center text-primary"
          >
  <img src="./assets/img/auth-password-reset.svg" class="w240 mb-4" alt="" />           
          </a>
        </div>
        <h1 className="d-flex">Forgot password?</h1>
        <span>
          Enter the mobile number you used when you joined and we'll send you
          instructions to reset your password.
        </span>
      </div>
      <div className="col-12">
        <div>
          <label className="form-label">Mobile number</label>
          <input
            type="number"
            className="form-control form-control-sm"
            placeholder="+91-9912345678"
          />
        </div>
      </div>
      <div className="col-12 mt-4">
        <a
          href="/"
          title=""
          className="btn btn-lg btn-block btn-primary lift px-3"
        >
          Submit
        </a>
      </div>
      <div className="col-12 mt-4">
        <span className="text-muted">
          <a href="/">Back to Sign in</a>
        </span>
      </div>
    </form>
  );
  return design;
};
export default ForgotPasswordForm;
