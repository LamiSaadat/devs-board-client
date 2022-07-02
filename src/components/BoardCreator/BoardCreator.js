import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import ColorPalette from "../ColorPalette/ColorPalette";
import "./BoardCreator.scss";
import Images from "../Images/Images";

function BoardCreator() {
  const location = useLocation();
  const history = useHistory();
  const { boardName, keyword } = location.state;
  const [colorPalette, setColorPalette] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/palettes/${keyword}`).then((response) => {
      setColorPalette(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    const url = `https://api.pexels.com/v1/search?query=${keyword}&per_page=10`;
    const API_key = "563492ad6f9170000100000157684eda2eba41cc9560cbd8993465b8";
    axios
      .get(url, {
        headers: {
          Authorization: `${API_key}`,
        },
      })
      .then((response) => {
        console.log(response.data.photos);
        setImages(response.data.photos);
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

        let newImages = {
          image1: images[0].src.small,
          image2: images[1].src.small,
          image3: images[2].src.small,
          image4: images[3].src.small,
          image5: images[4].src.small,
          image6: images[5].src.small,
          image7: images[6].src.small,
          image8: images[7].src.small,
          image9: images[8].src.small,
          image10: images[9].src.small,
          board_id: boardId,
        };
        console.log(newImages);

        Promise.all([
          axios.post(`http://localhost:8080/palettes`, newColorPalette),
          axios.post(`http://localhost:8080/images`, newImages),
        ]).then(() => {
          history.push("/board/gallery");
        });
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>{boardName}</p>
        <ColorPalette colorPalette={colorPalette} />
        <Images images={images}></Images>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default BoardCreator;
