import { Menu } from "@/component/Menu"
import { useRouteInfo } from "@/context/RouterContext"

import { Outlet } from "react-router"

export const DefaultLayout = () => {
  const { name } = useRouteInfo()

  return (
    <div className="layout-container">
      <div className="nav-container">
        <Menu></Menu>
      </div>
      <div className="name-container">{name}</div>
      <div className="content-container">
        <Outlet></Outlet>
      </div>
    </div>
  )
}
