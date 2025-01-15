import React from 'react';
import {ThemeContext, ThemeProvider, THEMES} from './providers/ThemeMode.jsx'
 
export function ChromaShift({children,addThemes=[], initialMode = THEMES.USER}) {
  return (
    <ThemeProvider initialMode={initialMode} addThemes={addThemes}>
      {children}
    </ThemeProvider>
  );
}

export const ChromaShiftThemes = THEMES;
export const ChromaShiftContext = ThemeContext;