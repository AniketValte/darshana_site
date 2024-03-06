import "assets/styles/globals.css";

import { render } from "solid-js/web";
import { Router, hashIntegration } from "@solidjs/router";
import App from "./App";

// render(
//   () => (
//     <Router source={hashIntegration()}>
//       <App />
//     </Router>
//   ),
//   document.getElementById("root") as HTMLElement
// );

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router source={hashIntegration()}>
      <App />
    </Router>
  ),
  root!
);
