import "./ColorPalette.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const ColorPalette = () => {
  const [colorPalette, setColorPalette] = useState([]);
  // const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/palettes").then((response) => {
      setColorPalette(response.data);
      console.log(response.data);
    });
  }, []);

  const ColorCard = styled.div`
    width: 2rem;
    height: 2rem;
    margin-bottom: 2rem;
  `;

  return (
    <>
      <div>
        <input type="text" className="keyword-input"></input>
        {colorPalette.map((color) => {
          return (
            <ColorCard
              key={color.color.clean}
              style={{
                backgroundColor: `${color.color.value}`,
              }}
            ></ColorCard>
          );
        })}

        <button>Click me</button>
      </div>
    </>
  );
};

export default ColorPalette;
