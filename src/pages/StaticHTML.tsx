import { useEffect } from "react"
import { Structure } from "../component/Structure"
import { highlightAll } from "prismjs"
import { getCreateStaticHTML } from "@/utils/staticHTML"
const { serverCodeStr } = getCreateStaticHTML()
export function StaticHTML() {
  useEffect(() => {
    highlightAll()
  }, [])
  return (
    <Structure
      content={
        <pre>
          <code className="language-javascript">{`console.log('Hello, SSR!');`}</code>
        </pre>
      }
      footer={
        <div className="h-full overflow-y-auto overflow-x-hidden">
          <p>server</p>
          <pre className="language-javascript">
            <code className="language-javascript" dangerouslySetInnerHTML={{ __html: serverCodeStr }}></code>
          </pre>
        </div>
      }
    ></Structure>
  )
}
