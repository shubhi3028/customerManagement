import React from "react";
const LoginForm =()=>{
    const design = (
<form className="row g-3">
                <div className="mb-4 ">
                  <a
                    href="#"
                    className="brand-icon align-items-center text-primary"
                  >
                    <img
                      src="assets/images/logo/customermanagement.png"
                      alt="Customer Management"
                      style={{ height: 70 }}
                      />
                  </a>
                </div>
                <div className="col-12">
                  <div className="">
                    <label className="form-label">Email/Mobile number</label>
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      placeholder="Email/Mobile number"
                    />
                    <div className="form-label text-end pt-2">
                      <span className="justify-content-between">
                       {/* <Link to="/forgotPassword">ForgotPassword</Link> */}
                       <a href="/forgotpassword">Forgot Password</a>

                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-2">
                    <div className="form-label">
                      <span className="d-flex justify-content-between align-items-center">
                        Password
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control form-control-sm"
                      placeholder="***************"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 mt-4">
                  <a
                    className="btn btn-sm btn-block btn-primary lift px-2 mx-1"
                    href="/admin"
                    title=""
                  >
                    Admin
                  </a>
                  <a
                    className="btn btn-sm btn-block btn-primary lift px-2"
                    href="/user"
                    title=""
                  >
                    User
                  </a>
                </div>
                <div className="col-12 mt-4">
                  <span className="text-muted">
                    Don't have an account yet?{" "}
                    <a href="/signup">Sign up here</a>
                  </span>
                </div>
              </form>
    );
    return design
}
export default LoginForm;