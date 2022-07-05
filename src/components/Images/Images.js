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
          return (
            <a href={image.src.landscape} target="_blank" key={image.id}>
              <img
                className="images__image"
                src={image.src.landscape}
                alt={`Photo by ${image.photographer} on Pexels.`}
              />
            </a>
          );
        })}
      </Masonry>
    </div>
  );
}

export default Images;
