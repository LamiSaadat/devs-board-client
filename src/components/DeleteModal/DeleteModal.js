import React from "react";
import "./DeleteModal.scss";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

function DeleteModal({ handleDeleteClick, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="delete-modal">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete board?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure you want to delete this board?</ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={onClose}
            bg={"fff"}
            color={"#67595e"}
            border={"1px solid #eed6d3"}
            borderRadius={"10rem"}
            _hover={{ background: "#fff" }}
            _active={{ background: "#fff", border: "3px solid #eed6d3" }}
          >
            Close
          </Button>
          <Button
            variant="ghost"
            onClick={handleDeleteClick}
            bg={"#eed6d3"}
            color={"#67595e"}
            borderRadius={"10rem"}
            _hover={{ background: "#eed6d3" }}
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>

    // <div className="delete-modal">
    //   <div className="delete-modal__information">
    //     <img
    //       src={close}
    //       alt="close"
    //       className="delete-modal__close"
    //       onClick={handleClose}
    //     />
    //     <h1 className="delete-modal__title">Delete Board?</h1>
    //     <p className="delete-modal__description">
    //       Are you sure you want to delete this board?
    //     </p>
    //     <div className="buttons delete-modal__buttons">
    //       <button
    //         className="button delete-modal__buttons--cancel"
    //         onClick={handleClose}
    //       >
    //         Cancel
    //       </button>
    //       <button
    //         className="button delete-modal__buttons--delete"
    //         onClick={handleDeleteClick}
    //       >
    //         Delete
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default DeleteModal;
