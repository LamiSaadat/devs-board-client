import "./ColorPalette.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ColorPalette = ({ colorPalette }) => {
  // const [colorPalette, setColorPalette] = useState([]);
  // const { id } = useParams();
  // console.log(id);
  // const [keyword, setKeyword] = useState("");

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   setKeyword(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.get(`http://localhost:8080/palettes/${keyword}`).then((response) => {
  //     setColorPalette(response.data);
  //     console.log(response.data);
  //   });
  // };

  // useEffect(() => {
  //   axios.get(`http://localhost:8080/boards/${id}`).then((response) => {
  //     setColorPalette(response.data);
  //     console.log(response.data);
  //   });
  //   // axios
  //   //   .post(
  //   //     `http://localhost:8080/boards/${this.props.match.params.id}/palettes`,
  //   //     setColorPalette
  //   //   )
  //   //   .then((response) => console.log(response));
  // }, []);

  const ColorCard = styled.div`
    width: 8rem;
    height: 8rem;
  `;

  return (
    <>
      <div>
        {/* <form onSubmit={handleSubmit}>
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
        </form> */}
        <div className="palette">
          {colorPalette.map((color) => {
            return (
              <div className="palette_card">
                <ColorCard
                  key={color.color.clean}
                  style={{
                    backgroundColor: `${color.color.value}`,
                  }}
                ></ColorCard>
                <span>{color.color.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ColorPalette;
