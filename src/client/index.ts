import { hydrateRoot } from "react-dom/client"
import { App } from "@/pages/App"
import { createElement } from "react"
import "@/pages/style"
hydrateRoot(
  document.getElementById("root") as any,
  createElement(App, {
    data: (window as any).__INITIAL_DATA__,
  })
)
