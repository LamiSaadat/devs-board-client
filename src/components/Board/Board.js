import { useParams, Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Board.scss";
import BoardColorPalette from "../BoardColorPalette/BoardColorPalette";
import BoardImages from "../BoardImages/BoardImages";
import DeleteModal from "../DeleteModal/DeleteModal";
import { Button, useDisclosure } from "@chakra-ui/react";

function Board({ boards }) {
  const { id } = useParams();
  const history = useHistory();
  const base_URL = process.env.REACT_APP_API_URL;

  const [boardColorPalette, setBoardColorPalette] = useState(null);
  const [boardImages, setBoardImages] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const singleBoard = boards.find((board) => String(board.id) === id) || {};

  //handle board deletion
  const handleDeleteClick = () => {
    deleteBoard();
    history.push("/board/gallery");
    window.location.reload(false);
  };

  //get color palette from existing board
  useEffect(() => {
    axios
      .get(`${base_URL}/boards/${id}/palette`)
      .then((response) => {
        setBoardColorPalette(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  //get images from existing board
  useEffect(() => {
    axios
      .get(`${base_URL}/boards/${id}/images`)
      .then((response) => {
        setBoardImages(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  //axios call to delete board
  const deleteBoard = async () => {
    try {
      await axios.delete(`${base_URL}/boards/${id}`);
    } catch (err) {
      console.log(err);
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
          <Button
            onClick={onOpen}
            className="selected-board__btn selected-board__btn--delete"
          >
            Delete
          </Button>
        </div>
      </section>

      <DeleteModal
        handleDeleteClick={handleDeleteClick}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default Board;
