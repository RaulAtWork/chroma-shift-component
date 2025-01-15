# chroma-shift-component

npm **react** library for changing color themes on the application.

created by [Raul Escabia](https://github.com/RaulAtWork) <br>
[github repository](https://github.com/RaulAtWork/chroma-shift-component)

## SET UP
install the package: <br>
`npm install chroma-shift` <br>

Import the package to your React app:<br>
`import { ChromaShift } from "chroma-shift"`

Wrap your application with the ChromaShift component, preferably at the root level (e.g., in *index.js*, *App.js*):

```html
<ChromaShift>
   {/* You App components*/}
</ChromaShift>
```

By default, the theme mode is set to _USER_, which automatically detects the system's configured color scheme. If you'd like to specify a theme, use the `ChromaShiftThemes` configuration:
```jsx
import { ChromaShift, ChromaShiftThemes } from "chroma-shift";

// Default behavior (system-detected theme)
<ChromaShift initialTheme={ChromaShiftThemes.USER}>
    {/* Your app components */}
</ChromaShift>

// Force light theme
<ChromaShift initialTheme={ChromaShiftThemes.LIGHT}>
    {/* Your app components */}
</ChromaShift>

// Force dark theme
<ChromaShift initialTheme={ChromaShiftThemes.DARK}>
    {/* Your app components */}
</ChromaShift>

```
In your CSS, you can define custom styles for different themes using the `chroma-theme` attribute:

```css
/* Styles that apply to all themes */
:root {
    --background-color: white; 
}

/* Applies only on light theme*/
:root [chroma-theme="light"]{
    --background-color: white;
}

/* Applies only on dark theme*/
:root [chroma-theme="dark"]{
    --background-color: black;
}
```
The `chroma-theme` can be appended to any selector:
- If no `chroma-theme` is specified, the styles will always apply (unless overridden).
- If  `chroma-theme` is present, the styles will apply only to the specified theme (light or dark).

## FEATURES

### Current Theme

You can access the current theme using the `ChromaShiftContext`:
```jsx 
import { ChromaShiftContext } from 'chroma-shift'

function MyTheme(){
    const { theme } = useContext(ChromaShiftContext);
    return(
        <p>My current theme is {theme}</p>
    )
}
```

### Change Theme at Runtime
You can dynamically update the theme at runtime using the `setTheme` function:
```js
import { ChromaShiftContext, ChromaShiftThemes } from 'chroma-shift'

const {setTheme} = useContext(ChromaShiftContext);
// change the theme to dark
setTheme(ChromaShiftThemes.DARK);
```
note: only themes that are on ChromaShiftThemes will be accepted

### Add Custom Themes
You can define and add your own themes during initialization using the `addThemes` property:
```jsx
// Component will be initialized with those themes onto ChromaShiftThemes
<ChromaShift addThemes={["red", "blue", "green"]}>
     {/* Your app */}
</ChromaShift>
```
These themes will then be available in `ChromaShiftThemes`.
## SCRIPTS

`npm storybook`: Launches Storybook to explore usage examples.<br>
`npm build`: Builds the project using Vite.<br>
`npm test`: Run tests for the project.<br>

## VERSIONING
Versioning follows the standard major.minor.patch format<br>
_XX.XX.XX (major, minor, patch)_

**First release** 1.0.0 <br>
**Patch release** - Backward compatible bug fixes, increment third digit<br>
**Minor release** - Backward compatible new feature, increase middle digit and reset last digit to 0<br>
**Major release** - Changes that break backward compatibility, increment first digit, reset others to 0<br>


## CHANGELOG
- *v1.1.0* : Added support for multiple themes.
- *v1.0.0* : First official release. 
- *v0.3.4* : Fixed package not correctly generated to npm.
- *v0.3.2* : Fixed and added npmignore.
- *V0.3.1* : Added styling to storybook.
- *v0.3.0* : Added set theme on runtime.
- *v0.2.0* : Added theme access and changed css selector to chroma-theme.
- *v0.1.0* : First version of the package, includes just the initial mode and three default themes available.