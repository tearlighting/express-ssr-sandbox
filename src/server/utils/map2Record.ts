export const map2Record = (map: Map<string, any>) => {
  const keys = map.keys()
  const res = {} as Record<string, any>
  for (let key of keys) {
    res[key] = map.get(key)
  }
  return res
}
