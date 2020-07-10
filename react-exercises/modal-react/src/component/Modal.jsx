import React from "react";
import "./modal.css";
function Modal({ handleClose, isOpen, children }) {
  //   console.log(handleClose, isOpen, children);
  const showHideModal = isOpen
    ? "modal-container display-block"
    : "modal-container display-none";
  return (
    <div className={showHideModal}>
      <div className="main-modal">
        {children}
        <button onClick={handleClose}>close</button>
      </div>
    </div>
  );
}
export default Modal;
