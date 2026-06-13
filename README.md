# Animated Day Night Toggle

A free-to-use animated dark mode and light mode toggle built with vanilla HTML, CSS, and JavaScript. The sun rolls into a thick crescent moon, clouds become stars, and every key color can be customized live.

CodePen:

https://codepen.io/jamiewilsonict/pen/LYKGjdb

## Features

- Vanilla HTML, CSS, and JavaScript
- Rolling sun-to-moon transition using an SVG mask
- Clouds-to-stars animation
- Three sizes: small, compact, and medium
- Live color controls for day sky, night sky, sun, moon, stars, and clouds
- Accessible toggle buttons with `aria-label` and `aria-pressed`
- `prefers-reduced-motion` support
- SEO metadata, canonical URL, Open Graph, Twitter metadata, and JSON-LD
- `Context for AI` button that copies implementation guidance
- Free to use, remix, and adapt

## Files

```txt
index.html
style.css
script.js
```

## Use

Open `index.html` in a browser, or copy the markup, CSS, and JavaScript into your own site.

The main editable color variables are:

```css
--day-bg-color
--night-bg-color
--sun-color
--moon-color
--star-color
--cloud-color
```

## Accessibility

- Toggle buttons use real `button` elements.
- Toggle state is exposed with `aria-pressed`.
- Each size has a unique accessible label.
- Motion is reduced for users with `prefers-reduced-motion: reduce`.

## License

Free to use, remix, and adapt.

## Author

Jamie Wilson / Dotterel Design
