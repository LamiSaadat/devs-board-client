import React from "react";
import "./Images.scss";
import Masonry from "react-masonry-css";

function Images({ images }) {
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
        {images.map((image) => {
          return <img className="images__image" src={image.src.large} />;
        })}
      </Masonry>
    </div>
  );
}

export default Images;
