import { useEffect, useState } from "react";
import "./Timer.css";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((previousSeconds) => previousSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  }

  function startTimer() {
    setIsRunning(true);
  }

  function pauseTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    setIsRunning(false);
    setSeconds(0);
    setLaps([]);
  }

  function addLap() {
    if (seconds > 0) {
      setLaps([...laps, seconds]);
    }
  }

  return (
    <section className="experiment-card timer-box">
      <h2>Experiment 2: Timer / Stopwatch with Lap</h2>
      <p className="muted-text">
        This stopwatch uses useEffect and setInterval for real-time updates.
      </p>

      <div className="timer-display">{formatTime(seconds)}</div>

      <div className="button-row">
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={pauseTimer} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={resetTimer}>Reset</button>
        <button onClick={addLap} disabled={seconds === 0}>
          Lap
        </button>
      </div>

      <h3>Lap Times</h3>
      {laps.length === 0 ? (
        <p className="muted-text">No laps added yet.</p>
      ) : (
        <ol className="lap-list">
          {laps.map((lapTime, index) => (
            <li key={`${lapTime}-${index}`}>
              Lap {index + 1}: {formatTime(lapTime)}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export default Timer;
