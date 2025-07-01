import { Configuration } from "webpack"
import path from "path"
import { CleanWebpackPlugin } from "clean-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
const config: Configuration = {
  entry: path.resolve(__dirname, "src/client/index.ts"),
  output: {
    path: path.resolve(__dirname, "public/"),
    filename: "js/client.[hash:5].js",
  },
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
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!favicon.ico"],
    }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, "index.html"),
    //   filename: path.resolve(__dirname, "public/index.html"),
    // }),
  ],
}
export default config
