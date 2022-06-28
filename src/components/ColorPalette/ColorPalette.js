import "./ColorPalette.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const ColorPalette = () => {
  const [colorPalette, setColorPalette] = useState([]);
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.name.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/palettes", keyword);
  };

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
        <form onSubmit={handleSubmit}>
          <label>
            Keyword
            <input
              type="text"
              className="keyword-input"
              name="inputKeyword"
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div className="palette">
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
        </div>

        <button>Click me</button>
      </div>
    </>
  );
};

export default ColorPalette;
