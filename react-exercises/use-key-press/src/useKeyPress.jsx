import React from "react";
import { useState, useEffect } from "react";

function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  const keyDownHandler = ({ key }) => {
    console.log("before=" + targetKey, key, keyPressed);
    if (key === targetKey) {
      setKeyPressed(true);
      console.log("after=" + targetKey, key, keyPressed);
    }
  };
  // const keyUpHandler = (props) => {
  //   if (props.key === targetKey) {
  //     setKeyPressed(false);
  //   }
  // };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    // window.addEventListener("keyup", keyUpHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      // window.removeEventListener("keyup", keyUpHandler);
    };
  }, []);
  return keyPressed;
}
export default useKeyPress;
