import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./BoardPage.scss";
import Board from "../../components/Board";
import BoardCreator from "../../components/BoardCreator";
import BoardsGallery from "../../components/BoardsGallery";

function BoardPage() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/boards").then((response) => {
      console.log(response.data);
      setBoards(response.data);
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/board/create" component={BoardCreator}></Route>
        <Route
          path="/board/gallery"
          render={(routerProps) => {
            return <BoardsGallery boards={boards} {...routerProps} />;
          }}
        ></Route>
        <Route
          path="/board/:id"
          render={(routerProps) => {
            return <Board boards={boards} {...routerProps} />;
          }}
        ></Route>
      </Switch>
    </Router>
  );
}

export default BoardPage;
