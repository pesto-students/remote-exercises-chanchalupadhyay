import React from "react";
import useKeyPress from "./useKeyPress";
// import './App.css';

function App() {
  const hKeyPressed = useKeyPress("h");
  console.log(hKeyPressed);
  // const mKeyPressed = useKeyPress("m");
  // const cKeyPressed = useKeyPress("c");

  return (
    <div>
      {/* <input type="text" /> */}
      {hKeyPressed ? <h1>Pressed</h1> : <h1>Not Pressed</h1>}
    </div>
  );
}

export default App;
