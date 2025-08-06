/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asset/bell.jpg":
/*!****************************!*\
  !*** ./src/asset/bell.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/bell.3b9ac.jpg\";\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/asset/bell.jpg?");

/***/ }),

/***/ "./src/component/Menu.tsx":
/*!********************************!*\
  !*** ./src/component/Menu.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Menu = Menu;\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst settings_1 = __webpack_require__(/*! @/route/settings */ \"./src/route/settings.tsx\");\nconst MenuItem_1 = __webpack_require__(/*! ./MenuItem */ \"./src/component/MenuItem.tsx\");\nconst RouterContext_1 = __webpack_require__(/*! @/context/RouterContext */ \"./src/context/RouterContext.tsx\");\nfunction Menu() {\n    const { path } = (0, RouterContext_1.useRouteInfo)();\n    return ((0, jsx_runtime_1.jsxs)(\"ul\", { className: \" max-h-[100%] overflow-y-auto grid grid-rows-[auto] grid-cols-1 bg-transparent\", children: [(0, jsx_runtime_1.jsx)(\"li\", { className: \"` flex items-center justify-center  py-4\\r\\n    hover:text-gray-100\\r\\n\\ttext-gray-50\\r\\n\\tm-1\\r\\n    transition-colors duration-200 \\r\\n\\t`\", children: (0, jsx_runtime_1.jsx)(\"span\", { children: \"Express SSR Sandbox\" }) }), settings_1.pages.map((page) => ((0, jsx_runtime_1.jsx)(MenuItem_1.MenuItem, { item: page, isActive: page.path === path }, page.path)))] }));\n}\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/component/Menu.tsx?");

/***/ }),

/***/ "./src/component/MenuItem.tsx":
/*!************************************!*\
  !*** ./src/component/MenuItem.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MenuItem = MenuItem;\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst react_router_1 = __webpack_require__(/*! react-router */ \"react-router\");\nconst clsx_1 = __importDefault(__webpack_require__(/*! clsx */ \"clsx\"));\nfunction MenuItem({ item, isActive, className = \"\" }) {\n    return ((0, jsx_runtime_1.jsx)(react_router_1.Link, { to: item.path, className: (0, clsx_1.default)(`flex items-center justify-center  py-4\r\n    hover:text-gray-100\r\n\ttext-gray-50\r\n\tm-1\r\n    transition-all duration-200 \r\n\t`, className, isActive ? \"bg-blue-500\" : \" hover:bg-blue-300 hover:opacity-50\"), children: item.name }));\n}\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/component/MenuItem.tsx?");

/***/ }),

/***/ "./src/component/Structure.tsx":
/*!*************************************!*\
  !*** ./src/component/Structure.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Structure = Structure;\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nfunction Structure({ content, footer }) {\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { className: \"page-contain \", children: [(0, jsx_runtime_1.jsx)(\"div\", { className: \"content\", children: content }), (0, jsx_runtime_1.jsx)(\"div\", { className: \"footer\", children: footer || (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: \" \" }) })] }));\n}\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/component/Structure.tsx?");

/***/ }),

/***/ "./src/context/RouterContext.tsx":
/*!***************************************!*\
  !*** ./src/context/RouterContext.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useRouteInfo = exports.RouterProvider = void 0;\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst useCurrentRoute_1 = __webpack_require__(/*! @/hooks/useCurrentRoute */ \"./src/hooks/useCurrentRoute.ts\");\nconst settings_1 = __webpack_require__(/*! @/route/settings */ \"./src/route/settings.tsx\");\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nconst context = (0, react_1.createContext)({});\nconst RouterProvider = ({ children }) => {\n    const { currentRoute } = (0, useCurrentRoute_1.useCurrentRoute)();\n    const [currentItem, setCurrentItem] = (0, react_1.useState)(() => settings_1.pages.find((x) => x.path === currentRoute) || {});\n    (0, react_1.useEffect)(() => {\n        setCurrentItem(() => settings_1.pages.find((x) => x.path === currentRoute) || {});\n    }, [currentRoute]);\n    return (0, jsx_runtime_1.jsx)(context.Provider, { value: currentItem, children: children });\n};\nexports.RouterProvider = RouterProvider;\nconst useRouteInfo = () => {\n    const item = (0, react_1.useContext)(context);\n    if (!item) {\n        throw new Error(\"useRouteInfo must be used within a RouterProvider\");\n    }\n    return item;\n};\nexports.useRouteInfo = useRouteInfo;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/context/RouterContext.tsx?");

/***/ }),

/***/ "./src/context/SSRContext.tsx":
/*!************************************!*\
  !*** ./src/context/SSRContext.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useSSRInfo = exports.SSRProvider = void 0;\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nconst context = (0, react_1.createContext)(new Map());\nconst SSRProvider = ({ children, value }) => {\n    const [hydrateData] = (0, react_1.useState)(() => {\n        return value ?? new Map();\n    });\n    return (0, jsx_runtime_1.jsx)(context.Provider, { value: hydrateData, children: children });\n};\nexports.SSRProvider = SSRProvider;\nconst useSSRInfo = () => {\n    const item = (0, react_1.useContext)(context);\n    if (!item) {\n        throw new Error(\"useSSRInfo must be used within a SSRProvider\");\n    }\n    return item;\n};\nexports.useSSRInfo = useSSRInfo;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/context/SSRContext.tsx?");

/***/ }),

/***/ "./src/hooks/useCurrentRoute.ts":
/*!**************************************!*\
  !*** ./src/hooks/useCurrentRoute.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useCurrentRoute = useCurrentRoute;\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nconst react_router_1 = __webpack_require__(/*! react-router */ \"react-router\");\nfunction useCurrentRoute() {\n    const { pathname } = (0, react_router_1.useLocation)();\n    const [currentRoute, setCurrentRoute] = (0, react_1.useState)(pathname);\n    (0, react_1.useEffect)(() => {\n        setCurrentRoute(pathname);\n    }, [pathname]);\n    return { currentRoute };\n}\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/hooks/useCurrentRoute.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./server */ \"./src/server/index.ts\");\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/index.ts?");

/***/ }),

