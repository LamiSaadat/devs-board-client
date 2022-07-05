import React from "react";
import "./Images.scss";

function Images({ images }) {
  return (
    <div className="images">
      <ul className="images__list">
        {images.map((image) => {
          return (
            <li className="images__list-item">
              <img className="images__image" src={image.src.large} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Images;
