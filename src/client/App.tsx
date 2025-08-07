import RouteConfig from "@/route"
import { BrowserRouter } from "react-router"
import "@/style"
import { RouterProvider } from "@/context/RouterContext"
import { SSRProvider } from "@/context/SSRContext"
import { baseUrl } from "@/utils"

const App: ISSRApp = ({ context, path }) => {
  return (
    <BrowserRouter basename={baseUrl}>
      <SSRProvider value={context}>
        <RouterProvider>{RouteConfig}</RouterProvider>
      </SSRProvider>
    </BrowserRouter>
  )
}
export default App
