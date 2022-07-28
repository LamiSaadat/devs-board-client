import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CreateBoardForm from "../../components/CreateBoardForm";
import SignUpForm from "../../components/SignUpForm";
import LogInPage from "../LogInPage";
import "./HomePage.scss";

function HomePage() {
  const history = useHistory();
  const [isSignedUp, setIsSignedUp] = useState(false);

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
        setIsSignedUp(true);
        history.push("/login");
      });
  };
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={(routerProps) => {
            return <SignUpForm handleSignUp={handleSignUp} />;
          }}
        ></Route>
        <Route path="/login" component={LogInPage}></Route>
        <Route path="/home" component={CreateBoardForm}></Route>
      </Switch>
    </Router>
  );
}

export default HomePage;
