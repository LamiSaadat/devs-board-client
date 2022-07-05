import React from "react";
import "./BoardImages.scss";

function BoardImages({ boardImages }) {
  return (
    <div className="board-images">
      <ul className="board-images__list">
        <li className="board-images__list-item">
          <img className="board-images__image" src={boardImages[0].image1} />
        </li>
        <li className="board-images__list-item">
          <img className="board-images__image" src={boardImages[0].image2} />
        </li>
        <li className="board-images__list-item">
          <img className="board-images__image" src={boardImages[0].image3} />
        </li>
        <li className="board-images__list-item">
          <img className="board-images__image" src={boardImages[0].image4} />
        </li>
        <li className="board-images__list-item">
          <img className="board-images__image" src={boardImages[0].image5} />
        </li>
        <li className="board-images__list-item">
          <img className="board-images__image" src={boardImages[0].image6} />
        </li>
        <li className="board-images__list-item">
          <img className="board-images__image" src={boardImages[0].image7} />
        </li>
        <li className="board-images__list-item">
          <img className="board-images__image" src={boardImages[0].image8} />
        </li>
        <li className="board-images__list-item">
          <img className="board-images__image" src={boardImages[0].image9} />
        </li>
        <li className="board-images__list-item">
          <img className="board-images__image" src={boardImages[0].image10} />
        </li>
      </ul>
    </div>
  );
}

export default BoardImages;
