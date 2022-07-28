import React from "react";
import "./LogInForm.scss";

function LogInForm({ handleLogIn }) {
  return (
    <form onSubmit={handleLogIn}>
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
      <button>Log In</button>
    </form>
  );
}

export default LogInForm;
