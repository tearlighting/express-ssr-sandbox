import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
const enum EServer {
  url = "https://jsonplaceholder.typicode.com",
}
class AxiosHelper {
  private _ins: AxiosInstance
  constructor(baseURL: string) {
    this._ins = axios.create({
      baseURL,
    })
    this._ins.interceptors.request.use((config) => {
      // do any thing you want
      if (config.baseURL === EServer.url && config.url?.startsWith("/api")) {
        config.url = config.url?.replace("/api", "/posts")
      }
      return config
    })
    this._ins.interceptors.response.use((response) => {
      return response.data
    })
  }
  request<T>(config: AxiosRequestConfig): Promise<T> {
    return this._ins.request(config)
  }
}

function createRequest() {
  let ins: AxiosHelper
  if (typeof window === "undefined") {
    ins = new AxiosHelper(EServer.url)
  } else {
    ins = new AxiosHelper("/")
  }
  return ins.request.bind(ins)
}

export const request = createRequest()
