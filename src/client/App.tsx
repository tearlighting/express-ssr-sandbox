import RouteConfig from "@/route"
import { BrowserRouter } from "react-router"
import "@/style"
import { RouterProvider } from "@/context/RouterContext"
import { SSRProvider } from "@/context/SSRContext"

const App: ISSRApp = ({ context, path }) => {
  return (
    <BrowserRouter>
      <SSRProvider value={context}>
        <RouterProvider>{RouteConfig}</RouterProvider>
      </SSRProvider>
    </BrowserRouter>
  )
}
export default App
