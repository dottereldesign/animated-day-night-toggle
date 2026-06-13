# Animated Day Night Toggle

A free-to-use animated dark mode and light mode toggle. The original build is vanilla HTML, CSS, and JavaScript for CodePen: the sun rolls into a thick crescent moon, clouds become stars, and the colors can be customized live.

CodePen:

https://codepen.io/jamiewilsonict/pen/LYKGjdb

## What It Is

- Vanilla HTML/CSS/JS source on CodePen
- Animated day/night, dark/light mode theme switcher
- Rolling sun-to-moon transition using an SVG mask
- Clouds-to-stars transition
- Small, compact, and medium toggle sizes
- Live color controls for sky, sun, moon, stars, and clouds
- Accessible toggle buttons with `aria-label` and `aria-pressed`
- 4px-based spacing for the surrounding UI
- `Context for AI` button that copies implementation guidance

## About This Repository

This repository currently contains a React port of the vanilla CodePen component because the repo was already a Create React App project. The source CodePen version remains plain HTML, CSS, and JavaScript.

React app location:

```bash
theme-switcher/
```

## Run The React Port

```bash
cd theme-switcher
npm install
npm start
```

## Use The Vanilla Version

For a non-React website, copy the HTML, CSS, and JavaScript from the CodePen project:

- `index.html`
- `style.css`
- `script.js`

The component uses CSS variables for the editable colors:

- `--day-bg-color`
- `--night-bg-color`
- `--sun-color`
- `--moon-color`
- `--star-color`
- `--cloud-color`

## License

Free to use, remix, and adapt.

## Author

Jamie Wilson / Dotterel Design
