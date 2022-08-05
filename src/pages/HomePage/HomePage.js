import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBoardForm from "../../components/CreateBoardForm";
import SignUpForm from "../../components/SignUpForm";
import LogInForm from "../../components/LogInForm";
import "./HomePage.scss";

function HomePage() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignUpForm} />
        <Route path="/login" component={LogInForm} />
        <Route path="/home" component={CreateBoardForm} />
      </Switch>
    </Router>
  );
}

export default HomePage;
