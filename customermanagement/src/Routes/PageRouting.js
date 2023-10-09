import React from "react";
import Login from "../Login/login";
import MainContent from "../Component/MainContent";
import{Routes,Route}from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import AdminUi from "../Admin/AdminUi";
import NavbarBox from "../Component/Navbar/NavBarBox";


const PageRouting =()=>{
const design=(
<>
<MainContent/>
<Routes>
    
</Routes>
<Routes>
<Route exact path="/login" component={Login} />
<Route exact path="/signup" component={SignUp}/>
<Route exact path="/forgotpassword" component={ForgotPassword}/>
<Route exact path="/admin" component={AdminUi}/>
<Route exact path="/navbarbox" component={NavbarBox}/>


</Routes>
</>
);
return design;
}
export default PageRouting;