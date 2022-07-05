import React from "react";
import close from "../../assets/icons/close-24px.svg";
import "./DeleteModal.scss";

function DeleteModal({ handleDeleteClick, handleClose }) {
  return (
    <div className="delete-modal">
      <div className="delete-modal__information">
        <img
          src={close}
          alt="close"
          className="delete-modal__close"
          onClick={handleClose}
        />
        <h1 className="delete-modal__title">Delete Board?</h1>
        <p className="delete-modal__description">
          Are you sure you want to delete this board?
        </p>
        <div className="buttons delete-modal__buttons">
          <button
            className="button delete-modal__buttons--cancel"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="button delete-modal__buttons--delete"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
