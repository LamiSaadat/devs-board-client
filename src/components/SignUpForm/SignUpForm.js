import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./SignUpForm.scss";

function SignUpForm() {
  const base_URL = process.env.REACT_APP_API_URL;
  const history = useHistory();
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = (e) => {
    console.log("signed up");
    e.preventDefault();

    axios
      .post(`${base_URL}/signup`, {
        name: e.target.name.value,
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then(() => {
        setIsSignedUp(true);
        history.push("/login");
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
      <button>Sign Up</button>
    </form>
  );
}

export default SignUpForm;
