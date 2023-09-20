import React from "react";
import Login from "../Login/login";
import MainContent from "../Component/MainContent";
import{Routes,Route}from "react-router-dom";
import SignUp from "../SignUp/SignUp";


const PageRouting =()=>{
const design=(
<>
<MainContent/>
<Routes>
    
</Routes>
<Routes>
<Route exact path="/login" component={Login} />
<Route exact path="/signup" component={SignUp}/>
</Routes>
</>
);
return design;
}
export default PageRouting;