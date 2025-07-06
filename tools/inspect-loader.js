module.exports = function inspectLoader(source) {
  console.log("\n\n🚩🚩🚩 INSPECT LOADER 🚩🚩🚩")
  console.log("resourcePath:", this.resourcePath)
  console.log("content sample:", source.slice(0, 200))
  return source
}
