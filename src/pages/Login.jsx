import React from "react";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const { auth, setAuth } = React.useContext(AuthContext);

  const [userData, setData] = React.useState({
    "email": "",
    "password": ""
  });

  const home = useNavigate();
  const { email, password } = userData;
  const handleChange = (e)=>{
    let {name, value} = e.target;
    setData({...userData,[name]:value})
  }
  const handleClick = (e)=>{
    e.preventDefault()
    console.log(userData )
    fetch("https://reqres.in/api/login",{
      method:"POST",
      data: JSON.stringify(userData),
      headers:{
        "Content-type":"Application/json"
      }
   
      
     
    })
    .then((res)=>res.json())
    
    home('/home');
  }
  return (
    <div>
      <input data-cy="login-email" placeholder="Enter Email" name="email" value={email} onChange={handleChange}/>
      <input data-cy="login-password" placeholder="Enter Password" name="password" value={password} onChange={handleChange}/>
      <button data-cy="login-submit" onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
