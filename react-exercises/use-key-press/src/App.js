import React from "react";
import useKeyPress from "./useKeyPress";
// import './App.css';

function App() {
  const hKeyPressed = useKeyPress("h");
  // console.log("==" + hKeyPressed);
  // const mKeyPressed = useKeyPress("m");
  // const cKeyPressed = useKeyPress("c");
  // let key;
  // const eventHandler = (event) => {
  //   key = event.target.value;
  //   console.log(key);
  //   console.log(keyPressed);
  // };
  // const keyPressed = useKeyPress("key");

  return (
    <div>
      {/* <input type="text" onChange={(e) => eventHandler(e)} /> */}
      {hKeyPressed ? <h1>Pressed</h1> : <h1>Not Pressed</h1>}
    </div>
  );
}

export default App;
