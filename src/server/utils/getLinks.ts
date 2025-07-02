import fs from "fs/promises"

export const getLinks = async (path: string) => {
  const files = await fs.readdir(path)
  const scripts = files
    .filter((file) => file.endsWith(".css"))
    .map(
      (file) => `
   <link rel="stylesheet" href="/css/${file}" />
   `
    )
  return scripts
}
