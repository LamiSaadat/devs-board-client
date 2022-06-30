import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import ColorPalette from "../ColorPalette/ColorPalette";
import "./BoardCreator.scss";

function BoardCreator() {
  const location = useLocation();
  const history = useHistory();
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

    axios
      .post("http://localhost:8080/boards", newBoard)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.id);
        return response.data.id;
      })
      .then((boardId) => {
        let newColorPalette = {
          color1: colorPalette[0].color.value,
          color2: colorPalette[1].color.value,
          color3: colorPalette[2].color.value,
          color4: colorPalette[3].color.value,
          color5: colorPalette[4].color.value,
          board_id: boardId,
        };
        console.log(newColorPalette);
        axios
          .post(`http://localhost:8080/palettes`, newColorPalette)
          .then((response) => {
            history.push("/board/gallery");
          });
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
