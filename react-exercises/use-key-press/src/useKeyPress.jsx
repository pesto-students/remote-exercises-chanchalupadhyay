import React from "react";
import { useState, useEffect } from "react";

function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  const keyDownHandler = ({ pressedKey }) => {
    console.log(targetKey, pressedKey);
    if (pressedKey === targetKey) {
      setKeyPressed(true);
    }
  };
  const keyUpHandler = ({ pressedKey }) => {
    if (pressedKey === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
    };
  }, []);
  return keyPressed;
}
export default useKeyPress;
