import React, { useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import axios from "axios";
import ColorPalette from "../ColorPalette/ColorPalette";
import "./BoardCreator.scss";
import Images from "../Images/Images";

function BoardCreator({}) {
  const location = useLocation();
  const history = useHistory();
  const API_key = process.env.REACT_APP_API_KEY;
  const base_URL = process.env.REACT_APP_API_URL;

  const { boardName, keyword } = location.state;
  const [colorPalette, setColorPalette] = useState([]);
  const [images, setImages] = useState([]);

  //get color palette by keyword
  useEffect(() => {
    axios.get(`${base_URL}/palettes/${keyword}`).then((response) => {
      setColorPalette(response.data);
    });
  }, []);

  //get images by keyword
  useEffect(() => {
    const url = `https://api.pexels.com/v1/search?query=${keyword}&per_page=10`;
    axios
      .get(url, {
        headers: {
          Authorization: `${API_key}`,
        },
      })
      .then((response) => {
        setImages(response.data.photos);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newBoard = { name: boardName };

    axios
      .post(`${base_URL}/boards`, newBoard)
      .then((response) => {
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

        let newImages = {
          image1: images[0].src.landscape,
          image2: images[1].src.landscape,
          image3: images[2].src.landscape,
          image4: images[3].src.landscape,
          image5: images[4].src.landscape,
          image6: images[5].src.landscape,
          image7: images[6].src.landscape,
          image8: images[7].src.landscape,
          image9: images[8].src.landscape,
          image10: images[9].src.landscape,
          board_id: boardId,
        };

        //add color palette and images to board
        Promise.all([
          axios.post(`${base_URL}/palettes`, newColorPalette),
          axios.post(`${base_URL}/images`, newImages),
        ]).then(() => {
          history.push("/board/gallery");
          window.location.reload(false);
        });
      });
  };
  return (
    <section className="create-form-container">
      <form className="create-form" onSubmit={handleSubmit}>
        <h1 className="create-form__title">{boardName}</h1>
        <ColorPalette colorPalette={colorPalette} />
        <Images images={images}></Images>
        <div className="create-form__btn-container">
          <Link to="/" className="create-form__btn create-form__btn--cancel">
            Cancel
          </Link>
          <button className="create-form__btn" type="submit">
            Save
          </button>
        </div>
      </form>
    </section>
  );
}

export default BoardCreator;
