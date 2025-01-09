import React, { useContext } from "react";
import { ThemeModeContext, THEMES } from "../providers/ThemeMode";

function ThemeSelector() {
  const { themeMode, setTheme } = useContext(ThemeModeContext);
  function onThemeChange(e) {
    setTheme(e.target.value);
  }

  return (
    <select
      className="color-selector"
      value={themeMode}
      onChange={onThemeChange}
    >
      <option value={THEMES.LIGHT}>Light</option>
      <option value={THEMES.DARK}>Dark</option>
      <option value={THEMES.USER}>User</option>
    </select>
  );
}

export default ThemeSelector;
