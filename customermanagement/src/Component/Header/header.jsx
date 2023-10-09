import HeaderDropDownMenu from "./HeaderDropDownMenu";
import HeaderProfile from "./HeaderProfile";
import HeaderDropDown from "./HeaderDropDown";

import React from "react";
const Header =()=>{
    const design =(
        <>
  {/* start: link */}
  <ul className="header-right col-lg-12 justify-content-end d-flex align-items-center mb-0">
    {/* start: notifications dropdown-menu */}
    <li className="col-lg-4">
   <HeaderDropDownMenu/>
    </li>
    <li className="d-none d-xl-inline-block col-lg-4">
   <HeaderDropDown/>
    </li>
    <li>
    <HeaderProfile/>
    </li>
    {/* start: Settings toggle modal */}
  </ul>
</>

    );
    return design;
}
export default Header;