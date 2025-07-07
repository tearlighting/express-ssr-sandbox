import { MenuItem } from "@/component/MenuItem"
import { Structure } from "@/component/Structure"
import { useSSRInfo } from "@/context/SSRContext"
import { pages } from "@/route/settings"
import { request } from "@/utils/request"
import { getRouteCode } from "@/utils/route"
import { useCallback, useEffect, useRef, useState } from "react"
import { getLoadDataCode } from "@/utils/loadData"
import { highlightAll } from "prismjs"
const { serverCodeStr, clientCodeStr } = getLoadDataCode()
export function loadHydrateData(id = 1) {
  return request<Record<string, any>>({
    url: `/api/${id}`,
  })
}
export function LoadData() {
  const cacheMap = useSSRInfo()

  const [renderData, setRenderData] = useState(() => {
    if (cacheMap?.has?.("loadData")) {
      return cacheMap.get("loadData")
    }
    return null
  })
  const coutRef = useRef(2)

  const requestData = useCallback(() => {
    loadHydrateData(coutRef.current++).then((res) => {
      setRenderData(() => res)
    })
  }, [])
  const isInitedRef = useRef(false)
  useEffect(() => {
    if (!isInitedRef.current) {
      if (!renderData) {
        requestData()
      }
      isInitedRef.current = true
    }
  }, [])
  useEffect(() => {
    highlightAll()
  }, [renderData])

  return (
    <Structure
      content={
        <div className="max-h-[100%] overflow-y-hidden flex flex-col flex-wrap  shadow-[0_0_0_10px_#fff]">
          <pre className="language-javascript">
            <code className="language-javascript">
              {`
  {
    userId: ${renderData?.userId},
    id: ${renderData?.id}
  }
              `}
            </code>
          </pre>
          <button className=" bg-blue-400 px-4 py-2 rounded-full" onClick={requestData}>
            request
          </button>
        </div>
      }
      footer={
        <div className="h-full overflow-y-auto overflow-x-hidden">
          <p>client</p>
          <pre className="language-javascript">
            <code className="language-javascript" dangerouslySetInnerHTML={{ __html: clientCodeStr }}></code>
          </pre>
          <p>server</p>
          <pre className="language-javascript">
            <code className="language-javascript" dangerouslySetInnerHTML={{ __html: serverCodeStr }}></code>
          </pre>
        </div>
      }
    ></Structure>
  )
}
