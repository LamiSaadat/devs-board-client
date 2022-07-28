import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBoardForm from "../../components/CreateBoardForm";
import SignUpPage from "../SignUpPage";
import LogInPage from "../LogInPage";
import "./HomePage.scss";

function HomePage() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignUpPage}></Route>
        <Route path="/login" component={LogInPage}></Route>
        <Route path="/home" component={CreateBoardForm}></Route>
      </Switch>
    </Router>
  );
}

export default HomePage;
