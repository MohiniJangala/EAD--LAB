import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function resetCount() {
    setCount(0);
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <section className={`experiment-card counter-box ${theme}`}>
      <h2>Experiment 1: Smart Counter with Theme Toggle</h2>
      <p className="muted-text">
        This counter uses useState for count value and theme value.
      </p>

      <div className="counter-display">
        <span>Current Count</span>
        <strong>{count}</strong>
      </div>

      <p>Selected Theme: {theme}</p>

      <div className="button-row">
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount} disabled={count === 0}>
          Decrement
        </button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </section>
  );
}

export default Counter;
