import React from 'react';
import {ThemeModeProvider, THEMES} from './providers/ThemeMode'
 
export function ChromaShift({children, initialMode = THEMES.USER}) {
  return (
    <ThemeModeProvider initialMode={initialMode}>
      {children}
    </ThemeModeProvider>
  );
}

export const ChromaShiftThemes = THEMES;