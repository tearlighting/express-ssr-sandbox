import { MenuItem } from "@/component/MenuItem"
import { Structure } from "@/component/Structure"
import { pages } from "@/route/settings"
import { getRouteCode } from "@/utils/route"
const { clientCodeStr, serverCodeStr } = getRouteCode()
export function Route() {
  return (
    <Structure
      content={
        <div className="max-h-[100%] overflow-y-hidden flex flex-col flex-wrap bg-purple-950 shadow-[0_0_0_10px_#fff]">
          {pages.map((page) => (
            <MenuItem className="w-[15rem]  " key={page.path} item={page} isActive={false} />
          ))}
        </div>
      }
      footer={
        <div className="h-full overflow-y-auto overflow-x-hidden">
          <p className="bg-red-400">必ず、useStateのinitをしましょう。非同期がやばかった</p>
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
