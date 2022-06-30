import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ColorPalette from "../ColorPalette/ColorPalette";
import "./BoardCreator.scss";

function BoardCreator() {
  const location = useLocation();
  const { boardName, keyword } = location.state;
  const [colorPalette, setColorPalette] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/palettes/${keyword}`).then((response) => {
      setColorPalette(response.data);
      console.log(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newBoard = { name: boardName };
    let newColorPalette = {
      color1: colorPalette[0].color.value,
      color2: colorPalette[1].color.value,
      color3: colorPalette[2].color.value,
      color4: colorPalette[3].color.value,
      color5: colorPalette[4].color.value,
      board_id: 1,
    };

    console.log(newColorPalette);

    axios.post("http://localhost:8080/boards", newBoard).then((response) => {
      console.log(response.data);
    });

    axios
      .post(`http://localhost:8080/palettes/${keyword}`, newColorPalette)
      .then((response) => {
        console.log(response.data);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>{boardName}</p>
        <ColorPalette colorPalette={colorPalette} />
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default BoardCreator;
