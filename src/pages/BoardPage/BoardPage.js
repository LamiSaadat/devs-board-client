import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./BoardPage.scss";
import Board from "../../components/Board";
import BoardCreator from "../../components/BoardCreator";
import BoardsGallery from "../../components/BoardsGallery";

function BoardPage() {
  const [boards, setBoards] = useState([]);
  const [activeColor, setActiveColor] = useState();

  const base_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${base_URL}/boards`).then((response) => {
      setBoards(response.data);
    });
  }, []);

  const onTileClick = async (color) => {
    setActiveColor(color);
    console.log(color);

    try {
      await navigator.clipboard.writeText(color);
    } catch (e) {
      console.log(`${e} - this action is not supported`);
    }
  };

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
            return (
              <Board
                boards={boards}
                onTileClick={onTileClick}
                {...routerProps}
              />
            );
          }}
        ></Route>
      </Switch>
    </Router>
  );
}

export default BoardPage;
