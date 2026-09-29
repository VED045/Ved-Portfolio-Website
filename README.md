# Ved Deshpande — Portfolio

A single-page interactive portfolio inspired by the cinematic motion and 3D feel of [red1-for-hek/portfolio-website](https://github.com/red1-for-hek/portfolio-website). The design and implementation here are original. It features an interactive laptop terminal, a Galaxy S25 Ultra-inspired concept phone with a motorized pop-up front camera, six project previews, and an experience timeline.

## Run locally

Open `index.html` in a modern browser. For the most reliable preview, serve this directory locally:

```sh
python -m http.server 4173
```

Then visit `http://localhost:4173`.

No build step or JavaScript dependencies are required. Google Fonts need an internet connection; system font fallbacks are included. Motion is reduced when the visitor requests reduced motion.

## Edit content

Project data and links are near the top of `script.js`. Main copy, experience, achievements, and social links are in `index.html`. Color and typography variables are at the top of `styles.css`.

The phone is a Galaxy S25 Ultra-inspired conceptual mockup with a fictional pop-up camera, not an official Samsung asset. Project screen visuals are illustrative UI previews rather than screenshots of the apps.
