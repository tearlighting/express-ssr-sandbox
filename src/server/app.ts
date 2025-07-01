import express from "express"
import { EPort } from "./config"
import { render } from "./render"
import path from "path"

const app = express()

app.use(express.static(path.resolve(__dirname, "../public")))
app.get("/", render)

app.listen(EPort.port, () => {
  console.log(`listen port ${EPort.port} success`)
})
