import App from "./App.svelte"

const app = new App({
  // live site target:
  // target: document.querySelector(`#content-area`),

  // staging site target:
  target: document.querySelector(`#block-veblen-content`),
})

export default app
