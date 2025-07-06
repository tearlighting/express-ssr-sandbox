interface ISSRApp {
  (payload: { context: Record<string, any>; path: string }): React.ReactNode
}

interface IRender {
  (payload: { path: string }): Promise<string>
}
