import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ColorPalette from "../ColorPalette/ColorPalette";
import "./Board.scss";

function Board() {
  const location = useLocation();
  const { boardName, keyword } = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();

    let newBoard = { name: boardName };

    axios.post("http://localhost:8080/boards", newBoard).then((response) => {
      console.log(response);
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>{boardName}</p>
        <ColorPalette keyword={keyword} />
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default Board;
