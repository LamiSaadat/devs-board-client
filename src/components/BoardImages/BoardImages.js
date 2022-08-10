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
        <a href={boardImages[0].image1} target="_blank" rel="noreferrer">
          <img
            className="images__image"
            src={boardImages[0].image1}
            alt={`By ${boardImages[0].image1.photographer} on Pexels.`}
          />
        </a>
        <a href={boardImages[0].image2} target="_blank" rel="noreferrer">
          <img
            className="images__image"
            src={boardImages[0].image2}
            alt={`By ${boardImages[0].image2.photographer} on Pexels.`}
          />
        </a>
        <a href={boardImages[0].image3} target="_blank" rel="noreferrer">
          <img
            className="images__image"
            src={boardImages[0].image3}
            alt={`By ${boardImages[0].image3.photographer} on Pexels.`}
          />
        </a>
        <a href={boardImages[0].image4} target="_blank" rel="noreferrer">
          <img
            className="images__image"
            src={boardImages[0].image4}
            alt={`By ${boardImages[0].image4.photographer} on Pexels.`}
          />
        </a>
        <a href={boardImages[0].image5} target="_blank" rel="noreferrer">
          <img
            className="images__image"
            src={boardImages[0].image5}
            alt={`By ${boardImages[0].image5.photographer} on Pexels.`}
          />
        </a>
        <a href={boardImages[0].image6} target="_blank" rel="noreferrer">
          <img
            className="images__image"
            src={boardImages[0].image6}
            alt={`By ${boardImages[0].image6.photographer} on Pexels.`}
          />
        </a>
        <a href={boardImages[0].image7} target="_blank" rel="noreferrer">
          <img
            className="images__image"
            src={boardImages[0].image7}
            alt={`By ${boardImages[0].image7.photographer} on Pexels.`}
          />
        </a>
        <a href={boardImages[0].image8} target="_blank" rel="noreferrer">
          <img
            className="images__image"
            src={boardImages[0].image8}
            alt={`By ${boardImages[0].image8.photographer} on Pexels.`}
          />
        </a>
        <a href={boardImages[0].image9} target="_blank" rel="noreferrer">
          <img
            className="images__image"
            src={boardImages[0].image9}
            alt={`By ${boardImages[0].image9.photographer} on Pexels.`}
          />
        </a>
        <a href={boardImages[0].image10} target="_blank" rel="noreferrer">
          <img
            className="images__image"
            src={boardImages[0].image10}
            alt={`By ${boardImages[0].image10.photographer} on Pexels.`}
          />
        </a>
      </Masonry>
    </div>
  );
}

export default BoardImages;
