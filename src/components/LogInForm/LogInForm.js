import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./LogInForm.scss";

function LogInForm() {
  const base_URL = process.env.REACT_APP_API_URL;
  const history = useHistory();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = (e) => {
    e.preventDefault();

    axios
      .post(`${base_URL}/login`, {
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then(({ data }) => {
        sessionStorage.authToken = data.token;
        // setIsLoggedIn(true);
        history.push("/home");
      })
      .catch((err) => {
        console.log(`Log in failed: ${err}`);
      });
  };

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
