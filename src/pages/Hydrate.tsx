import { useState } from "react"
import { Structure } from "../component/Structure"
import { getHydrateCode } from "@/utils/hydrate"
const { reactCodeStr, clientCodeStr, webpackCodeStr } = getHydrateCode()
export function Hydrate() {
  const [count, setCount] = useState(0)

  return (
    <Structure
      content={
        <div className="content flex flex-col text-2xl  items-center justify-center h-full">
          <p className="font-bold">{count}</p>
          <button onClick={() => setCount(count + 1)} className=" border bg-blue-400 px-3 py-2">
            add
          </button>
        </div>
      }
      footer={
        <div className="h-full overflow-y-auto overflow-x-hidden">
          <p>React Reactive</p>
          <pre className="language-javascript">
            <code className="language-javascript" dangerouslySetInnerHTML={{ __html: reactCodeStr }}></code>
          </pre>
          <p>Client</p>
          <pre className="language-javascript">
            <code className="language-javascript" dangerouslySetInnerHTML={{ __html: clientCodeStr }}></code>
          </pre>
          <p>webpack.server.ts</p>
          <pre className="language-javascript">
            <code className="language-javascript" dangerouslySetInnerHTML={{ __html: webpackCodeStr }}></code>
          </pre>
        </div>
      }
    ></Structure>
  )
}
