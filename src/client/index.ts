import { hydrateRoot } from "react-dom/client"
import { createElement } from "react"
import App from "./App"
hydrateRoot(
  document.getElementById("root") as any,
  createElement(App, {
    path: "/",
    context: window.__INITIAL_DATA__,
  })
)
