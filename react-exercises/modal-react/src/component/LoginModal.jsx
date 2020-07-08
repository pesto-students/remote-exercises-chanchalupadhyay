import React from "react";
import "./modal.css";

function LoginModal({ status }) {
  console.log(status);
  console.log("loginModal");
  const showHideModal = status
    ? "modal-container display-block"
    : "modal-container display-none";
  return (
    <div className={showHideModal}>
      <div className="main - modal">
        <button>close</button>
      </div>
    </div>
  );
}
export default LoginModal;
