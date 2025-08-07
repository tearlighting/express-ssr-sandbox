import { Configuration } from "webpack"
import path from "path"
import { CleanWebpackPlugin } from "clean-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import CssMinimizerPlugin from "css-minimizer-webpack-plugin"
import CompressionPlugin from "compression-webpack-plugin"
const config: Configuration = {
  entry: path.resolve(__dirname, "src/client/index.ts"),
  output: {
    path: path.resolve(__dirname, "public/"),
    filename: "js/client.[hash:5].js",

    // clean: true,
    publicPath: "/express-ssr-sandbox/",
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
      {
        test: /\.css$/,
        exclude: /\.module\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.module\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              esModule: false,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[contenthash:5][ext]",
        },
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
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:5].css",
    }),
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.(js|css|html|svg)$/, // 压缩哪些文件
      threshold: 1024 * 5, // 文件大于多少字节才压缩
      minRatio: 0.8, // 压缩比阈值
    }),
  ],

  optimization: {
    minimizer: [
      `...`, // 保留 JS 的默认压缩
      new CssMinimizerPlugin(),
    ],
  },
}
export default config
