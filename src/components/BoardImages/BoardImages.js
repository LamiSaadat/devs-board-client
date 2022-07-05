import React from "react";
import "./BoardImages.scss";
import Masonry from "react-masonry-css";

function BoardImages({ boardImages }) {
  const breakpointColumnsObj = {
    default: 5,
  };

  return (
    <div className="board-images">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        <img className="board-images__image" src={boardImages[0].image1} />

        <img className="board-images__image" src={boardImages[0].image2} />

        <img className="board-images__image" src={boardImages[0].image3} />

        <img className="board-images__image" src={boardImages[0].image4} />

        <img className="board-images__image" src={boardImages[0].image5} />

        <img className="board-images__image" src={boardImages[0].image6} />

        <img className="board-images__image" src={boardImages[0].image7} />

        <img className="board-images__image" src={boardImages[0].image8} />

        <img className="board-images__image" src={boardImages[0].image9} />

        <img className="board-images__image" src={boardImages[0].image10} />
      </Masonry>
    </div>
  );
}

export default BoardImages;
