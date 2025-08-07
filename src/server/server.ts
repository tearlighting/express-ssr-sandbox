import express from "express"
import { EPort } from "./config"
import { render } from "./render"
import path from "path"
import { errorHandler, ssrMiddleware, staticGzipExt, apiMiddleWare } from "./middleWare"
import { baseUrl } from "@/utils"

const app = express()
app.use(baseUrl, staticGzipExt(path.resolve(__dirname, "../public")))
app.use(baseUrl, express.static(path.resolve(__dirname, "../public")))
app.use(baseUrl, apiMiddleWare())
app.use(ssrMiddleware(render))
app.use(errorHandler())
app.listen(EPort.port, () => {
  console.log(`listen port ${EPort.port} success`)
})
