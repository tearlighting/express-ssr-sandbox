import express from "express"
import { EPort } from "./config"
import { render } from "./render"
import path from "path"
import { staticGzipExt } from "./middleWare/staticGzipExt"

const app = express()
app.use(staticGzipExt("../public"))
app.use(express.static(path.resolve(__dirname, "../public")))
app.get("/", render)

app.listen(EPort.port, () => {
  console.log(`listen port ${EPort.port} success`)
})
