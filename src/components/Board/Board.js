import { useParams, Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Board.scss";
import BoardColorPalette from "../BoardColorPalette/BoardColorPalette";
import BoardImages from "../BoardImages/BoardImages";
import DeleteModal from "../DeleteModal/DeleteModal";

function Board({ boards }) {
  const { id } = useParams();
  const history = useHistory();

  const [boardColorPalette, setBoardColorPalette] = useState(null);
  const [boardImages, setBoardImages] = useState(null);
  const [showModal, setShowModal] = useState("false");

  const singleBoard = boards.find((board) => String(board.id) === id) || {};

  console.log(id);

  const handleDeleteClick = () => {
    deleteBoard();
    history.push("/board/gallery");
    window.location.reload(false);
  };

  const handleClose = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/boards/${id}/palette`).then((response) => {
      console.log(response.data);
      setBoardColorPalette(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8080/boards/${id}/images`).then((response) => {
      console.log(response.data);
      setBoardImages(response.data);
    });
  }, []);

  const deleteBoard = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/boards/${id}`);
      console.log(response.status);
    } catch (e) {
      console.log("something went wrong!", e);
    }
  };

  return (
    <>
      <section className="selected-board">
        <h1 className="selected-board__title">{singleBoard.name}</h1>

        {boardColorPalette && (
          <BoardColorPalette boardColorPalette={boardColorPalette} />
        )}
        {boardImages && <BoardImages boardImages={boardImages} />}

        <div className="selected-board__btn-container">
          <Link
            to="/board/gallery"
            className="selected-board__btn selected-board__btn--close"
          >
            Close
          </Link>
          <button
            className="selected-board__btn"
            type="submit"
            onClick={handleClose}
          >
            Delete
          </button>
        </div>
      </section>
      {!showModal && (
        <DeleteModal
          handleDeleteClick={handleDeleteClick}
          handleClose={handleClose}
        />
      )}
    </>
  );
}

export default Board;
