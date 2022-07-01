import React from "react";
import { Link } from "react-router-dom";

function BoardsGallery({ boards }) {
  return (
    <div>
      {boards.map((board) => {
        return (
          <Link to={`/board/${board.id}`}>
            <p>{board.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default BoardsGallery;
