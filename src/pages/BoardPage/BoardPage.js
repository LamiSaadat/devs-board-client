import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./BoardPage.scss";
import Board from "../../components/Board";
import BoardCreator from "../../components/BoardCreator";
import BoardsGallery from "../../components/BoardsGallery";

function BoardPage() {
  return (
    <Router>
      <Switch>
        <Route path="/board/create" component={BoardCreator}></Route>
        <Route path="/board/gallery" component={BoardsGallery}></Route>
        <Route path="/board/:id" component={Board}></Route>
      </Switch>
    </Router>
  );
}

export default BoardPage;
