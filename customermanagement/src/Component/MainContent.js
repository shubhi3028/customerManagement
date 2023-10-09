 import React from "react";
 import Login from "../Login/login";
 import SignUp from "../SignUp/SignUp";
 import Error from "./Error";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import AdminUi from "../Admin/AdminUi";
import NavbarBox from "./Navbar/NavBarBox";
const MainContent = () => {
    const path = window.location.pathname;
  
    if (path === '/') {
      return <Login />;
    }
    else if (path === '/signup') {
        return <SignUp />;
      }
      else if (path === '/forgotpassword') {
        return <ForgotPassword />;
      }
      else if(path==='/admin'){
        return <AdminUi/>
      }
      else if(path==='/navbarbox'){
        return <NavbarBox/>
      }
    else {
        return <Error/>;
      }
};
export default MainContent;