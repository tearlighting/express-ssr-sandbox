import { RequestHandler, Request, Response } from "express"
import { renderToString } from "react-dom/server"
import App from "./App"
import fs from "fs/promises"
import path from "path"
import { getScripts } from "./utils"
import { getLinks } from "./utils/getLinks"
import { createElement } from "react"

const initialData: IHydrateContext = {}
export const render: IRender = async ({ path: location }) => {
  const html = await fs.readFile(path.resolve(__dirname, "../index.html"), "utf-8")
  const component = renderToString(
    createElement(App, {
      path: location,
      context: initialData,
    })
  )
  const scripts = await getScripts(path.resolve(__dirname, "../public/js"))
  const links = await getLinks(path.resolve(__dirname, "../public/css"))
  return html.replace("<!--SSR_HTML-->", component).replace("<!--SSR_DATA-->", JSON.stringify(initialData)).replace("<!--SSR_SCRIPT-->", scripts.join()).replace("<!--SSR_LINK-->", links.join())
}
