# chroma-shift-component

npm **react** library for changing color themes on the application.

created by [Raul Escabia](https://github.com/RaulAtWork)

## SET UP
install the package usign <br>
`npm install chroma-shift` <br>

Import the package to your react page using <br>
`import {ChromaShift} from chroma-shift`

Then include ChromaShift on the most-upper part of your applciation (e.g. index, App...)

```html
<ChromaShift>
    ... your app
</ChromaShift>
```

by default the mode is _USER_ which will detect which color scheme is configured on the system. If you wish to change the initial configuration, use `ChromaShiftThemes`

```html
<!--This is the default one-->
<ChromaShift initialTheme=ChromaShiftThemes.USER>
    ... your app 
</ChromaShift>

<!-- Forces light theme -->
<ChromaShift initialTheme=ChromaShiftThemes.LIGHT>
    ... your app
</ChromaShift>

<!-- Forces dark theme -->
<ChromaShift initialTheme=ChromaShiftThemes.DARK>
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
:root [data-theme="light"]{
    --background-color: white;
}

/* Applies only on dark theme*/
:root [data-theme="dark"]{
    --background-color: black;
}
```
The `data-theme` can be appended to any selector:
- If no `data-theme` is provided then it will always applies (unless overwritten)
- If  `data-theme` is provided then it will apply it based on the tag light/dark

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
