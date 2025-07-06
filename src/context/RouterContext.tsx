import { useCurrentRoute } from "@/hooks/useCurrentRoute"
import { IPageItem, pages } from "@/route/settings"
import { createContext, useContext, useEffect, useState } from "react"

const context = createContext<IPageItem | undefined>({} as any)

export const RouterProvider = ({ children }: { children: React.ReactNode }) => {
  const { currentRoute } = useCurrentRoute()
  const [currentItem, setCurrentItem] = useState<IPageItem>(() => pages.find((x) => x.path === currentRoute) || ({} as any))

  useEffect(() => {
    setCurrentItem(() => pages.find((x) => x.path === currentRoute) || ({} as any))
  }, [currentRoute])
  return <context.Provider value={currentItem}>{children}</context.Provider>
}

export const useRouteInfo = () => {
  const item = useContext(context)

  if (!item) {
    throw new Error("useRouteInfo must be used within a RouterProvider")
  }
  return item!
}