/***/ "./src/layout/DefaultLayout.tsx":
/*!**************************************!*\
  !*** ./src/layout/DefaultLayout.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DefaultLayout = void 0;\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst Menu_1 = __webpack_require__(/*! @/component/Menu */ \"./src/component/Menu.tsx\");\nconst RouterContext_1 = __webpack_require__(/*! @/context/RouterContext */ \"./src/context/RouterContext.tsx\");\nconst react_router_1 = __webpack_require__(/*! react-router */ \"react-router\");\nconst DefaultLayout = () => {\n    const { name } = (0, RouterContext_1.useRouteInfo)();\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { className: \"layout-container\", children: [(0, jsx_runtime_1.jsx)(\"div\", { className: \"nav-container\", children: (0, jsx_runtime_1.jsx)(Menu_1.Menu, {}) }), (0, jsx_runtime_1.jsx)(\"div\", { className: \"name-container\", children: name }), (0, jsx_runtime_1.jsx)(\"div\", { className: \"content-container\", children: (0, jsx_runtime_1.jsx)(react_router_1.Outlet, {}) })] }));\n};\nexports.DefaultLayout = DefaultLayout;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/layout/DefaultLayout.tsx?");

/***/ }),

/***/ "./src/pages/Hydrate.tsx":
/*!*******************************!*\
  !*** ./src/pages/Hydrate.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Hydrate = Hydrate;\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nconst Structure_1 = __webpack_require__(/*! ../component/Structure */ \"./src/component/Structure.tsx\");\nconst hydrate_1 = __webpack_require__(/*! @/utils/hydrate */ \"./src/utils/hydrate.ts\");\nconst { reactCodeStr, clientCodeStr, webpackCodeStr } = (0, hydrate_1.getHydrateCode)();\nfunction Hydrate() {\n    const [count, setCount] = (0, react_1.useState)(0);\n    return ((0, jsx_runtime_1.jsx)(Structure_1.Structure, { content: (0, jsx_runtime_1.jsxs)(\"div\", { className: \"content flex flex-col text-2xl  items-center justify-center h-full\", children: [(0, jsx_runtime_1.jsx)(\"p\", { className: \"font-bold\", children: count }), (0, jsx_runtime_1.jsx)(\"button\", { onClick: () => setCount(count + 1), className: \"bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-1 rounded  text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all\", children: \"add\" })] }), footer: (0, jsx_runtime_1.jsxs)(\"div\", { className: \"h-full overflow-y-auto overflow-x-hidden\", children: [(0, jsx_runtime_1.jsx)(\"p\", { children: \"React Reactive\" }), (0, jsx_runtime_1.jsx)(\"pre\", { className: \"language-javascript\", children: (0, jsx_runtime_1.jsx)(\"code\", { className: \"language-javascript\", dangerouslySetInnerHTML: { __html: reactCodeStr } }) }), (0, jsx_runtime_1.jsx)(\"p\", { children: \"Client\" }), (0, jsx_runtime_1.jsx)(\"pre\", { className: \"language-javascript\", children: (0, jsx_runtime_1.jsx)(\"code\", { className: \"language-javascript\", dangerouslySetInnerHTML: { __html: clientCodeStr } }) }), (0, jsx_runtime_1.jsx)(\"p\", { children: \"webpack.server.ts\" }), (0, jsx_runtime_1.jsx)(\"pre\", { className: \"language-javascript\", children: (0, jsx_runtime_1.jsx)(\"code\", { className: \"language-javascript\", dangerouslySetInnerHTML: { __html: webpackCodeStr } }) })] }) }));\n}\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/pages/Hydrate.tsx?");

/***/ }),

/***/ "./src/pages/LoadCSS.tsx":
/*!*******************************!*\
  !*** ./src/pages/LoadCSS.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LoadCSS = LoadCSS;\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst clsx_1 = __importDefault(__webpack_require__(/*! clsx */ \"clsx\"));\nconst Structure_1 = __webpack_require__(/*! ../component/Structure */ \"./src/component/Structure.tsx\");\nconst test_module_css_1 = __importDefault(__webpack_require__(/*! @/style/loadCSS/test.module.css */ \"./src/style/loadCSS/test.module.css\"));\nconst loadCss_1 = __webpack_require__(/*! @/utils/loadCss */ \"./src/utils/loadCss.ts\");\nconst { tailwindCodeStr, cssModuleCodeStr, lessCodeStr, webpackCodeStr } = (0, loadCss_1.getCssCode)();\nfunction LoadCSS() {\n    return ((0, jsx_runtime_1.jsx)(Structure_1.Structure, { content: (0, jsx_runtime_1.jsxs)(\"div\", { className: \"w-full  overflow-x-hidden justify-center items-center flex h-15 gap-4\", children: [(0, jsx_runtime_1.jsx)(\"div\", { className: \"bg-blue-400 p-4 basis-28 text-center text-white \", children: \"tailwind\" }), (0, jsx_runtime_1.jsx)(\"div\", { className: \"less-container p-4 basis-28 text-center text-white  \", children: \"less\" }), (0, jsx_runtime_1.jsx)(\"div\", { className: (0, clsx_1.default)(test_module_css_1.default?.container, \"p-4 basis-28 text-center text-white \"), children: \"cssModule\" })] }), footer: (0, jsx_runtime_1.jsxs)(\"div\", { className: \"h-full overflow-y-auto overflow-x-hidden\", children: [(0, jsx_runtime_1.jsx)(\"p\", { children: \"tailwind\" }), (0, jsx_runtime_1.jsx)(\"pre\", { className: \"language-javascript\", children: (0, jsx_runtime_1.jsx)(\"code\", { className: \"language-javascript\", dangerouslySetInnerHTML: { __html: tailwindCodeStr } }) }), (0, jsx_runtime_1.jsx)(\"p\", { children: \"less\" }), (0, jsx_runtime_1.jsx)(\"pre\", { className: \"language-javascript\", children: (0, jsx_runtime_1.jsx)(\"code\", { className: \"language-javascript\", dangerouslySetInnerHTML: { __html: lessCodeStr } }) }), (0, jsx_runtime_1.jsx)(\"p\", { children: \"cssModule\" }), (0, jsx_runtime_1.jsx)(\"pre\", { className: \"language-javascript\", children: (0, jsx_runtime_1.jsx)(\"code\", { className: \"language-javascript\", dangerouslySetInnerHTML: { __html: cssModuleCodeStr } }) }), (0, jsx_runtime_1.jsx)(\"p\", { children: \"webpack\" }), (0, jsx_runtime_1.jsx)(\"pre\", { className: \"language-javascript\", children: (0, jsx_runtime_1.jsx)(\"code\", { className: \"language-javascript\", dangerouslySetInnerHTML: { __html: webpackCodeStr } }) })] }) }));\n}\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/pages/LoadCSS.tsx?");

/***/ }),

