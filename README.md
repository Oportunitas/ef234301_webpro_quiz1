# ef234301_webpro_quiz1
—a static website created using HTML, CSS, and JavaScript. Built to complete ITS' Fall Web Programming Course Quiz 1

## Summary
### HTML
This website is built using a modern HTML syntax, using elements such as `<section>`, `<blockquote>`, `<header> <main> <footer>`, and various `<meta>` elements to create a neater layout that adheres to the Search Engine Optimization guidelines.
### CSS
The CSS stylesheet of this website uses several unique features.

One of them is a custom-made `dynamic pixel` made by me that uses the `em` attribute as the base scale for everything on the website. This means that the website scales up and down according to both the size and dimension of the display. The custom-made `dynamic pixel` is still in early development and I intend to further develop it to also recognize the dpi, refresh rate, gamma, color range, color depth, and contrast range of the display, for ultimate responsiveness and adaptability.

Aside from that, I also use several CSS properties that may seem uncommon, such as `box-shadow` to create the outer glow of some the elements, `transition` to create a smooth animation for some divs, and `@media` to change the layout of some elements entirely when given a condition.

### JavaScript
This website uses JavaScript to display the network background on every page, by using VincentGarreau's `particle.js` package.
## Packages
This website uses `particles.js` to display the network background present on all of the pages.
To set up particles.js, you can copy and paste the source code from the [Official `particles.js` Github Page](https://github.com/VincentGarreau/particles.js) then put the `particles.js` file anywhere easily accessible by the html files in your website pages using `<script src="path/to/your/particles.js"></script>`
