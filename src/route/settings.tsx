import { StaticHTML, Hydrate, LoadCSS, LoadImage, Route as RouteComponent } from "@/pages"
import { JSX } from "react"

export interface IPageItem {
  path: string
  name: string
  element: JSX.Element
}
export const pages: Array<IPageItem> = [
  {
    path: "/staticHTML",
    name: "static HTML",
    element: <StaticHTML />,
  },
  {
    path: "/hydrate",
    name: "hydrate",
    element: <Hydrate />,
  },
  {
    path: "/loadCSS",
    name: "loadCSS",
    element: <LoadCSS />,
  },
  {
    path: "/loadImage",
    name: "loadImage",
    element: <LoadImage />,
  },
  {
    path: "/route",
    name: "route",
    element: <RouteComponent />,
  },
]
