import React, { useState } from "react";

import "./SignUpForm.scss";

function SignUpForm({ handleSignUp }) {
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
