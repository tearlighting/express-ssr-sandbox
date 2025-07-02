import { Configuration } from "webpack"
import path from "path"
import nodeExternals from "webpack-node-externals"
import { CleanWebpackPlugin } from "clean-webpack-plugin"
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
  externals: [nodeExternals()],
  plugins: [new CleanWebpackPlugin()],
}

export default config
