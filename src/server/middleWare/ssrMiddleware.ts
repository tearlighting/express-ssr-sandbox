import { RequestHandler } from "express"

export const ssrMiddleware = (render: IRender): RequestHandler => {
  return async (req, res, next) => {
    try {
      if (req.method.toUpperCase() === "GET") {
        console.log(`SSR request to ${req.url}`)

        if (req.url === "/") {
          return res.redirect(302, "/staticHTML")
        }
        const html = await render({ path: req.url })
        res.status(200).send(html)
      } else {
        next()
      }
    } catch (err) {
      console.error("SSR Error:", err)
      next(err)
    }
  }
}
