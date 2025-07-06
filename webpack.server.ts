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
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[contenthash:5][ext]",
          // 只要 URL，实际写文件交给 client bundle
          emit: false,
        },
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ["null-loader"],
      },
      {
        test: /\.module\.css$/i,
        use: [
          //   "isomorphic-style-loader",
          //   {
          //     loader: require.resolve("./tools/inspect-loader.js"),
          //   },
          {
            loader: "css-loader",
            options: {
              esModule: false,
              modules: {
                exportOnlyLocals: true,
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            },
          },
          "postcss-loader",
        ],
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
  plugins: [new CleanWebpackPlugin()],
}

export default config
