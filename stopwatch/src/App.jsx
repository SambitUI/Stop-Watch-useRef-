import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  let timeRef = useRef(null);

  function startTime() {
    timeRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }
  function stopTime() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }
  function resetTime() {
    stopTime();
    setTime(0);
  }

  return (
    <>
      <div>
        <h2>StopWatch:{time} seconds</h2>
        <button onClick={startTime}>Start</button>
        <br />
        <br />
        <button onClick={stopTime}>Stop</button>
        <br />
        <br />
        <button onClick={resetTime}>Reset</button>
      </div>
    </>
  );
}

export default App;
