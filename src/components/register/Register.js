import React from "react";
import { useState, useEffect } from "react";
import "./Register.css";
function Register() {
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [email, setEmail] = useState("");
  const ChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const ChangeCheckPassword = (event) => {
    setCheckPassword(event.target.value);
  };
  const ChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const submitRegister = (event) => {
    event.preventDefault();
    console.log(password, checkPassword, email);
  };
  return (
    <div>
      <div class="container">
        <form onSubmit={submitRegister} action="">
          <p>Register</p>
          <div>
            <input
              onChange={ChangePassword}
              type="password"
              name="password"
              value={password}
              placeholder="Password..."
            />
          </div>
          <div>
            <input
              onChange={ChangeCheckPassword}
              type="password"
              name="re-password"
              value={checkPassword}
              placeholder="re-Password..."
            />
          </div>

          <div>
            <input
              onChange={ChangeEmail}
              type="email"
              name="e-mail"
              value={email}
              placeholder="e-mail"
            />
          </div>
          <div></div>
          <div>
            <input type="submit" value="Register" />
          </div>
          <a class="signIn" href="\SignIn">
            Already have an account? Log in
          </a>
        </form>
      </div>
    </div>
  );
}

export default Register;
