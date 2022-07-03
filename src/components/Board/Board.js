import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Board.scss";
import ColorPalette from "../ColorPalette/ColorPalette";

function Board({ boards }) {
  const { id } = useParams();
  const { boardColorPalette, setBoardColorPalette } = useState([]);
  const singleBoard = boards.find((board) => String(board.id) === id) || {};

  useEffect(() => {
    axios.get(`http://localhost:8080/boards/${id}/palette`).then((response) => {
      console.log(response.data);
      // setBoardColorPalette(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8080/boards/${id}/images`).then((response) => {
      console.log(response.data);
      // setBoardColorPalette(response.data);
    });
  }, []);

  return (
    <section>
      <h1>{singleBoard.name}</h1>
      {/* <ColorPalette colorPalette={boardColorPalette} /> */}
    </section>
  );
}

export default Board;
