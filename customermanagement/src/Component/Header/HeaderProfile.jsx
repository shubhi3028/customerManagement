import React from "react";
const HeaderProfile =()=>{
    const design =(
        <>
          <div
        className="dropdown morphing scale-left user-profile col-lg-12"
        style={{ marginLeft: "2rem" }}
      >
        <a
          className="nav-link dropdown-toggle rounded-circle after-none p-0"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          <img
            className="avatar img-thumbnail rounded-circle shadow"
            src="assets/images/profile_av.png"
            alt=""
          />
        </a>
        <div className="dropdown-menu border-0 rounded-4 shadow p-0">
          <div className="card border-0 w310">
            <div className="card-body border-bottom d-flex">
              <img
                className="avatar rounded-circle"
                src="assets/images/profile_av.png"
                alt=""
              />
              <div className="flex-fill ms-3">
                <h6 className="card-title mb-0">Mark Anthony</h6>
                <span className="text-muted">markanthony@testmail.com</span>
              </div>
            </div>
            <div className="list-group m-2 mb-3">
              <a
                className="list-group-item list-group-item-action border-0"
                href="/profile_detailed"
              >
                <i className="w30 fa fa-user" />
                Profile
              </a>
              {/* <a class="list-group-item list-group-item-action border-0" href="/profile_detailed"><i class="w30 fa fa-user"></i>Change</a> */}
              <a
                className="list-group-item list-group-item-action border-0"
                href="/login"
                data-bs-toggle="offcanvas"
                data-bs-target="#change_pass"
              >
                <i className="w30 fa fa-lock" />
                Change password
              </a>
            </div>
            <a
              href="/login"
              className="btn bg-secondary text-light text-uppercase rounded-0"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
        </>
    );
    return design;
}
export default HeaderProfile;