/***/ "./src/pages/LoadData.tsx":
/*!********************************!*\
  !*** ./src/pages/LoadData.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadHydrateData = loadHydrateData;\nexports.LoadData = LoadData;\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst Structure_1 = __webpack_require__(/*! @/component/Structure */ \"./src/component/Structure.tsx\");\nconst SSRContext_1 = __webpack_require__(/*! @/context/SSRContext */ \"./src/context/SSRContext.tsx\");\nconst request_1 = __webpack_require__(/*! @/utils/request */ \"./src/utils/request.ts\");\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nconst loadData_1 = __webpack_require__(/*! @/utils/loadData */ \"./src/utils/loadData.ts\");\nconst prismjs_1 = __webpack_require__(/*! prismjs */ \"prismjs\");\nconst { serverCodeStr, clientCodeStr } = (0, loadData_1.getLoadDataCode)();\nfunction loadHydrateData(id = 1) {\n    return (0, request_1.request)({\n        url: `/api/${id}`,\n    });\n}\nfunction LoadData() {\n    const cacheMap = (0, SSRContext_1.useSSRInfo)();\n    const [renderData, setRenderData] = (0, react_1.useState)(() => {\n        if (cacheMap?.has?.(\"loadData\")) {\n            return cacheMap.get(\"loadData\");\n        }\n        return null;\n    });\n    const coutRef = (0, react_1.useRef)(2);\n    const requestData = (0, react_1.useCallback)(() => {\n        loadHydrateData(coutRef.current++).then((res) => {\n            setRenderData(() => res);\n        });\n    }, []);\n    const isInitedRef = (0, react_1.useRef)(false);\n    (0, react_1.useEffect)(() => {\n        if (!isInitedRef.current) {\n            if (!renderData) {\n                requestData();\n            }\n            isInitedRef.current = true;\n        }\n    }, []);\n    (0, react_1.useEffect)(() => {\n        (0, prismjs_1.highlightAll)();\n    }, [renderData]);\n    return ((0, jsx_runtime_1.jsx)(Structure_1.Structure, { content: (0, jsx_runtime_1.jsxs)(\"div\", { className: \"max-h-[100%] overflow-y-hidden flex flex-col flex-wrap  shadow-[0_0_0_10px_#fff]\", children: [(0, jsx_runtime_1.jsx)(\"pre\", { className: \"language-javascript\", children: (0, jsx_runtime_1.jsx)(\"code\", { className: \"language-javascript\", children: `\r\n  {\r\n    userId: ${renderData?.userId},\r\n    id: ${renderData?.id}\r\n  }\r\n              ` }) }), (0, jsx_runtime_1.jsx)(\"button\", { className: \" bg-blue-400 px-4 py-2 rounded-full\", onClick: requestData, children: \"request\" })] }), footer: (0, jsx_runtime_1.jsxs)(\"div\", { className: \"h-full overflow-y-auto overflow-x-hidden\", children: [(0, jsx_runtime_1.jsx)(\"p\", { children: \"client\" }), (0, jsx_runtime_1.jsx)(\"pre\", { className: \"language-javascript\", children: (0, jsx_runtime_1.jsx)(\"code\", { className: \"language-javascript\", dangerouslySetInnerHTML: { __html: clientCodeStr } }) }), (0, jsx_runtime_1.jsx)(\"p\", { children: \"server\" }), (0, jsx_runtime_1.jsx)(\"pre\", { className: \"language-javascript\", children: (0, jsx_runtime_1.jsx)(\"code\", { className: \"language-javascript\", dangerouslySetInnerHTML: { __html: serverCodeStr } }) })] }) }));\n}\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/pages/LoadData.tsx?");

/***/ }),

/***/ "./src/pages/LoadImage.tsx":
/*!*********************************!*\
  !*** ./src/pages/LoadImage.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LoadImage = LoadImage;\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst loadImg_1 = __webpack_require__(/*! @/utils/loadImg */ \"./src/utils/loadImg.ts\");\nconst Structure_1 = __webpack_require__(/*! ../component/Structure */ \"./src/component/Structure.tsx\");\nconst bell_jpg_1 = __importDefault(__webpack_require__(/*! @/asset/bell.jpg */ \"./src/asset/bell.jpg\"));\nconst { clientCodeStr, webpackCodeStr } = (0, loadImg_1.getLoadImgCode)();\nfunction LoadImage() {\n    return ((0, jsx_runtime_1.jsx)(Structure_1.Structure, { content: (0, jsx_runtime_1.jsxs)(\"div\", { className: \"content\", children: [(0, jsx_runtime_1.jsx)(\"img\", { src: bell_jpg_1.default, alt: \"\", className: \"object-cover w-32 h-32\" }), (0, jsx_runtime_1.jsx)(\"div\", { className: \"w-32 h-32 bell-background text-gray-100\", children: \"img\" })] }), footer: (0, jsx_runtime_1.jsxs)(\"div\", { className: \"h-full overflow-y-auto overflow-x-hidden\", children: [(0, jsx_runtime_1.jsx)(\"p\", { children: \"client\" }), (0, jsx_runtime_1.jsx)(\"pre\", { className: \"language-javascript\", children: (0, jsx_runtime_1.jsx)(\"code\", { className: \"language-javascript\", dangerouslySetInnerHTML: { __html: clientCodeStr } }) }), (0, jsx_runtime_1.jsx)(\"p\", { children: \"webpack\" }), (0, jsx_runtime_1.jsx)(\"pre\", { className: \"language-javascript\", children: (0, jsx_runtime_1.jsx)(\"code\", { className: \"language-javascript\", dangerouslySetInnerHTML: { __html: webpackCodeStr } }) })] }) }));\n}\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/pages/LoadImage.tsx?");

/***/ }),

/***/ "./src/pages/Route.tsx":
/*!*****************************!*\
  !*** ./src/pages/Route.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Route = Route;\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst MenuItem_1 = __webpack_require__(/*! @/component/MenuItem */ \"./src/component/MenuItem.tsx\");\nconst Structure_1 = __webpack_require__(/*! @/component/Structure */ \"./src/component/Structure.tsx\");\nconst settings_1 = __webpack_require__(/*! @/route/settings */ \"./src/route/settings.tsx\");\nconst route_1 = __webpack_require__(/*! @/utils/route */ \"./src/utils/route.ts\");\nconst { clientCodeStr, serverCodeStr } = (0, route_1.getRouteCode)();\nfunction Route() {\n    return ((0, jsx_runtime_1.jsx)(Structure_1.Structure, { content: (0, jsx_runtime_1.jsx)(\"div\", { className: \"max-h-[100%] overflow-y-hidden flex flex-col flex-wrap bg-purple-950 shadow-[0_0_0_10px_#fff]\", children: settings_1.pages.map((page) => ((0, jsx_runtime_1.jsx)(MenuItem_1.MenuItem, { className: \"w-[15rem]  \", item: page, isActive: false }, page.path))) }), footer: (0, jsx_runtime_1.jsxs)(\"div\", { className: \"h-full overflow-y-auto overflow-x-hidden\", children: [(0, jsx_runtime_1.jsx)(\"p\", { className: \"bg-red-400\", children: \"\\u5FC5\\u305A\\u3001useState\\u306Einit\\u3092\\u3057\\u307E\\u3057\\u3087\\u3046\\u3002\\u975E\\u540C\\u671F\\u304C\\u3084\\u3070\\u304B\\u3063\\u305F\" }), (0, jsx_runtime_1.jsx)(\"p\", { children: \"client\" }), (0, jsx_runtime_1.jsx)(\"pre\", { className: \"language-javascript\", children: (0, jsx_runtime_1.jsx)(\"code\", { className: \"language-javascript\", dangerouslySetInnerHTML: { __html: clientCodeStr } }) }), (0, jsx_runtime_1.jsx)(\"p\", { children: \"server\" }), (0, jsx_runtime_1.jsx)(\"pre\", { className: \"language-javascript\", children: (0, jsx_runtime_1.jsx)(\"code\", { className: \"language-javascript\", dangerouslySetInnerHTML: { __html: serverCodeStr } }) })] }) }));\n}\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/pages/Route.tsx?");

