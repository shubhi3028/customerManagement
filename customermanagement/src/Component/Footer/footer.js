import React from "react";
const Footer = () =>{
    const design = (
        <footer className="page-footer footer px-xl-4 px-sm-2 px-0 py-3">
  {/* <footer class="fixed-bottom px-xl-4 px-sm-2 px-0 py-3" style="position: absolute;"> */}
  <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center">
    <p className="col-md-4 mb-0 text-muted">
      © 2023{" "}
      <a href="/" target="_blank" title="">
        CustomerManagement  Solutions
      </a>
      , All Rights Reserved.
    </p>
    <a
      href="/"
      className="col-md-4 d-flex align-items-center justify-content-center my-3 my-lg-0 me-lg-auto"
    >

    </a>
    <ul className="nav col-md-4 justify-content-center justify-content-lg-end">
    <li className="nav-item">
        <a href="/" className="nav-link px-2 text-muted">
        Logout
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link px-2 text-muted">
          Privacy Policy
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link px-2 text-muted">
          FAQ
        </a>
      </li>
    </ul>
  </div>
</footer>

    );
    return design;
}
export default Footer