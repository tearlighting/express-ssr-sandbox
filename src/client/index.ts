import { hydrateRoot } from "react-dom/client"
import { App } from "./App"
import { createElement } from "react"
hydrateRoot(
  document.getElementById("root") as any,
  createElement(App, {
    data: (window as any).__INITIAL_DATA__,
  })
)
