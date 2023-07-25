import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import Cookies from 'universal-cookie';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cookies = new Cookies();
    try{
      const response =  await fetch("http://127.0.0.1:8000/api/users/login", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        // credentials: 'include',
        body: JSON.stringify(
            {
            "username": e.target.email.value,
            "password": e.target.password.value
          }
        )
      });
      const body = await response.text();
      const result = JSON.parse(body);
      if (response.ok == false){
        throw Error(body);
      }
      cookies.set('jwt', result.jwt);
      navigate("/dashboard");
    }
    catch (e){
      alert(e);
    }

  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <h1>Road Runners Welcome you again❤️</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