/***/ }),

/***/ "./src/pages/StaticHTML.tsx":
/*!**********************************!*\
  !*** ./src/pages/StaticHTML.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.StaticHTML = StaticHTML;\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nconst Structure_1 = __webpack_require__(/*! ../component/Structure */ \"./src/component/Structure.tsx\");\nconst prismjs_1 = __webpack_require__(/*! prismjs */ \"prismjs\");\nconst staticHTML_1 = __webpack_require__(/*! @/utils/staticHTML */ \"./src/utils/staticHTML.ts\");\nconst { serverCodeStr } = (0, staticHTML_1.getCreateStaticHTML)();\nfunction StaticHTML() {\n    (0, react_1.useEffect)(() => {\n        (0, prismjs_1.highlightAll)();\n    }, []);\n    return ((0, jsx_runtime_1.jsx)(Structure_1.Structure, { content: (0, jsx_runtime_1.jsx)(\"pre\", { children: (0, jsx_runtime_1.jsx)(\"code\", { className: \"language-javascript\", children: `console.log('Hello, SSR!');` }) }), footer: (0, jsx_runtime_1.jsxs)(\"div\", { className: \"h-full overflow-y-auto overflow-x-hidden\", children: [(0, jsx_runtime_1.jsx)(\"p\", { children: \"server\" }), (0, jsx_runtime_1.jsx)(\"pre\", { className: \"language-javascript\", children: (0, jsx_runtime_1.jsx)(\"code\", { className: \"language-javascript\", dangerouslySetInnerHTML: { __html: serverCodeStr } }) })] }) }));\n}\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/pages/StaticHTML.tsx?");

/***/ }),

/***/ "./src/pages/index.ts":
/*!****************************!*\
  !*** ./src/pages/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./Hydrate */ \"./src/pages/Hydrate.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./LoadCSS */ \"./src/pages/LoadCSS.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./LoadImage */ \"./src/pages/LoadImage.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./Route */ \"./src/pages/Route.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./StaticHTML */ \"./src/pages/StaticHTML.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./LoadData */ \"./src/pages/LoadData.tsx\"), exports);\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/pages/index.ts?");

/***/ }),

/***/ "./src/route/index.tsx":
/*!*****************************!*\
  !*** ./src/route/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst DefaultLayout_1 = __webpack_require__(/*! @/layout/DefaultLayout */ \"./src/layout/DefaultLayout.tsx\");\nconst react_router_1 = __webpack_require__(/*! react-router */ \"react-router\");\nconst settings_1 = __webpack_require__(/*! ./settings */ \"./src/route/settings.tsx\");\nexports[\"default\"] = ((0, jsx_runtime_1.jsx)(react_router_1.Routes, { children: (0, jsx_runtime_1.jsx)(react_router_1.Route, { element: (0, jsx_runtime_1.jsx)(DefaultLayout_1.DefaultLayout, {}), children: settings_1.pages.map((r) => ((0, jsx_runtime_1.jsx)(react_router_1.Route, { path: r.path, element: r.element }))) }) }));\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/route/index.tsx?");

/***/ }),

/***/ "./src/route/settings.tsx":
/*!********************************!*\
  !*** ./src/route/settings.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.pages = void 0;\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst pages_1 = __webpack_require__(/*! @/pages */ \"./src/pages/index.ts\");\nexports.pages = [\n    {\n        path: \"/staticHTML\",\n        name: \"static HTML\",\n        element: (0, jsx_runtime_1.jsx)(pages_1.StaticHTML, {}),\n    },\n    {\n        path: \"/hydrate\",\n        name: \"hydrate\",\n        element: (0, jsx_runtime_1.jsx)(pages_1.Hydrate, {}),\n    },\n    {\n        path: \"/loadCSS\",\n        name: \"loadCSS\",\n        element: (0, jsx_runtime_1.jsx)(pages_1.LoadCSS, {}),\n    },\n    {\n        path: \"/loadImage\",\n        name: \"loadImage\",\n        element: (0, jsx_runtime_1.jsx)(pages_1.LoadImage, {}),\n    },\n    {\n        path: \"/route\",\n        name: \"route\",\n        element: (0, jsx_runtime_1.jsx)(pages_1.Route, {}),\n    },\n    {\n        path: \"/loadData\",\n        name: \"loadData\",\n        element: (0, jsx_runtime_1.jsx)(pages_1.LoadData, {}),\n        loadData: pages_1.loadHydrateData,\n    },\n];\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/route/settings.tsx?");

/***/ }),

/***/ "./src/server/App.tsx":
/*!****************************!*\
  !*** ./src/server/App.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst route_1 = __importDefault(__webpack_require__(/*! @/route */ \"./src/route/index.tsx\"));\nconst react_router_1 = __webpack_require__(/*! react-router */ \"react-router\");\nconst RouterContext_1 = __webpack_require__(/*! @/context/RouterContext */ \"./src/context/RouterContext.tsx\");\nconst SSRContext_1 = __webpack_require__(/*! @/context/SSRContext */ \"./src/context/SSRContext.tsx\");\nconst App = ({ context, path }) => {\n    return ((0, jsx_runtime_1.jsx)(react_router_1.StaticRouter, { location: path, children: (0, jsx_runtime_1.jsx)(SSRContext_1.SSRProvider, { value: context, children: (0, jsx_runtime_1.jsx)(RouterContext_1.RouterProvider, { children: route_1.default }) }) }));\n};\nexports[\"default\"] = App;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/App.tsx?");

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./server */ \"./src/server/server.ts\");\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/index.ts?");

