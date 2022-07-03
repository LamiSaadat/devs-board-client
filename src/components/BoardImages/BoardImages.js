import React from "react";

function BoardImages({ boardImages }) {
  return (
    <div>
      <img src={boardImages[0].image1} />
      <img src={boardImages[0].image2} />
      <img src={boardImages[0].image3} />
      <img src={boardImages[0].image4} />
      <img src={boardImages[0].image5} />
      <img src={boardImages[0].image6} />
      <img src={boardImages[0].image7} />
      <img src={boardImages[0].image8} />
      <img src={boardImages[0].image9} />
      <img src={boardImages[0].image10} />
    </div>
  );
}

export default BoardImages;
