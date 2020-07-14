import React from "react";
import "./modal.css";
function Modal({ isOpen, children ,closeModal,tittle}) {
  
  const showHideModal = isOpen
    ? "modal-container display-block"
    : "modal-container display-none";

  return !isOpen ? null : (
     <div className="modal-header">
       <h3>{tittle}</h3>
     <span className="close-modal-btn" onClick={closeModal}>×</span>
    </div>

     
                <div className="modal-body">
                    <p>
                        {children}
                    </p>
                </div>


                <div className="modal-footer">
                    <button className="btn-cancel" onClick={closeModal}>CLOSE</button>
                </div>
    </div>
  );
}
export default Modal;