/***/ }),

/***/ "./src/server/middleWare/apiMiddleWare.ts":
/*!************************************************!*\
  !*** ./src/server/middleWare/apiMiddleWare.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.apiMiddleWare = void 0;\nconst request_1 = __webpack_require__(/*! @/utils/request */ \"./src/utils/request.ts\");\nconst apiMiddleWare = () => {\n    return async (req, res, next) => {\n        if (req.path.startsWith(\"/api\")) {\n            const result = await (0, request_1.request)({\n                url: req.path.replace(/^\\/api/, \"/posts\"),\n                method: req.method,\n                params: req.query,\n                data: req.body,\n            });\n            res.status(200).json(result);\n        }\n        else {\n            next();\n        }\n    };\n};\nexports.apiMiddleWare = apiMiddleWare;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/middleWare/apiMiddleWare.ts?");

/***/ }),

/***/ "./src/server/middleWare/error.ts":
/*!****************************************!*\
  !*** ./src/server/middleWare/error.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.errorHandler = errorHandler;\nfunction errorHandler() {\n    return function (err, request, response, next) {\n        try {\n            response.status(400).send(\"Internal Server Error\");\n        }\n        catch (e) {\n            // console.log(e)\n            response.status(500).send(\"Internal Server Error\");\n        }\n    };\n}\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/middleWare/error.ts?");

/***/ }),

/***/ "./src/server/middleWare/index.ts":
/*!****************************************!*\
  !*** ./src/server/middleWare/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./apiMiddleWare */ \"./src/server/middleWare/apiMiddleWare.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./error */ \"./src/server/middleWare/error.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./ssrMiddleware */ \"./src/server/middleWare/ssrMiddleware.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./staticGzipExt */ \"./src/server/middleWare/staticGzipExt.ts\"), exports);\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/middleWare/index.ts?");

/***/ }),

/***/ "./src/server/middleWare/ssrMiddleware.ts":
/*!************************************************!*\
  !*** ./src/server/middleWare/ssrMiddleware.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ssrMiddleware = void 0;\nconst ssrMiddleware = (render) => {\n    return async (req, res, next) => {\n        try {\n            if (req.method.toUpperCase() === \"GET\") {\n                console.log(`SSR request to ${req.url}`);\n                if (req.url === \"/\") {\n                    return res.redirect(302, \"/staticHTML\");\n                }\n                const html = await render({ path: req.url });\n                res.status(200).send(html);\n            }\n            else {\n                next();\n            }\n        }\n        catch (err) {\n            console.error(\"SSR Error:\", err);\n            next(err);\n        }\n    };\n};\nexports.ssrMiddleware = ssrMiddleware;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/middleWare/ssrMiddleware.ts?");

/***/ }),

/***/ "./src/server/middleWare/staticGzipExt.ts":
/*!************************************************!*\
  !*** ./src/server/middleWare/staticGzipExt.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.staticGzipExt = void 0;\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\nconst staticGzipExt = (staticDir) => {\n    return (req, res, next) => {\n        const reqPath = req.path;\n        if (reqPath.endsWith(\".js\")) {\n            res.set(\"Content-Type\", \"application/javascript\");\n            trySendGzip(path_1.default.join(staticDir, reqPath + \".gz\"), req, res, next);\n        }\n        else if (reqPath.endsWith(\".css\")) {\n            res.set(\"Content-Type\", \"text/css\");\n            trySendGzip(path_1.default.join(staticDir, reqPath + \".gz\"), req, res, next);\n        }\n        else {\n            next();\n        }\n    };\n};\nexports.staticGzipExt = staticGzipExt;\nconst trySendGzip = (path, ...arg) => {\n    if (!fs_1.default.existsSync(path)) {\n        arg[2]();\n        return;\n    }\n    arg[1].set(\"Content-Encoding\", \"gzip\");\n    arg[1].sendFile(path + \".gz\");\n};\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/middleWare/staticGzipExt.ts?");

/***/ }),

/***/ "./src/server/render.ts":
/*!******************************!*\
  !*** ./src/server/render.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.render = void 0;\nconst server_1 = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nconst App_1 = __importDefault(__webpack_require__(/*! ./App */ \"./src/server/App.tsx\"));\nconst promises_1 = __importDefault(__webpack_require__(/*! fs/promises */ \"fs/promises\"));\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./src/server/utils/index.ts\");\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nconst qs_1 = __importDefault(__webpack_require__(/*! qs */ \"qs\"));\nconst map2Record_1 = __webpack_require__(/*! ./utils/map2Record */ \"./src/server/utils/map2Record.ts\");\nconst render = async ({ path: location }) => {\n    const loadData = (await Promise.all((0, utils_1.getLoadData)(location))).map(({ name, data }) => [name, data]);\n    const initialData = new Map(loadData);\n    console.log(initialData, loadData);\n    const html = await promises_1.default.readFile(path_1.default.resolve(__dirname, \"../index.html\"), \"utf-8\");\n    const component = (0, server_1.renderToString)((0, react_1.createElement)(App_1.default, {\n        path: location,\n        context: initialData,\n    }));\n    const scripts = await (0, utils_1.getScripts)(path_1.default.resolve(__dirname, \"../public/js\"));\n    const links = await (0, utils_1.getLinks)(path_1.default.resolve(__dirname, \"../public/css\"));\n    return html\n        .replace(\"<!--SSR_HTML-->\", component)\n        .replace(\"<!--SSR_DATA-->\", `${JSON.stringify(qs_1.default.stringify((0, map2Record_1.map2Record)(initialData)))}`)\n        .replace(\"<!--SSR_SCRIPT-->\", scripts.join())\n        .replace(\"<!--SSR_LINK-->\", links.join());\n};\nexports.render = render;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/render.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst render_1 = __webpack_require__(/*! ./render */ \"./src/server/render.ts\");\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst middleWare_1 = __webpack_require__(/*! ./middleWare */ \"./src/server/middleWare/index.ts\");\nconst app = (0, express_1.default)();\napp.use((0, middleWare_1.staticGzipExt)(\"../public\"));\napp.use(express_1.default.static(path_1.default.resolve(__dirname, \"../public\")));\napp.use((0, middleWare_1.apiMiddleWare)());\napp.use((0, middleWare_1.ssrMiddleware)(render_1.render));\napp.use((0, middleWare_1.errorHandler)());\napp.listen(3000 /* EPort.port */, () => {\n    console.log(`listen port ${3000 /* EPort.port */} success`);\n});\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/server.ts?");

/***/ }),

