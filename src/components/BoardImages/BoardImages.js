import React from "react";
import Masonry from "react-masonry-css";
import "./BoardImages.scss";

function BoardImages({ boardImages }) {
  const breakpointColumnsObj = {
    default: 5,
  };

  return (
    <div className="images">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        <a href={boardImages[0].image1} target="_blank">
          <img className="images__image" src={boardImages[0].image1} />
        </a>
        <a href={boardImages[0].image2} target="_blank">
          <img className="images__image" src={boardImages[0].image2} />
        </a>
        <a href={boardImages[0].image3} target="_blank">
          <img className="images__image" src={boardImages[0].image3} />
        </a>
        <a href={boardImages[0].image4} target="_blank">
          <img className="images__image" src={boardImages[0].image4} />
        </a>
        <a href={boardImages[0].image5} target="_blank">
          <img className="images__image" src={boardImages[0].image5} />
        </a>
        <a href={boardImages[0].image6} target="_blank">
          <img className="images__image" src={boardImages[0].image6} />
        </a>
        <a href={boardImages[0].image7} target="_blank">
          <img className="images__image" src={boardImages[0].image7} />
        </a>
        <a href={boardImages[0].image8} target="_blank">
          <img className="images__image" src={boardImages[0].image8} />
        </a>
        <a href={boardImages[0].image9} target="_blank">
          <img className="images__image" src={boardImages[0].image9} />
        </a>
        <a href={boardImages[0].image10} target="_blank">
          <img className="images__image" src={boardImages[0].image10} />
        </a>
      </Masonry>
    </div>
  );
}

export default BoardImages;
