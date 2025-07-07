import { ErrorRequestHandler } from "express"

export function errorHandler(): ErrorRequestHandler {
  return function (err, request, response, next) {
    try {
      response.status(400).send("Internal Server Error")
    } catch (e) {
      // console.log(e)

      response.status(500).send("Internal Server Error")
    }
  }
}