/***/ "./src/server/utils/getLinks.ts":
/*!**************************************!*\
  !*** ./src/server/utils/getLinks.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getLinks = void 0;\nconst promises_1 = __importDefault(__webpack_require__(/*! fs/promises */ \"fs/promises\"));\nconst getLinks = async (path) => {\n    const files = await promises_1.default.readdir(path);\n    const scripts = files\n        .filter((file) => file.endsWith(\".css\"))\n        .map((file) => `\r\n   <link rel=\"stylesheet\" href=\"/css/${file}\" />\r\n   `);\n    return scripts;\n};\nexports.getLinks = getLinks;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/utils/getLinks.ts?");

/***/ }),

/***/ "./src/server/utils/getLoadData.ts":
/*!*****************************************!*\
  !*** ./src/server/utils/getLoadData.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getLoadData = void 0;\nconst settings_1 = __webpack_require__(/*! @/route/settings */ \"./src/route/settings.tsx\");\nconst getLoadData = (location) => {\n    const res = [];\n    for (const page of settings_1.pages) {\n        if (location === page.path || location.startsWith(page.path)) {\n            page.loadData &&\n                res.push(Promise.resolve((async () => {\n                    const { userId = null, id = null } = await page.loadData?.();\n                    const name = page.name;\n                    return {\n                        name,\n                        data: {\n                            userId,\n                            id,\n                        },\n                    };\n                })()));\n            //to do nest route\n            //   if(page.children){\n            //     res.push(...matchRoutes(location))\n            //   }\n        }\n    }\n    return res;\n};\nexports.getLoadData = getLoadData;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/utils/getLoadData.ts?");

/***/ }),

/***/ "./src/server/utils/getScripts.ts":
/*!****************************************!*\
  !*** ./src/server/utils/getScripts.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getScripts = void 0;\nconst promises_1 = __importDefault(__webpack_require__(/*! fs/promises */ \"fs/promises\"));\nconst getScripts = async (path) => {\n    const files = await promises_1.default.readdir(path);\n    const scripts = files\n        .filter((file) => file.endsWith(\".js\"))\n        .map((file) => `\r\n <script src=\"/js/${file}\"></script>\r\n  `);\n    return scripts;\n};\nexports.getScripts = getScripts;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/utils/getScripts.ts?");

/***/ }),

/***/ "./src/server/utils/index.ts":
/*!***********************************!*\
  !*** ./src/server/utils/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./getScripts */ \"./src/server/utils/getScripts.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./getLinks */ \"./src/server/utils/getLinks.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./getLoadData */ \"./src/server/utils/getLoadData.ts\"), exports);\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/utils/index.ts?");

/***/ }),

/***/ "./src/server/utils/map2Record.ts":
/*!****************************************!*\
  !*** ./src/server/utils/map2Record.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.map2Record = void 0;\nconst map2Record = (map) => {\n    const keys = map.keys();\n    const res = {};\n    for (let key of keys) {\n        res[key] = map.get(key);\n    }\n    return res;\n};\nexports.map2Record = map2Record;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/server/utils/map2Record.ts?");

/***/ }),

/***/ "./src/style/loadCSS/test.module.css":
/*!*******************************************!*\
  !*** ./src/style/loadCSS/test.module.css ***!
  \*******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": `test-module__container___j3PqQ`\n};\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/style/loadCSS/test.module.css?");

/***/ }),

/***/ "./src/utils/hydrate.ts":
/*!******************************!*\
  !*** ./src/utils/hydrate.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getHydrateCode = void 0;\nconst prismjs_1 = __importDefault(__webpack_require__(/*! prismjs */ \"prismjs\"));\nconst reactCode = () => {\n    return `\r\n\tconst [count, setCount] = useState(0)\r\n\t <button onClick={() => setCount(count + 1)} className=\" border bg-blue-400\">\r\n            add\r\n     </button>\r\n\t`;\n};\nconst clientCode = () => {\n    return `\r\nhydrateRoot(\r\n  document.getElementById(\"root\") as any,\r\n  createElement(App, {\r\n    path: \"/\",\r\n    context: window.__INITIAL_DATA__,\r\n  })\r\n)`;\n};\nconst webpackCode = () => {\n    return `\r\n  const config: Configuration = {\r\n  entry: path.resolve(__dirname, \"src/index.ts\"),\r\n  output: {\r\n    path: path.resolve(__dirname, \"dist\"),\r\n    filename: \"server.js\",\r\n  },\r\n  //保留Node原生的全局__dirname,__filename\r\n  node: {\r\n    __dirname: false,\r\n    __filename: false,\r\n  },\r\n  module: {\r\n    rules: [\r\n      {\r\n        test: /\\.tsx?$/,\r\n        use: \"ts-loader\",\r\n        exclude: /node_modules/,\r\n      },\r\n    ],\r\n  },\r\n  resolve: {\r\n    extensions: [\".tsx\", \".ts\", \".js\"],\r\n    alias: {\r\n      \"@\": path.resolve(__dirname, \"src\"),\r\n    },\r\n  },\r\n  mode: \"development\",\r\n  target: \"node\",\r\n  //server端直接去node_modules中找依赖去，不需要打包\r\n  externals: [nodeExternals()],\r\n\r\n}`;\n};\nconst getHydrateCode = () => {\n    const reactCodeStr = prismjs_1.default.highlight(reactCode(), prismjs_1.default.languages.javascript, \"javascript\");\n    const clientCodeStr = prismjs_1.default.highlight(clientCode(), prismjs_1.default.languages.javascript, \"javascript\");\n    const webpackCodeStr = prismjs_1.default.highlight(webpackCode(), prismjs_1.default.languages.javascript, \"javascript\");\n    return {\n        reactCodeStr,\n        clientCodeStr,\n        webpackCodeStr,\n    };\n};\nexports.getHydrateCode = getHydrateCode;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/utils/hydrate.ts?");

/***/ }),

