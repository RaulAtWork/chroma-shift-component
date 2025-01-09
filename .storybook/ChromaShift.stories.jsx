import React, { useContext } from "react";
import { ChromaShift, ChromaShiftThemes } from "../src/index.jsx";
import { ThemeModeContext } from "../src/providers/ThemeMode.jsx";
import './ChromaShift.css'

export default {
  title: "ChromaShift",
  component: ChromaShift,
};

export const UserPreference = () => (
  <ChromaShift>
    <ContentExample/>
  </ChromaShift>
);

export const ForceToLightTheme = () => (
  <ChromaShift initialMode={ChromaShiftThemes.LIGHT}>
    <ContentExample/>
  </ChromaShift>
);
export const ForceToDarkTheme = () => (
  <ChromaShift initialMode={ChromaShiftThemes.DARK}>
    <ContentExample/>
  </ChromaShift>
);


function CurrentThemeIndicator () {
  const { themeMode} = useContext(ThemeModeContext);
  return (
    <div> Current Theme: {themeMode}</div>
  )
}

function ContentExample (){
  return (
    <div className="root">
      <h1>This is a title</h1>
      <CurrentThemeIndicator/>
    </div>
  )
}