import { getLoadImgCode } from "@/utils/loadImg"
import { Structure } from "../component/Structure"
import bell from "@/asset/bell.jpg"
const { clientCodeStr, webpackCodeStr } = getLoadImgCode()
export function LoadImage() {
  return (
    <Structure
      content={
        <div className="content">
          <img src={bell} alt="" className="object-cover w-32 h-32" />
          <div className="w-32 h-32 bell-background text-gray-100">img</div>
        </div>
      }
      footer={
        <div className="h-full overflow-y-auto overflow-x-hidden">
          <p>client</p>
          <pre className="language-javascript">
            <code className="language-javascript" dangerouslySetInnerHTML={{ __html: clientCodeStr }}></code>
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