/***/ "./src/utils/loadCss.ts":
/*!******************************!*\
  !*** ./src/utils/loadCss.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getCssCode = void 0;\nconst prismjs_1 = __importDefault(__webpack_require__(/*! prismjs */ \"prismjs\"));\nconst tailwindCode = () => {\n    return ` <div className=\"bg-blue-400\">tailwind</div>`;\n};\nconst lessCode = () => {\n    return `\r\n\t//styles.less\r\n\t.less-container {\r\n        background-color: #492c92;\r\n    }\r\n    //react\r\n\t<div class=\"less-container\">less</div>`;\n};\nconst cssModuleCode = () => {\n    return `\r\n\t//styles.module.css\r\n\t.container {\r\n      background-color: #bc8845;\r\n    }\r\n\r\n    //react\r\n   import cssModule from \"@/style/loadCSS/styles.module.css\"\r\n   <div className={cssModule?.container}>cssModule</div>\r\n}\r\n`;\n};\nconst webpackCode = () => {\n    return `\r\n //webpack.server.ts\r\n     {\r\n        test: /\\.css$/i,\r\n        exclude: /\\.module\\.css$/i,\r\n        use: [\"null-loader\"],\r\n      },\r\n      {\r\n        test: /\\.module\\.css$/i,\r\n        use: [\r\n          {\r\n            loader: \"css-loader\",\r\n            options: {\r\n              esModule: false,\r\n              modules: {\r\n                exportOnlyLocals: true,\r\n                localIdentName: \"[name]__[local]___[hash:base64:5]\",\r\n              },\r\n            },\r\n          },\r\n          \"postcss-loader\",\r\n        ],\r\n      }, \r\n\r\n\t  //webpack.client.ts\r\n\t   {\r\n        test: /\\.css$/,\r\n        exclude: /\\.module\\.css$/i,\r\n        use: [MiniCssExtractPlugin.loader, \"css-loader\", \"postcss-loader\"],\r\n      },\r\n      {\r\n        test: /\\.module\\.css$/i,\r\n        use: [\r\n          MiniCssExtractPlugin.loader,\r\n          {\r\n            loader: \"css-loader\",\r\n            options: {\r\n              esModule: false,\r\n              modules: {\r\n                localIdentName: \"[name]__[local]___[hash:base64:5]\",\r\n              },\r\n            },\r\n          },\r\n          \"postcss-loader\",\r\n        ],\r\n      },\r\n      {\r\n        test: /\\.less$/,\r\n        use: [MiniCssExtractPlugin.loader, \"css-loader\", \"postcss-loader\", \"less-loader\"],\r\n      },\r\n  `;\n};\nconst getCssCode = () => {\n    const tailwindCodeStr = prismjs_1.default.highlight(tailwindCode(), prismjs_1.default.languages.javascript, \"javascript\");\n    const lessCodeStr = prismjs_1.default.highlight(lessCode(), prismjs_1.default.languages.javascript, \"javascript\");\n    const cssModuleCodeStr = prismjs_1.default.highlight(cssModuleCode(), prismjs_1.default.languages.javascript, \"javascript\");\n    const webpackCodeStr = prismjs_1.default.highlight(webpackCode(), prismjs_1.default.languages.javascript, \"javascript\");\n    return {\n        tailwindCodeStr,\n        lessCodeStr,\n        cssModuleCodeStr,\n        webpackCodeStr,\n    };\n};\nexports.getCssCode = getCssCode;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/utils/loadCss.ts?");

/***/ }),

/***/ "./src/utils/loadData.ts":
/*!*******************************!*\
  !*** ./src/utils/loadData.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getLoadDataCode = exports.dataContent = void 0;\nconst prismjs_1 = __importDefault(__webpack_require__(/*! prismjs */ \"prismjs\"));\nconst dataContent = ({ userId = \"null\", id = \"null\" } = {}) => {\n    return prismjs_1.default.highlight(JSON.stringify({ userId, id }), prismjs_1.default.languages.javascript, \"javascript\");\n};\nexports.dataContent = dataContent;\nconst serverCode = () => {\n    return `\r\n\r\n  //add middleware use like proxy\r\n  export const apiMiddleWare = (): RequestHandler => {\r\n    return async (req, res, next) => {\r\n      if (req.path.startsWith(\"/api\")) {\r\n        const result = await request<Record<string, any>>({\r\n          url: req.path.replace(/^\\/api/, \"/posts\"),\r\n          method: req.method as any, \r\n          params: req.query,\r\n          data: req.body,\r\n        })\r\n        res.status(200).json(result)\r\n      } else {\r\n        next()\r\n      }\r\n    }\r\n  }\r\n    //server.ts\r\n    const app = express()\r\n    app.use(staticGzipExt(\"../public\"))\r\n    app.use(express.static(path.resolve(__dirname, \"../public\")))\r\n    app.use(apiMiddleWare())\r\n    app.use(ssrMiddleware(render))\r\n    app.use(errorHandler())\r\n    app.listen(EPort.port)\r\n\r\n  //render.ts\r\n  export const render: IRender = async ({ path: location }) => {\r\n  //get data from route\r\n  const initialData: THydrateContext = new Map((await Promise.all(getLoadData(location))).map(({ name, data }) => [name, data]))\r\n\r\n  const html = await fs.readFile(path.resolve(__dirname, \"../index.html\"), \"utf-8\")\r\n  const component = renderToString(\r\n    createElement(App, {\r\n      path: location,\r\n      //inject initial data\r\n      context: initialData,\r\n    })\r\n  )\r\n    ...\r\n  }\r\n    `;\n};\nconst clientCode = () => {\n    return `\r\n  //App.tsx\r\n  const App: ISSRApp = ({ context, path }) => {\r\n    return (\r\n      <BrowserRouter>\r\n        <SSRProvider value={context}>\r\n          <RouterProvider>{RouteConfig}</RouterProvider>\r\n        </SSRProvider>\r\n      </BrowserRouter>\r\n   )\r\n  }\r\n      //route.ts\r\n      export interface IPageItem {\r\n        path: string\r\n        name: string\r\n        element: JSX.Element\r\n        loadData?: () => Promise<any>\r\n        children?: Array<IPageItem>\r\n      }\r\n      export const pages: Array<IPageItem> = [  {\r\n            path: \"/loadData\",\r\n            name: \"loadData\",\r\n            element: <LoadData />,\r\n            loadData: loadHydrateData,\r\n          }\r\n     ]\r\n\r\n     //client.ts\r\n     const initData = () => {\r\n        if (window?.__INITIAL_DATA__?.length) {\r\n            return new Map(Object.entries(qs.parse(window.__INITIAL_DATA__)) as any) as TSSRCacheData\r\n        }\r\n        return new Map() as TSSRCacheData\r\n     }\r\n\r\n    hydrateRoot(\r\n         document.getElementById(\"root\") as any,\r\n         createElement(App, {\r\n             path: \"/\",\r\n             //get inject data\r\n            context: initData(),\r\n        })\r\n    )\r\n    `;\n};\nconst getLoadDataCode = () => {\n    const serverCodeStr = prismjs_1.default.highlight(serverCode(), prismjs_1.default.languages.javascript, \"javascript\");\n    const clientCodeStr = prismjs_1.default.highlight(clientCode(), prismjs_1.default.languages.javascript, \"javascript\");\n    //   const webpackCodeStr = Prism.highlight(webpackCode(), Prism.languages.javascript, \"javascript\")\n    return {\n        serverCodeStr,\n        clientCodeStr,\n    };\n};\nexports.getLoadDataCode = getLoadDataCode;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/utils/loadData.ts?");

