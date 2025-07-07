import { hydrateRoot } from "react-dom/client"
import { createElement } from "react"
import App from "./App"
import qs from "qs"

const initData = () => {
  if (window?.__INITIAL_DATA__?.length) {
    const res = qs.parse(window.__INITIAL_DATA__) as Record<string, any>
    return new Map(Object.keys(res).map((key) => [key, res[key]])) as TSSRCacheData
  }
  return new Map() as TSSRCacheData
}

hydrateRoot(
  document.getElementById("root") as any,
  createElement(App, {
    path: "/",
    context: initData(),
  })
)
