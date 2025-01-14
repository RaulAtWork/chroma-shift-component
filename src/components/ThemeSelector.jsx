import React, { useContext } from "react";
import { ThemeContext, THEMES } from "../providers/ThemeMode.jsx";

function ThemeSelector() {
  const { theme, setTheme } = useContext(ThemeContext);
  function onThemeChange(e) {
    setTheme(e.target.value);
  }

  return (
    <select
      className="color-selector"
      value={theme}
      onChange={onThemeChange}
    >
      <option value={THEMES.LIGHT}>Light</option>
      <option value={THEMES.DARK}>Dark</option>
      <option value={THEMES.USER}>User</option>
    </select>
  );
}

export default ThemeSelector;
