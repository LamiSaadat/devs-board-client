import React from "react";
import axios from "axios";

function BoardsGallery({ boards }) {
  // const allBoards = () => {
  //   axios
  //     .get("http://localhost:8080/boards")
  //     .then((response) => console.log(response.data));
  // };

  // let getBoard = allBoards();

  return (
    <div>
      {boards.map((board) => {
        return (
          <div>
            <p>{board.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BoardsGallery;
