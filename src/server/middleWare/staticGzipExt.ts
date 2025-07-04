import { RequestHandler } from "express"
import path from "path"
import fs from "fs"
export const staticGzipExt = (staticDir: string): RequestHandler => {
  return (req, res, next) => {
    const reqPath = req.path
    if (reqPath.endsWith(".js")) {
      res.set("Content-Type", "application/javascript")
      trySendGzip(path.join(staticDir, reqPath + ".gz"), req, res, next)
    } else if (reqPath.endsWith(".css")) {
      res.set("Content-Type", "text/css")
      trySendGzip(path.join(staticDir, reqPath + ".gz"), req, res, next)
    } else {
      next()
    }
  }
}

const trySendGzip = (path: string, ...arg: Parameters<RequestHandler>) => {
  if (!fs.existsSync(path)) {
    arg[2]()
    return
  }
  arg[1].set("Content-Encoding", "gzip")
  arg[1].sendFile(path + ".gz")
}
