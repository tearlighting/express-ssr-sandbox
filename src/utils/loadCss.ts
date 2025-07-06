import Prism from "prismjs"
const tailwindCode = () => {
  return ` <div className="bg-blue-400">tailwind</div>`
}
const lessCode = () => {
  return `
	//styles.less
	.less-container {
        background-color: #492c92;
    }
    //react
	<div class="less-container">less</div>`
}
const cssModuleCode = () => {
  return `
	//styles.module.css
	.container {
      background-color: #bc8845;
    }

    //react
   import cssModule from "@/style/loadCSS/styles.module.css"
   <div className={cssModule?.container}>cssModule</div>
}
`
}
const webpackCode = () => {
  return `
 //webpack.server.ts
     {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ["null-loader"],
      },
      {
        test: /\.module\.css$/i,
        use: [
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

	  //webpack.client.ts
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
  `
}
export const getCssCode = () => {
  const tailwindCodeStr = Prism.highlight(tailwindCode(), Prism.languages.javascript, "javascript")
  const lessCodeStr = Prism.highlight(lessCode(), Prism.languages.javascript, "javascript")
  const cssModuleCodeStr = Prism.highlight(cssModuleCode(), Prism.languages.javascript, "javascript")
  const webpackCodeStr = Prism.highlight(webpackCode(), Prism.languages.javascript, "javascript")
  return {
    tailwindCodeStr,
    lessCodeStr,
    cssModuleCodeStr,
    webpackCodeStr,
  }
}
