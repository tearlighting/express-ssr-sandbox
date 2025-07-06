import { DefaultLayout } from "@/layout/DefaultLayout"
import { Navigate, Route, Routes } from "react-router"
import { pages } from "./settings"
import { RouterProvider } from "@/context/RouterContext"

export default (
  <Routes>
    {/* <Route path="/" element={<Navigate to="/staticHTML" replace />}></Route> */}
    <Route element={<DefaultLayout />}>
      {pages.map((r) => (
        <Route path={r.path} element={r.element}></Route>
      ))}
    </Route>
  </Routes>
)
