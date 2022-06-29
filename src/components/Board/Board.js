import React from "react";
import { useLocation } from "react-router-dom";
import ColorPalette from "../ColorPalette/ColorPalette";
import "./Board.scss";

function Board() {
  const location = useLocation();
  const { boardName, keyword } = location.state;
  return (
    <>
      <p>{boardName}</p>
      <ColorPalette keyword={keyword} />
    </>
  );
}

export default Board;
