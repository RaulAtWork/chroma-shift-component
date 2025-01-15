import React, { createContext, useEffect, useState } from "react";
import useSystemTheme from "../hooks/useSystemTheme";

// Theme modes
const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  USER: "user",
};

// Context for managing the theme. This is just an interface we will set the values later
const ThemeContext = createContext({
  theme: THEMES.LIGHT,
  setTheme: () => {},
});

// Provider
function ThemeProvider({ children, addThemes, initialMode = THEMES.USER }) {

  // Append the themes to the list, this must be done before enythign else
  for (var th of addThemes){
    THEMES[th.toUpperCase()] = th.toLowerCase()
  }

  const [theme, setNewTheme] = useState(initialMode);
  const [isSystemDarkPreference] = useSystemTheme();

  const setTheme = (newMode) => {
    if ( Object.values(THEMES).includes(newMode))
      setNewTheme(newMode);
  };
  
  // Injects the theme onto the body 
  const setDataTheme = (newTheme) => {
    const app = document.body;
    app.setAttribute("chroma-theme", newTheme);
  };

  useEffect(() => {
    let newMode = THEMES.LIGHT; // dummy value

    if (theme === THEMES.USER){
      // if the mode is user we get the current user preferences on the browser
      newMode = isSystemDarkPreference ? THEMES.DARK : THEMES.LIGHT;
    } else {
      newMode = theme;
    }

    setDataTheme(newMode);
  }, [theme, isSystemDarkPreference]);  // Listens to the changes on the web browser preferences or the cchanges called on the context

    // IMPORTANT, we are passing the theme and SetTheme to the provider overwriting the ones on the context. Therefore, those can be accessed by the children
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider, THEMES };
