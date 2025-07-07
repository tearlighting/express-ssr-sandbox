import Prism from "prismjs"

export const dataContent = ({ userId = "null", id = "null" } = {}) => {
  return Prism.highlight(JSON.stringify({ userId, id }), Prism.languages.javascript, "javascript")
}

const serverCode = () => {
  return `

  //add middleware use like proxy
  export const apiMiddleWare = (): RequestHandler => {
    return async (req, res, next) => {
      if (req.path.startsWith("/api")) {
        const result = await request<Record<string, any>>({
          url: req.path.replace(/^\/api/, "/posts"),
          method: req.method as any, 
          params: req.query,
          data: req.body,
        })
        res.status(200).json(result)
      } else {
        next()
      }
    }
  }
    //server.ts
    const app = express()
    app.use(staticGzipExt("../public"))
    app.use(express.static(path.resolve(__dirname, "../public")))
    app.use(apiMiddleWare())
    app.use(ssrMiddleware(render))
    app.use(errorHandler())
    app.listen(EPort.port)

  //render.ts
  export const render: IRender = async ({ path: location }) => {

  const initialData: THydrateContext = new Map((await Promise.all(getLoadData(location))).map(({ name, data }) => [name, data]))

  const html = await fs.readFile(path.resolve(__dirname, "../index.html"), "utf-8")
  const component = renderToString(
    createElement(App, {
      path: location,
      context: initialData,
    })
  )
    ...
  }
    `
}

const clientCode = () => {
  return `
      //route.ts
      export interface IPageItem {
        path: string
        name: string
        element: JSX.Element
        loadData?: () => Promise<any>
        children?: Array<IPageItem>
      }
      export const pages: Array<IPageItem> = [  {
            path: "/loadData",
            name: "loadData",
            element: <LoadData />,
            loadData: loadHydrateData,
          }
     ]

     //client.ts
     const initData = () => {
        if (window?.__INITIAL_DATA__?.length) {
            return new Map(Object.entries(qs.parse(window.__INITIAL_DATA__)) as any) as TSSRCacheData
        }
        return new Map() as TSSRCacheData
     }

    hydrateRoot(
         document.getElementById("root") as any,
         createElement(App, {
             path: "/",
            context: initData(),
        })
    )
    `
}
export const getLoadDataCode = () => {
  const serverCodeStr = Prism.highlight(serverCode(), Prism.languages.javascript, "javascript")
  const clientCodeStr = Prism.highlight(clientCode(), Prism.languages.javascript, "javascript")
  //   const webpackCodeStr = Prism.highlight(webpackCode(), Prism.languages.javascript, "javascript")
  return {
    serverCodeStr,
    clientCodeStr,
  }
}
