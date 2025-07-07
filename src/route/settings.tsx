import { StaticHTML, Hydrate, LoadCSS, LoadImage, Route as RouteComponent, LoadData, loadHydrateData } from "@/pages"
import { JSX } from "react"

export interface IPageItem {
  path: string
  name: string
  element: JSX.Element
  loadData?: () => Promise<any>
  children?: Array<IPageItem>
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
  {
    path: "/loadData",
    name: "loadData",
    element: <LoadData />,
    loadData: loadHydrateData,
  },
]
