import { pages } from "@/route/settings"

export const getLoadData = (location: string) => {
  const res = []
  for (const page of pages) {
    if (location === page.path || location.startsWith(page.path)) {
      page.loadData &&
        res.push(
          Promise.resolve(
            (async () => {
              const { userId = null, id = null } = await page.loadData?.()
              const name = page.name
              return {
                name,
                data: {
                  userId,
                  id,
                },
              }
            })()
          )
        )
      //to do nest route
      //   if(page.children){
      //     res.push(...matchRoutes(location))
      //   }
    }
  }
  return res
}
