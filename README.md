html5
=====

## HTML5 feature checker

All functions return `true` if the browser supports the captioned feature, otherwise, return `false`.

```js
// import the script: html5-feature-checker.js

// h5c is the global variable

// Check canvas
h5c.canvas();

// Check canvas text
h5c.canvastext();

// Check video
h5c.video();

// Check localStorage
h5c.localStorate();

// Check offline (application cache)
h5c.offline();

// Check geolocation
h5c.geolocation();

// Check input types
h5c.searchInput();
h5c.numberInput();
h5c.rangeInput();
h5c.colorInput();
h5c.telInput();
h5c.urlInput();
h5c.emailInput();
h5c.dateInput();
h5c.monthInput();
h5c.weekInput();
h5c.timeInput();
h5c.datetimeInput();
h5c.datetimelocalInput();
```
