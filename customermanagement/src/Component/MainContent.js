 import React from "react";
 import Login from "../Login/login";
 import SignUp from "../SignUp/SignUp";
 import Error from "./Error";
const MainContent = () => {
    const path = window.location.pathname;
  
    if (path === '/') {
      return <Login />;
    }
    else if (path === '/signup') {
        return <SignUp />;
      }
    else {
        return <Error/>;
      }
};
export default MainContent;