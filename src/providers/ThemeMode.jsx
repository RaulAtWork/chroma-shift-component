import React, { createContext, useEffect, useState } from "react";
import useSystemTheme from "../hooks/useSystemTheme";

// Theme modes
const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  USER: "user",
};

// Context for managing the theme. This is just an interface we will set the values later
const ThemeModeContext = createContext({
  themeMode: THEMES.LIGHT,
  setTheme: () => {},
});

// Provider
function ThemeModeProvider({ children, initialMode = THEMES.USER }) {
  const [themeMode, setThemeMode] = useState(initialMode);
  const [isSystemDarkPreference] = useSystemTheme();

  const setTheme = (newMode) => {
    if ( newMode in Object.values(THEMES))
      setThemeMode(newMode);
  };
  
  // Injects the theme onto the body 
  const setDataTheme = (newTheme) => {
    const app = document.body;
    app.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    let newMode = THEMES.LIGHT; // dummy value

    if (themeMode === THEMES.USER){
      // if the mode is user we get the current user preferences on the browser
      newMode = isSystemDarkPreference ? THEMES.DARK : THEMES.LIGHT;
    } else {
      newMode = themeMode;
    }

    setDataTheme(newMode);
  }, [themeMode, isSystemDarkPreference]);  // Listens to the changes on the web browser preferences or the cchanges called on the context

    // IMPORTANT, we are passing the themeMode and SetTheme to the provider overwriting the ones on the context. Therefore, those can be accessed by the children
  return (
    <ThemeModeContext.Provider value={{ themeMode, setTheme }}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export { ThemeModeContext, ThemeModeProvider, THEMES };
