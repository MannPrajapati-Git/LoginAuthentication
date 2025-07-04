import React from 'react';
import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export const Login = () => {
    
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
 

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login",{email,password})
        .then(result=>{
            if(result.data==="success"){
                navigate("/home")
            }else{
                alert("login failed : user doent exist.")
            }
        })
        .catch(err=>console.log(err))
};

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          onChange={(e)=>setEmail(e.target.value)}
          name="email"
          placeholder="Email"
          value={email}
          required
        />

        <input
          type="password"
          name="password"
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
          value={password}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
