import React, { useState } from "react";
import axios from "axios";
import "./SignUpPage.scss";

function SignUpPage() {
  const [isSignedUp, setIsSignedUp] = useState("false");

  const base_URL = process.env.REACT_APP_API_URL;

  const handleSignUp = (e) => {
    e.preventDefault();

    axios
      .post(`${base_URL}/signup`, {
        name: e.target.name.value,
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then(() => {
        setIsSignedUp("true");
      });
  };

  return (
    <form onSubmit={handleSignUp}>
      <div>
        <label>
          Name
          <input type="text" placeholder="Name" name="name" />
        </label>
      </div>
      <div>
        <label>
          Username
          <input type="text" placeholder="Username" name="username" />
        </label>
      </div>
      <div>
        <label>
          Password
          <input type="password" placeholder="Password" name="password" />
        </label>
      </div>
    </form>
  );
}

export default SignUpPage;
