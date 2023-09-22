 import React from "react";
 import Login from "../Login/login";
 import SignUp from "../SignUp/SignUp";
 import Error from "./Error";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import Admin from "../Admin/Admin";
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
        return <Admin/>
      }
    else {
        return <Error/>;
      }
};
export default MainContent;