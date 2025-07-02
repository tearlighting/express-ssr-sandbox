/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./server */ \"./src/server/index.ts\");\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/index.ts?");

/***/ }),

/***/ "./src/pages/App.tsx":
/*!***************************!*\
  !*** ./src/pages/App.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.App = App;\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst views_1 = __webpack_require__(/*! ./views */ \"./src/pages/views/index.ts\");\nfunction App() {\n    return (0, jsx_runtime_1.jsx)(views_1.Home, {});\n}\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/pages/App.tsx?");

/***/ }),

/***/ "./src/pages/views/Home.tsx":
/*!**********************************!*\
  !*** ./src/pages/views/Home.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = Home;\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nfunction Home() {\n    const [count, setCount] = (0, react_1.useState)(0);\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { className: \"home-container\", children: [(0, jsx_runtime_1.jsx)(\"h1\", { children: \"Homes\" }), (0, jsx_runtime_1.jsxs)(\"div\", { style: {\n                    height: \"20%\",\n                }, children: [(0, jsx_runtime_1.jsx)(\"p\", { children: count }), (0, jsx_runtime_1.jsx)(\"button\", { onClick: () => setCount(count + 1), className: \" bg-red-200\", children: \"Increment\" })] })] }));\n}\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/pages/views/Home.tsx?");

/***/ }),

/***/ "./src/pages/views/index.ts":
/*!**********************************!*\
  !*** ./src/pages/views/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Home = void 0;\nconst Home_1 = __importDefault(__webpack_require__(/*! ./Home */ \"./src/pages/views/Home.tsx\"));\nexports.Home = Home_1.default;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/pages/views/index.ts?");

/***/ }),

/***/ "./src/server/app.ts":
/*!***************************!*\
  !*** ./src/server/app.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst render_1 = __webpack_require__(/*! ./render */ \"./src/server/render.ts\");\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst app = (0, express_1.default)();\napp.use(express_1.default.static(path_1.default.resolve(__dirname, \"../public\")));\napp.get(\"/\", render_1.render);\napp.listen(3000 /* EPort.port */, () => {\n    console.log(`listen port ${3000 /* EPort.port */} success`);\n});\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/app.ts?");

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./app */ \"./src/server/app.ts\");\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/index.ts?");

/***/ }),

/***/ "./src/server/render.ts":
/*!******************************!*\
  !*** ./src/server/render.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.render = void 0;\nconst server_1 = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nconst App_1 = __webpack_require__(/*! @/pages/App */ \"./src/pages/App.tsx\");\nconst promises_1 = __importDefault(__webpack_require__(/*! fs/promises */ \"fs/promises\"));\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./src/server/utils/index.ts\");\nconst getLinks_1 = __webpack_require__(/*! ./utils/getLinks */ \"./src/server/utils/getLinks.ts\");\nconst initialData = {};\nconst render = async (req, res) => {\n    const html = await promises_1.default.readFile(path_1.default.resolve(__dirname, \"../index.html\"), \"utf-8\");\n    const component = (0, server_1.renderToString)((0, App_1.App)(), {\n        //@ts-ignore\n        data: initialData,\n    });\n    const scripts = await (0, utils_1.getScripts)(path_1.default.resolve(__dirname, \"../public/js\"));\n    const links = await (0, getLinks_1.getLinks)(path_1.default.resolve(__dirname, \"../public/css\"));\n    res.send(html.replace(\"<!--SSR_HTML-->\", component).replace(\"<!--SSR_DATA-->\", JSON.stringify(initialData)).replace(\"<!--SSR_SCRIPT-->\", scripts.join()).replace(\"<!--SSR_LINK-->\", links.join()));\n};\nexports.render = render;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/render.ts?");

/***/ }),

/***/ "./src/server/utils/getLinks.ts":
/*!**************************************!*\
  !*** ./src/server/utils/getLinks.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getLinks = void 0;\nconst promises_1 = __importDefault(__webpack_require__(/*! fs/promises */ \"fs/promises\"));\nconst getLinks = async (path) => {\n    const files = await promises_1.default.readdir(path);\n    const scripts = files\n        .filter((file) => file.endsWith(\".css\"))\n        .map((file) => `\r\n   <link rel=\"stylesheet\" href=\"/css/${file}\" />\r\n   `);\n    return scripts;\n};\nexports.getLinks = getLinks;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/utils/getLinks.ts?");

/***/ }),

/***/ "./src/server/utils/getScripts.ts":
/*!****************************************!*\
  !*** ./src/server/utils/getScripts.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getScripts = void 0;\nconst promises_1 = __importDefault(__webpack_require__(/*! fs/promises */ \"fs/promises\"));\nconst getScripts = async (path) => {\n    const files = await promises_1.default.readdir(path);\n    const scripts = files\n        .filter((file) => file.endsWith(\".js\"))\n        .map((file) => `\r\n <script src=\"/js/${file}\"></script>\r\n  `);\n    return scripts;\n};\nexports.getScripts = getScripts;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/utils/getScripts.ts?");

/***/ }),

/***/ "./src/server/utils/index.ts":
/*!***********************************!*\
  !*** ./src/server/utils/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./getScripts */ \"./src/server/utils/getScripts.ts\"), exports);\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/utils/index.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;