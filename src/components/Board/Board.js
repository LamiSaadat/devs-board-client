import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Board.scss";
import BoardColorPalette from "../BoardColorPalette/BoardColorPalette";
import BoardImages from "../BoardImages/BoardImages";

function Board({ boards }) {
  const { id } = useParams();
  const [boardColorPalette, setBoardColorPalette] = useState(null);
  const [boardImages, setBoardImages] = useState(null);
  const singleBoard = boards.find((board) => String(board.id) === id) || {};

  console.log(id);

  useEffect(() => {
    axios.get(`http://localhost:8080/boards/${id}/palette`).then((response) => {
      console.log(response.data);
      setBoardColorPalette(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8080/boards/${id}/images`).then((response) => {
      console.log(response.data);
      setBoardImages(response.data);
    });
  }, []);

  return (
    <section className="selected-board">
      <h1 className="selected-board__title">{singleBoard.name}</h1>

      {boardColorPalette && (
        <BoardColorPalette boardColorPalette={boardColorPalette} />
      )}
      {boardImages && <BoardImages boardImages={boardImages} />}

      <div className="selected-board__btn-container">
        <Link
          to="/board/gallery"
          className="selected-board__btn selected-board__btn--close"
        >
          Close
        </Link>
        <button className="selected-board__btn" type="submit">
          Edit
        </button>
      </div>
    </section>
  );
}

export default Board;
