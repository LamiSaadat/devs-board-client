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

  console.log(id);

  const handleDeleteClick = () => {
    deleteBoard();
    history.push("/board/gallery");
    window.location.reload(false);
  };

  useEffect(() => {
    axios.get(`${base_URL}/boards/${id}/palette`).then((response) => {
      console.log(response.data);
      setBoardColorPalette(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${base_URL}/boards/${id}/images`).then((response) => {
      console.log(response.data);
      setBoardImages(response.data);
    });
  }, []);

  const deleteBoard = async () => {
    try {
      const response = await axios.delete(`${base_URL}/boards/${id}`);
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
