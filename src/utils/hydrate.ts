import Prism from "prismjs"

const reactCode = () => {
  return `
	const [count, setCount] = useState(0)
	 <button onClick={() => setCount(count + 1)} className=" border bg-blue-400">
            add
     </button>
	`
}
const clientCode = () => {
  return `
hydrateRoot(
  document.getElementById("root") as any,
  createElement(App, {
    path: "/",
    context: window.__INITIAL_DATA__,
  })
)`
}

const webpackCode = () => {
  return `
  const config: Configuration = {
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  //保留Node原生的全局__dirname,__filename
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  mode: "development",
  target: "node",
  //server端直接去node_modules中找依赖去，不需要打包
  externals: [nodeExternals()],

}`
}
export const getHydrateCode = () => {
  const reactCodeStr = Prism.highlight(reactCode(), Prism.languages.javascript, "javascript")
  const clientCodeStr = Prism.highlight(clientCode(), Prism.languages.javascript, "javascript")
  const webpackCodeStr = Prism.highlight(webpackCode(), Prism.languages.javascript, "javascript")
  return {
    reactCodeStr,
    clientCodeStr,
    webpackCodeStr,
  }
}
