import { useState } from "react";
import "./PasswordChecker.css";

function PasswordChecker() {
  const [password, setPassword] = useState("");

  const hasMinimumLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialCharacter = /[^A-Za-z0-9]/.test(password);

  const passedRules = [
    hasMinimumLength,
    hasUppercase,
    hasNumber,
    hasSpecialCharacter,
  ].filter(Boolean).length;

  let strength = "Weak";

  if (passedRules >= 4) {
    strength = "Strong";
  } else if (passedRules >= 2) {
    strength = "Medium";
  }

  return (
    <section className="experiment-card password-box">
      <h2>Experiment 3: Password Strength Checker</h2>
      <p className="muted-text">
        This form checks password rules while the user types.
      </p>

      <label htmlFor="password">Enter Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Type your password"
      />

      <div className={`strength-result ${strength.toLowerCase()}`}>
        Strength: {password.length === 0 ? "Please enter a password" : strength}
      </div>

      <ul className="rule-list">
        <li className={hasMinimumLength ? "valid" : ""}>Minimum 8 characters</li>
        <li className={hasUppercase ? "valid" : ""}>At least one uppercase letter</li>
        <li className={hasNumber ? "valid" : ""}>At least one number</li>
        <li className={hasSpecialCharacter ? "valid" : ""}>
          At least one special character
        </li>
      </ul>
    </section>
  );
}

export default PasswordChecker;
