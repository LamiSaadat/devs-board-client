import React from "react";
import { Link } from "react-router-dom";
import "./BoardsGallery.scss";

function BoardsGallery({ boards }) {
  return (
    <section className="board-gallery-container">
      <h1 className="board-gallery__title">My Boards</h1>
      <div className="board-gallery">
        {boards.map((board) => {
          return (
            <Link to={`/board/${board.id}`} className="board">
              <p className="board__name">{board.name}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default BoardsGallery;
