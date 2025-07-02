import { RequestHandler } from "express"
import { renderToString } from "react-dom/server"
import { App } from "@/pages/App"
import fs from "fs/promises"
import path from "path"
import { getScripts } from "./utils"
import { getLinks } from "./utils/getLinks"
const initialData = {}
export const render: RequestHandler = async (req, res) => {
  const html = await fs.readFile(path.resolve(__dirname, "../index.html"), "utf-8")

  const component = renderToString(App(), {
    //@ts-ignore
    data: initialData,
  })
  const scripts = await getScripts(path.resolve(__dirname, "../public/js"))
  const links = await getLinks(path.resolve(__dirname, "../public/css"))
  res.send(html.replace("<!--SSR_HTML-->", component).replace("<!--SSR_DATA-->", JSON.stringify(initialData)).replace("<!--SSR_SCRIPT-->", scripts.join()).replace("<!--SSR_LINK-->", links.join()))
}
