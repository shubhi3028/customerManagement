import React from "react";
const HeaderDropDown = ()=>{
    const design =(
        <div className="dropdown">
        <a
          className="btn btn-outline-primary dropdown-toggle btn-sm"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Choose view
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <a className="dropdown-item" href="mngr_dashboard.html">
              Team view
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="dashboard.html">
              My view
            </a>
          </li>
        </ul>
      </div>
    );
    return design;
}
export default HeaderDropDown;