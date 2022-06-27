import "./ColorPalette.scss";
import React, { useState } from "react";
import axios from "axios";

const ColorPalette = () => {
  const [colorPalette, setColorPalette] = useState(null);

  const updateColorPalette = () => {
    axios.get("http://localhost:8080/palettes").then((response) => {
      setColorPalette(response.data);
      console.log(response.data);
    });
  };

  return (
    <>
      <div>
        <div>{colorPalette}</div>
        <button onClick={updateColorPalette}>Click me</button>
      </div>
    </>
  );
};

export default ColorPalette;