/***/ }),

/***/ "./src/utils/loadImg.ts":
/*!******************************!*\
  !*** ./src/utils/loadImg.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getLoadImgCode = void 0;\nconst prismjs_1 = __importDefault(__webpack_require__(/*! prismjs */ \"prismjs\"));\nconst clientCode = () => {\n    return `\r\n  //React\r\n import bell from \"@/asset/bell.jpg\"\r\n\r\n <img src={bell} alt=\"\" className=\"object-cover w-32 h-32\" />\r\n\r\n //Css\r\n .bell-background {\r\n    background: url(\"@/asset/bell.jpg\") no-repeat;\r\n  }\r\n\r\n  <div className=\"bell-background\">img</div>\r\n)`;\n};\nconst webpackCode = () => {\n    return `\r\n    //webpack.client.ts\r\n    {\r\n        test: /\\.(png|jpe?g|gif|svg|webp)$/i,\r\n        type: \"asset/resource\",\r\n        generator: {\r\n          filename: \"img/[name].[contenthash:5][ext]\",\r\n        },\r\n      },\r\n\t \r\n\t  //webpack.server.ts\r\n\t {\r\n        test: /\\.(png|jpe?g|gif|svg|webp)$/i,\r\n        type: \"asset/resource\",\r\n        generator: {\r\n          filename: \"img/[name].[contenthash:5][ext]\",\r\n          // 只要 URL，实际写文件交给 client bundle\r\n          emit: false,\r\n        },\r\n      },\r\n\r\n}`;\n};\nconst getLoadImgCode = () => {\n    const clientCodeStr = prismjs_1.default.highlight(clientCode(), prismjs_1.default.languages.javascript, \"javascript\");\n    const webpackCodeStr = prismjs_1.default.highlight(webpackCode(), prismjs_1.default.languages.javascript, \"javascript\");\n    return {\n        clientCodeStr,\n        webpackCodeStr,\n    };\n};\nexports.getLoadImgCode = getLoadImgCode;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/utils/loadImg.ts?");

/***/ }),

/***/ "./src/utils/request.ts":
/*!******************************!*\
  !*** ./src/utils/request.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.request = void 0;\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nclass AxiosHelper {\n    _ins;\n    constructor(baseURL) {\n        this._ins = axios_1.default.create({\n            baseURL,\n        });\n        this._ins.interceptors.request.use((config) => {\n            // do any thing you want\n            if (config.baseURL === \"https://jsonplaceholder.typicode.com\" /* EServer.url */ && config.url?.startsWith(\"/api\")) {\n                config.url = config.url?.replace(\"/api\", \"/posts\");\n            }\n            return config;\n        });\n        this._ins.interceptors.response.use((response) => {\n            return response.data;\n        });\n    }\n    request(config) {\n        return this._ins.request(config);\n    }\n}\nfunction createRequest() {\n    let ins;\n    if (typeof window === \"undefined\") {\n        ins = new AxiosHelper(\"https://jsonplaceholder.typicode.com\" /* EServer.url */);\n    }\n    else {\n        ins = new AxiosHelper(\"/\");\n    }\n    return ins.request.bind(ins);\n}\nexports.request = createRequest();\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/utils/request.ts?");

/***/ }),

/***/ "./src/utils/route.ts":
/*!****************************!*\
  !*** ./src/utils/route.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getRouteCode = void 0;\nconst prismjs_1 = __importDefault(__webpack_require__(/*! prismjs */ \"prismjs\"));\nconst clientCode = () => {\n    return `\r\n const App: ISSRApp = ({ context, path }) => {\r\n  return (\r\n    <BrowserRouter>\r\n      <RouterProvider>{RouteConfig}</RouterProvider>\r\n    </BrowserRouter>\r\n  )\r\n}`;\n};\nconst serverCode = () => {\n    return `\r\n const App: ISSRApp = ({ context, path }) => {\r\n  return (\r\n    <StaticRouter location={path}>\r\n      <RouterProvider>{RouteConfig}</RouterProvider>\r\n    </StaticRouter>\r\n  )\r\n}`;\n};\nconst getRouteCode = () => {\n    const clientCodeStr = prismjs_1.default.highlight(clientCode(), prismjs_1.default.languages.javascript, \"javascript\");\n    const serverCodeStr = prismjs_1.default.highlight(serverCode(), prismjs_1.default.languages.javascript, \"javascript\");\n    return {\n        clientCodeStr,\n        serverCodeStr,\n    };\n};\nexports.getRouteCode = getRouteCode;\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/utils/route.ts?");

/***/ }),

/***/ "./src/utils/staticHTML.ts":
/*!*********************************!*\
  !*** ./src/utils/staticHTML.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getCreateStaticHTML = getCreateStaticHTML;\nconst prismjs_1 = __importDefault(__webpack_require__(/*! prismjs */ \"prismjs\"));\nfunction serverCode() {\n    const code = `const initialData: IHydrateContext = {}\r\nexport const render: RequestHandler = async (req, res) => {\r\n  const html = await fs.readFile(path.resolve(__dirname, \"../index.html\"), \"utf-8\")\r\n  const component = renderToString(\r\n    createElement(App, {\r\n      path: \"/\",\r\n      context: initialData,\r\n    })\r\n  )\r\n  const scripts = await getScripts(path.resolve(__dirname, \"../public/js\"))\r\n  const links = await getLinks(path.resolve(__dirname, \"../public/css\"))\r\n  res.send(html.replace(\"<!--SSR_HTML-->\", component).replace(\"<!--SSR_DATA-->\", JSON.stringify(initialData))\r\n  .replace(\"<!--SSR_SCRIPT-->\", scripts.join()).replace(\"<!--SSR_LINK-->\", links.join()))\r\n}`;\n    return code;\n}\nfunction clientCode() {\n    return `\r\nhydrateRoot(\r\n  document.getElementById(\"root\"),\r\n  createElement(App, {\r\n    path: \"/\",\r\n    context: window.__INITIAL_DATA__,\r\n  })\r\n)`;\n}\nfunction getCreateStaticHTML() {\n    const code = serverCode();\n    const serverCodeStr = prismjs_1.default.highlight(code, prismjs_1.default.languages.javascript, \"javascript\");\n    const clientCodeStr = prismjs_1.default.highlight(clientCode(), prismjs_1.default.languages.javascript, \"javascript\");\n    return {\n        serverCodeStr,\n        clientCodeStr,\n    };\n}\n\n\n//# sourceURL=webpack://express-ssr-sandbox/./src/utils/staticHTML.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "prismjs":
/*!**************************!*\
  !*** external "prismjs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismjs");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("qs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
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