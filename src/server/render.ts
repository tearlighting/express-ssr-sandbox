import { RequestHandler, Request, Response } from "express"
import { renderToString } from "react-dom/server"
import App from "./App"
import fs from "fs/promises"
import path from "path"
import { getScripts, getLinks, getLoadData } from "./utils"
import { createElement } from "react"
import qs from "qs"
import { map2Record } from "./utils/map2Record"

export const render: IRender = async ({ path: location }) => {
  const loadData = (await Promise.all(getLoadData(location))).map(({ name, data }) => [name, data])
  const initialData: THydrateContext = new Map(loadData as any)
  console.log(initialData, loadData)

  const html = await fs.readFile(path.resolve(__dirname, "../index.html"), "utf-8")
  const component = renderToString(
    createElement(App, {
      path: location,
      context: initialData,
    })
  )

  const scripts = await getScripts(path.resolve(__dirname, "../public/js"))
  const links = await getLinks(path.resolve(__dirname, "../public/css"))
  return html
    .replace("<!--SSR_HTML-->", component)
    .replace("<!--SSR_DATA-->", `${JSON.stringify(qs.stringify(map2Record(initialData)))}`)
    .replace("<!--SSR_SCRIPT-->", scripts.join())
    .replace("<!--SSR_LINK-->", links.join())
}
