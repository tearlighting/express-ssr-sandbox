interface ISSRApp {
  (payload: { context: TSSRCacheData; path: string }): React.ReactNode
}

interface IRender {
  (payload: { path: string }): Promise<string>
}
