import { RequestHandler, Router } from "express"
import { request } from "@/utils/request"
export const apiMiddleWare = (): RequestHandler => {
  return async (req, res, next) => {
    if (req.path.startsWith("/api")) {
      const result = await request<Record<string, any>>({
        url: req.path.replace(/^\/api/, "/posts"),
        method: req.method as any,
        params: req.query,
        data: req.body,
      })
      res.status(200).json(result)
    } else {
      next()
    }
  }
}
