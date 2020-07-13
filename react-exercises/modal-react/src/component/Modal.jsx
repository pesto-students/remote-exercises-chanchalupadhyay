import React from "react";
import "./modal.css";
function Modal({ isOpen, children ,closeModal,tittle}) {
  
  const showHideModal = isOpen
    ? "modal-container display-block"
    : "modal-container display-none";


  return (
    <div className="modal-container" style={{
      transform: isOpen ? 'translateY(0vh)' : 'translateY(-100vh)',
      opacity: isOpen ? '1' : '0'
  }}>

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
