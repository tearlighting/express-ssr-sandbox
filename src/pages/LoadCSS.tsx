import clsx from "clsx"
import { Structure } from "../component/Structure"
import cssModule from "@/style/loadCSS/test.module.css"
import { getCssCode } from "@/utils/loadCss"
const { tailwindCodeStr, cssModuleCodeStr, lessCodeStr, webpackCodeStr } = getCssCode()
export function LoadCSS() {
  return (
    <Structure
      content={
        <div className="w-full  overflow-x-hidden justify-center items-center flex h-15 gap-4">
          <div className="bg-blue-400 p-4 basis-28 text-center text-white ">tailwind</div>
          <div className="less-container p-4 basis-28 text-center text-white  ">less</div>
          <div className={clsx(cssModule?.container, "p-4 basis-28 text-center text-white ")}>cssModule</div>
        </div>
      }
      footer={
        <div className="h-full overflow-y-auto overflow-x-hidden">
          <p>tailwind</p>
          <pre className="language-javascript">
            <code className="language-javascript" dangerouslySetInnerHTML={{ __html: tailwindCodeStr }}></code>
          </pre>
          <p>less</p>
          <pre className="language-javascript">
            <code className="language-javascript" dangerouslySetInnerHTML={{ __html: lessCodeStr }}></code>
          </pre>
          <p>cssModule</p>
          <pre className="language-javascript">
            <code className="language-javascript" dangerouslySetInnerHTML={{ __html: cssModuleCodeStr }}></code>
          </pre>
          <p>webpack</p>
          <pre className="language-javascript">
            <code className="language-javascript" dangerouslySetInnerHTML={{ __html: webpackCodeStr }}></code>
          </pre>
        </div>
      }
    ></Structure>
  )
}
