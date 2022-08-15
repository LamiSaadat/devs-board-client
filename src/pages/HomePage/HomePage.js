import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBoardForm from "../../components/CreateBoardForm";
import BoardCreator from "../../components/BoardCreator";
import "./HomePage.scss";

function HomePage() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CreateBoardForm}></Route>
        <Route path="/create" component={BoardCreator}></Route>
      </Switch>
    </Router>
  );
}

export default HomePage;
