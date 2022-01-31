import React from "react";
import { useState, useEffect } from "react";
function Signin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const ChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const ChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const submitSignin = (event) => {
    event.preventDefault();
    console.log(password, email);
  };
  return (
    <div>
      <div class="container">
        <form onSubmit={submitSignin} action="">
          <p>Sign In</p>
          <div>
            <input
              type="text"
              name="E-mail"
              value={email}
              placeholder="Username..."
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password..."
            />
          </div>

          <div>
            <input type="submit" value="Sign In" />
          </div>
          <a href="\Register">Don’t have an account? Sign up</a>
        </form>
      </div>
    </div>
  );
}

export default Signin;
