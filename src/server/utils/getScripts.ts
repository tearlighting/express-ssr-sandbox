import { baseUrl } from "@/utils"
import fs from "fs/promises"

export const getScripts = async (path: string) => {
  const files = await fs.readdir(path)
  const scripts = files
    .filter((file) => file.endsWith(".js"))
    .map(
      (file) => `
 <script src="${baseUrl}/js/${file}"></script>
  `
    )
  return scripts
}
