import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className="slider round"></span>
    </label>
  );
}

export default ToggleSwitch;
