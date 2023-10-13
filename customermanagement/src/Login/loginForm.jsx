import React, { useState } from "react";
import { Button, Form} from "react-bootstrap";
import {doLogin } from "../Component/ApiService/index"
import { loginUser} from "../Component/ApiService/loginApi"

const LoginForm =()=>{
  
// const [email,setEmail]=useState("");
// const [password,setPassword]=useState("");

  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({ 
      ...loginDetail,
      [field]: actualValue 
    });
  };

  //Using Axios
  const handleFormSubmit= (event)=> {
    event.preventDefault();
    console.log(loginDetail);
  
    loginUser(loginDetail).then((data) => {
      console.log("user login: ");
      console.log(data);

      //save the data to local storage
      doLogin(data, () =>
      {
        console.log("login Detail is saved to local storage")
      } )
    }).catch((error) => {
      console.log(error);
    })

    }

//Using fetch APi - different way
// const [email, seteEmail] = useState('');
// const [password,setPassword]=useState('')
//   const handleSubmit =(event)=>{
//     event.preventDefault();
//     const data = { email: email, password: password};
//     fetch("http://localhost:81/api/auth", {
//     mode: 'cors',
//     method: "POST",
//     cache: 'no-cache',
//     credentials: 'same-origin' ,
//     body: { "endpoint": "123", "expirationTime": null, "keys": { "p256dh": "ttdd", "auth": "dssd" } },
//     headers: {
//         'content-type': 'application/json'
//     },
//      body: JSON.stringify(data)
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
// }

  //Using Fetch API
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await fetch("http://localhost:81/api/auth", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       mode:"cors",
  //       body: JSON.stringify(loginDetail),
  //     });
      
  //     const data = await response.json();
  //     if (data && data.token) {
  //       console.log("Hello");
  //       console.log("JWT Token:", data.token);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

//   const handlesubmit=(e)=>{
//     e.preventDefault();
//   const empdata= {name,email,phone,isactive};
//   fetch("http://localhost:81/employees",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify(empdata)
//   }).
//   then((res)=>{

//     alert("saved successfully")
//     navigate('/');
//   }).
//   catch((err)=>{
//     console.log(err.message);
//   })
// }


// const handleSubmit = (e) => {
//   e.preventDefault();
//   // console.log(loginDetail);
//   fetch("http://localhost:81/api/auth", {
//     method: "POST",
//     body:JSON.stringify({
//       email,password
//     }),
//     headers: {'Content-Type':'application/json',
//                     'Access-Control-Allow-Origin':'*',
//                     'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}
  
//   }).then((res) => {
//     console.log(res.json());
//   }).catch((error) => {
//     console.log(error);
//   })
// }

    const design = (
    <Form className="row g-3"  onSubmit={handleFormSubmit}>
                <div className="mb-4 ">
                  <a
                    href="#"
                    className="brand-icon align-items-center text-primary"
                  >
                    <img
                      src="assets/img/logo.png"
                      alt="Customer Management"
                      style={{ height: 70 }}
                      />
                  </a>
                </div>
                <div className="col-12">
                  <div className="">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      placeholder="Email"
                      value={loginDetail.email}
                      onChange={(e) => handleChange(e, 'email')}
                      // value={email}
                      // onChange={e => setEmail(e.target.value)}
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
                      value={loginDetail.password}
                      onChange={(e) => handleChange(e, 'password')}
                      // value={password}
                      // onChange={e => setPassword(e.target.value)}
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
    
                    {/* <Button>Login</Button> */}
                    <Button type="submit">Login</Button>
            
                </div>
              </Form>
    );
    return design
}
export default LoginForm;






















