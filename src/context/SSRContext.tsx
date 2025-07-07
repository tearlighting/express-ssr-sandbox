import { createContext, useContext, useRef, useState } from "react"

const context = createContext<TSSRCacheData>(new Map())
export const SSRProvider = ({ children, value }: { children: React.ReactNode; value?: TSSRCacheData }) => {
  const [hydrateData] = useState<TSSRCacheData>(() => {
    return value ?? new Map()
  })
  return <context.Provider value={hydrateData}>{children}</context.Provider>
}

export const useSSRInfo = () => {
  const item = useContext(context)

  if (!item) {
    throw new Error("useSSRInfo must be used within a SSRProvider")
  }
  return item!
}
