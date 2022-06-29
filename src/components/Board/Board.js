import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ColorPalette from "../ColorPalette/ColorPalette";
import "./Board.scss";

function Board() {
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

    axios.post("http://localhost:8080/boards", newBoard).then((response) => {
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

export default Board;
