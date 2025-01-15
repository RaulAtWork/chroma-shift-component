# chroma-shift-component

npm **react** library for changing color themes on the application.

created by [Raul Escabia](https://github.com/RaulAtWork) <br>
[github repository](https://github.com/RaulAtWork/chroma-shift-component)

## SET UP
install the package usign <br>
`npm install chroma-shift` <br>

Import the package to your react page using <br>
`import { ChromaShift } from "chroma-shift"`

Then include ChromaShift on the most-upper part of your React application (e.g. index, App...)

```html
<ChromaShift>
    ... your app
</ChromaShift>
```

by default the mode is _USER_ which will detect which color scheme is configured on the system. If you wish to change the initial configuration, use `ChromaShiftThemes`

```jsx
import { ChromaShift, ChromaShiftThemes } from "chroma-shift"

<!--This is the default one-->
<ChromaShift initialTheme={ChromaShiftThemes.USER}>
    ... your app 
</ChromaShift>

<!-- Forces light theme -->
<ChromaShift initialTheme={ChromaShiftThemes.LIGHT}>
    ... your app
</ChromaShift>

<!-- Forces dark theme -->
<ChromaShift initialTheme={ChromaShiftThemes.DARK}>
    ... your app
</ChromaShift>
```
Now in your styles you can use

```css
/* always applies */
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
- If no `chroma-theme` is provided then it will always applies (unless overwritten).
- If  `chroma-theme` is provided then it will apply it based on the tag light/dark.

## FEATURES

### Current Theme

You can retrive the current theme by using
```jsx 
import { ChromaShiftContext } from 'chroma-shift'

function MyTheme (){
    const {theme} = useContext(ChromaShiftContext);
    return(
        <p> My current theme is {theme} </p>
    )
}
```

### Change theme on runtime
You can change the theme anytime by using function
```js
import { ChromaShiftContext, ChromaShiftThemes } from 'chroma-shift'
const {setTheme} = useContext(ChromaShiftContext);
// change the theme to dark
setTheme(ChromaShiftThemes.DARK);
```
note: only themes that are on ChromaShiftThemes will be accepted

### Add New Themes
You can specified your own themes that will be loaded into `ChromaShiftThemes` using `addThemes`.
```html
// Component will be initialized with those themes onto ChromaShiftThemes
<ChromaShift addThemes={["red", "blue", "green"]}>
    ... your app 
</ChromaShift>
```

## SCRIPTS

`npm storybook` launches storybook to see use examples.<br>
`npm build` vite build the project.<br>
`npm prepublish` run before publish the package to clean up the dist and rerun the build.<br>
`npm publish` publish to npm.<br>

`npm test` run tests on the project.<br>

## VERSIONING

_XX.XX.XX (major, minor, patch)_

**First release** 1.0.0 <br>
**Patch release** - Backward compatible bug fixes, increment third digit<br>
**Minor release** - Backward compatible new feature, increase middle digit and reset last digit to 0<br>
**Major release** - Changes that break backward compatibility, increment first digit, reset others to 0<br>


## CHANGELOG
- *v1.1.0* : Added support for multiple themes
- *v1.0.0* : First release 
- *v0.3.4* : Fixed package not correctly generated to npm
- *v0.3.2* : Fixed and added npmignore
- *V0.3.1* : Added styling to storybook
- *v0.3.0* : Added set theme on runtime
- *v0.2.0* : Added theme access and changed css selector to chroma-theme
- *v0.1.0* : First version of the package, includes just the initial mode and three default themes available