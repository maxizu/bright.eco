# bright.eco

Static website for [bright.eco](https://bright.eco/): plain HTML, CSS and a little JavaScript. No build step, no cookies, no external requests (fonts and images are local).

## Structure

```
index.html            Home
contact.html          Contact
imprint.html          Imprint and privacy policy (DE/EN)
robots.txt, sitemap.xml
assets/
  css/style.css
  js/main.js          Mobile menu
  fonts/              Lato (woff2)
  img/
```

## Local preview

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.
