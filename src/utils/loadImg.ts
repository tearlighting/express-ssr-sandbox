import Prism from "prismjs"

const clientCode = () => {
  return `
  //React
 import bell from "@/asset/bell.jpg"

 <img src={bell} alt="" className="object-cover w-32 h-32" />

 //Css
 .bell-background {
    background: url("@/asset/bell.jpg") no-repeat;
  }

  <div className="bell-background">img</div>
)`
}

const webpackCode = () => {
  return `
    //webpack.client.ts
    {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[contenthash:5][ext]",
        },
      },
	 
	  //webpack.server.ts
	 {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[contenthash:5][ext]",
          // 只要 URL，实际写文件交给 client bundle
          emit: false,
        },
      },

}`
}
export const getLoadImgCode = () => {
  const clientCodeStr = Prism.highlight(clientCode(), Prism.languages.javascript, "javascript")
  const webpackCodeStr = Prism.highlight(webpackCode(), Prism.languages.javascript, "javascript")
  return {
    clientCodeStr,
    webpackCodeStr,
  }
}
