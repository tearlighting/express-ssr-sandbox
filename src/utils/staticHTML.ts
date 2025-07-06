import Prism from "prismjs"
function serverCode() {
  const code = `const initialData: IHydrateContext = {}
export const render: RequestHandler = async (req, res) => {
  const html = await fs.readFile(path.resolve(__dirname, "../index.html"), "utf-8")
  const component = renderToString(
    createElement(App, {
      path: "/",
      context: initialData,
    })
  )
  const scripts = await getScripts(path.resolve(__dirname, "../public/js"))
  const links = await getLinks(path.resolve(__dirname, "../public/css"))
  res.send(html.replace("<!--SSR_HTML-->", component).replace("<!--SSR_DATA-->", JSON.stringify(initialData))
  .replace("<!--SSR_SCRIPT-->", scripts.join()).replace("<!--SSR_LINK-->", links.join()))
}`
  return code
}

function clientCode() {
  return `
hydrateRoot(
  document.getElementById("root"),
  createElement(App, {
    path: "/",
    context: window.__INITIAL_DATA__,
  })
)`
}
export function getCreateStaticHTML() {
  const code = serverCode()
  const serverCodeStr = Prism.highlight(code, Prism.languages.javascript, "javascript")
  const clientCodeStr = Prism.highlight(clientCode(), Prism.languages.javascript, "javascript")
  return {
    serverCodeStr,
    clientCodeStr,
  }
}
