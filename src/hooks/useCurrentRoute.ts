import { useEffect, useState } from "react"
import { useLocation } from "react-router"

export function useCurrentRoute() {
  const { pathname } = useLocation()
  const [currentRoute, setCurrentRoute] = useState<string>(pathname)

  useEffect(() => {
    setCurrentRoute(pathname)
  }, [pathname])

  return { currentRoute }
}
