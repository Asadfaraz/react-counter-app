import React, { useState } from "react";
import "./App.css";

function App() {
  // UseState for counter text
  const [counterText, setCounterText] = useState(0);
  // Function to increment the counter
  const increaseCounter = () => {
    setCounterText(counterText + 1);
    if (counterText > 10) {
    }
  };

  let colr = "blue";
  if (counterText > 0) {
    colr = "green";
  }
  if (counterText < 0) {
    colr = "red";
  }

  return (
    <section className="App">
      <h1>Very Simple Counter in React</h1>

      <h2 style={{ color: colr }}>{counterText}</h2>

      <button
        type="button"
        onClick={() => {
          setCounterText(counterText - 1);
        }}
      >
        Decrease
      </button>
      <button type="button" onClick={() => setCounterText(0)}>
        Reset
      </button>
      <button type="button" onClick={increaseCounter}>
        Increase
      </button>
    </section>
  );
}

export default App;
