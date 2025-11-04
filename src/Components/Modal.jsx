import React from "react";
import Button from "./Button";

const Modal = ({ isOpen, onClose, rating }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Thank you </h2>
        <p>
          You rated us with {rating} star{rating > 1 ? "s" : ""}
        </p>
        <div className="close-btn" onClick={onClose}>
          Close
        </div>
      </div>
    </div>
  );
};

export default Modal;
