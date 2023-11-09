import React from "react";
import { useTheme } from "./ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default ThemeSwitcher;