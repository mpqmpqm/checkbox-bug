This is a super simple Svelte app that reactively updates the text on the page according to checkboxes clicked.

Running the build command gives us an IIFE that we can enclose in a script tag. This works perfectly on the live site, but on staging we get an error:

`Cannot read property 'push' of undefined`

Check at /src/App.svelte for the source code (comments will explain everything Svelte-y).

In /src/main.js we set a `target` property for DOM insertion. This is the sole difference between staging code and live code.

To run the code locally, clone this repo and run `npm install`, then `npm run dev`. (You need Node installed.)
