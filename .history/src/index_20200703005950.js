import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Room() {
  const [isLit, setLit] = React.useState(true);
  const lightedness = isLit ? "lit" : "dark";

  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={() => setLit(!isLit)}>flip</button>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById("root"));