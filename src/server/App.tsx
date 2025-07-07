import RouteConfig from "@/route"
import { StaticRouter } from "react-router"
import { RouterProvider } from "@/context/RouterContext"
import { SSRProvider } from "@/context/SSRContext"

const App: ISSRApp = ({ context, path }) => {
  return (
    <StaticRouter location={path}>
      <SSRProvider value={context}>
        <RouterProvider>{RouteConfig}</RouterProvider>
      </SSRProvider>
    </StaticRouter>
  )
}
export default App
