import React, { useContext } from "react";
import { ChromaShift, ChromaShiftThemes } from "../src/index.jsx";
import { ThemeContext } from "../src/providers/ThemeMode.jsx";
import "./ChromaShift.css";

export default {
  title: "ChromaShift",
  component: ChromaShift,
};

export const UserPreference = () => (
  <div className="root">
    <ChromaShift>
      <ContentExample />
    </ChromaShift>
  </div>
);

export const ForceToLightTheme = () => (
  <div className="root">
    <ChromaShift initialMode={ChromaShiftThemes.LIGHT}>
      <ContentExample />
    </ChromaShift>
  </div>
);
export const ForceToDarkTheme = () => (
  <div className="root">
    <ChromaShift initialMode={ChromaShiftThemes.DARK}>
      <ContentExample />
    </ChromaShift>
  </div>
);


export const SelectTheTheme = () => (
  <ChromaShift>
    <div className="root">
      <ContentExample />
      <div>
        <ThemeSelector />
      </div>
    </div>
  </ChromaShift>
);

export const IncludeOtherThemes = () => (
  <div className="root">
    <ChromaShift initialMode={ChromaShiftThemes.USER} addThemes={["red", "blue", "green"]}>
      <ContentExample />
      <ThemeSelector/>
      <p>Themes that were added: red, blue , green</p>
    </ChromaShift>
  </div>
);




// HELPER FUNCTIONS

function CurrentThemeIndicator() {
  const { theme } = useContext(ThemeContext);
  return <p> Current Theme: {theme}</p>;
}

function ContentExample() {
  return (
    <>
      <h1>This is a title</h1>
      <CurrentThemeIndicator />
    </>
  );
}


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
      {Object.values(ChromaShiftThemes).map((t, index) => <option key={t +"-" + index} value={t}>{t}</option> )}
    </select>
  );
}