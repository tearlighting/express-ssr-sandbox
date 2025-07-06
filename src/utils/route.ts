import Prism from "prismjs"

const clientCode = () => {
  return `
 const App: ISSRApp = ({ context, path }) => {
  return (
    <BrowserRouter>
      <RouterProvider>{RouteConfig}</RouterProvider>
    </BrowserRouter>
  )
}`
}

const serverCode = () => {
  return `
 const App: ISSRApp = ({ context, path }) => {
  return (
    <StaticRouter location={path}>
      <RouterProvider>{RouteConfig}</RouterProvider>
    </StaticRouter>
  )
}`
}
export const getRouteCode = () => {
  const clientCodeStr = Prism.highlight(clientCode(), Prism.languages.javascript, "javascript")
  const serverCodeStr = Prism.highlight(serverCode(), Prism.languages.javascript, "javascript")
  return {
    clientCodeStr,
    serverCodeStr,
  }
}
