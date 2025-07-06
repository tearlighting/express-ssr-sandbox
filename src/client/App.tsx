import RouteConfig from "@/route"
import { BrowserRouter } from "react-router"
import "@/style"
import { RouterProvider } from "@/context/RouterContext"

const App: ISSRApp = ({ context, path }) => {
  return (
    <BrowserRouter>
      <RouterProvider>{RouteConfig}</RouterProvider>
      {/* {RouteConfig} */}
    </BrowserRouter>
  )
}
export default App
