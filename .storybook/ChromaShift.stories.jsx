import React, { useContext } from "react";
import { ChromaShift, ChromaShiftThemes } from "../src/index.jsx";
import { ThemeContext } from "../src/providers/ThemeMode.jsx";
import "./ChromaShift.css";
import ThemeSelector from "../src/components/ThemeSelector.jsx";

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
      <ThemeSelector />
    </div>
  </ChromaShift>
);

function CurrentThemeIndicator() {
  const { theme } = useContext(ThemeContext);
  return <div> Current Theme: {theme}</div>;
}

function ContentExample() {
  return (
    <>
      <h1>This is a title</h1>
      <CurrentThemeIndicator />
    </>
  );
}
