import React from "react";
import { useLocation } from "react-router-dom";
import "./BoardPage.scss";
import Board from "../../components/Board/Board";

function BoardPage() {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <Board />
      <p>{location.state.boardName}</p>
    </>
  );
}

export default BoardPage;
