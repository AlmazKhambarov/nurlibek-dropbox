/** @format */

import React, { useState } from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { UserLogin } from "../../redux/extraReducer";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UserLogin({ email: email, password: password }));
  };
  return (
    <div>
      <div class='auth'>
        <form class='form-1' onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label for='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>
            You have not accaunt? <a href="/register"><b>Sign in</b></a>{" "}
          </span>
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
