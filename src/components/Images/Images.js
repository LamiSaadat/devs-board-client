import React from "react";

function Images({ images }) {
  return (
    <div>
      {images.map((image) => {
        return <img src={image.src.small} />;
      })}
    </div>
  );
}

export default Images;
