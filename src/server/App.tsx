import RouteConfig from "@/route"
import { StaticRouter } from "react-router"
import { RouterProvider } from "@/context/RouterContext"

const App: ISSRApp = ({ context, path }) => {
  return (
    <StaticRouter location={path}>
      <RouterProvider>{RouteConfig}</RouterProvider>
      {/* {RouteConfig} */}
    </StaticRouter>
  )
}
export default App
