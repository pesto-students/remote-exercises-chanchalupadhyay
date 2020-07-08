import React from "react";
import "./modal.css";

function SignUpModal({ status }) {
  const showHideModal = status
    ? "modal-container display-block"
    : "modal-container display-none";
  return (
    <div className={showHideModal}>
      <div className="main-modal">
        <button>close</button>
      </div>
    </div>
  );
}
export default SignUpModal;
