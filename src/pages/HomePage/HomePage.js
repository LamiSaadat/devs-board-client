import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CreateBoardForm from "../../components/CreateBoardForm";
import SignUpForm from "../../components/SignUpForm";
import LogInForm from "../../components/LogInForm";
import "./HomePage.scss";

function HomePage() {
  const base_URL = process.env.REACT_APP_API_URL;
  const history = useHistory();
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignUp = (e) => {
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

  const handleLogIn = (e) => {
    e.preventDefault();

    axios
      .post(`${base_URL}/login`, {
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then(({ data }) => {
        sessionStorage.authToken = data.token;
        setIsLoggedIn(true);
        history.push("/home");
      })
      .catch((err) => {
        console.log(`Log in failed: ${err}`);
      });
  };

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={(routerProps) => {
            return <SignUpForm handleSignUp={handleSignUp} {...routerProps} />;
          }}
        ></Route>
        <Route
          path="/login"
          render={(routerProps) => {
            return <LogInForm handleLogIn={handleLogIn} {...routerProps} />;
          }}
        />
        <Route path="/home" component={CreateBoardForm}></Route>
      </Switch>
    </Router>
  );
}

export default HomePage;
