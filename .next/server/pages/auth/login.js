/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth/login";
exports.ids = ["pages/auth/login"];
exports.modules = {

/***/ "./pages/auth/login.tsx":
/*!******************************!*\
  !*** ./pages/auth/login.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-login */ \"react-google-login\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-top-loading-bar */ \"react-top-loading-bar\");\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ \"./node_modules/bootstrap-icons/font/bootstrap-icons.css\");\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction Login() {\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const gotoHome = ()=>{\n        window.location.href = \"/\";\n    };\n    const responseGoogle = (response)=>{\n        console.log(response);\n        if (!response.error) {\n            authenticate(response);\n        }\n        completeLoadingBar();\n    };\n    const LoadFinished = ()=>{\n        completeLoadingBar();\n    };\n    const startLoadingBar = ()=>{\n        ref.current.continuousStart();\n    };\n    const completeLoadingBar = ()=>{\n        ref.current.complete();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // Update the document title using the browser API\n        startLoadingBar();\n        console.log(localStorage.getItem(\"_id\") === null, \"ID\");\n        if (localStorage.getItem(\"_id\") != undefined && localStorage.getItem(\"_id\") != null) {\n            gotoHome();\n        }\n    });\n    /**  Authenticate using google and mongodb  **/ const authenticate = async (data)=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_5___default().post('/api/users', data);\n        console.log(response.data.data._id);\n        localStorage.setItem(\"_id\", response.data.data._id);\n        gotoHome();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"./../../images/IMG_4870.PNG\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"The Sigma | Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"./../../css/common.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fluid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        height: 5,\n                        color: \"#4d61fc\",\n                        ref: ref\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 16\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center mt-5 loginButtonHolder\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_google_login__WEBPACK_IMPORTED_MODULE_2__.GoogleLogin, {\n                                clientId: \"259083905478-9vs3cimdg8n1ktrdla6cu5iavp3879qd.apps.googleusercontent.com\",\n                                buttonText: \"Login using Google\",\n                                onSuccess: responseGoogle,\n                                onFailure: responseGoogle,\n                                cookiePolicy: 'single_host_origin',\n                                isSignedIn: true,\n                                onAutoLoadFinished: LoadFinished\n                            }, void 0, false, {\n                                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 35\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5\",\n                                children: \"Click on the button above to login.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 35\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 16\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFFaEMsY0FBYztnQ0FDekJpQyxZQUFZLEVBQUUsQ0FBb0I7Z0NBQ2xDQyxVQUFVLEVBQUUsSUFBSTtnQ0FDaEJDLGtCQUFrQixFQUFFNUIsWUFBWTs7Ozs7O3dHQUVqQ1ksQ0FBRztnQ0FBQ08sU0FBUyxFQUFDLENBQU07MENBQUMsQ0FBbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszRixDQUFDO0FBRUQsaUVBQWVoQyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXV0aC9sb2dpbi50c3g/OGRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XG5pbXBvcnQgTG9hZGluZ0JhciBmcm9tICdyZWFjdC10b3AtbG9hZGluZy1iYXInXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xuaW1wb3J0ICdib290c3RyYXAtaWNvbnMvZm9udC9ib290c3RyYXAtaWNvbnMuY3NzJ1xuXG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBnb3RvSG9tZSA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIlxuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlR29vZ2xlID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICBpZighcmVzcG9uc2UuZXJyb3Ipe1xuICAgICAgICAgIGF1dGhlbnRpY2F0ZShyZXNwb25zZSlcbiAgICAgIH1cbiAgICAgIGNvbXBsZXRlTG9hZGluZ0JhcigpO1xuICAgIH1cblxuICAgIGNvbnN0IExvYWRGaW5pc2hlZCA9ICgpID0+IHtcbiAgICAgICAgY29tcGxldGVMb2FkaW5nQmFyKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRMb2FkaW5nQmFyID0gKCkgPT4ge1xuICAgICAgICByZWYuY3VycmVudC5jb250aW51b3VzU3RhcnQoKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlTG9hZGluZ0JhciA9ICgpID0+IHtcbiAgICAgICAgcmVmLmN1cnJlbnQuY29tcGxldGUoKVxuICAgIH1cblxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBkb2N1bWVudCB0aXRsZSB1c2luZyB0aGUgYnJvd3NlciBBUElcbiAgICAgICAgIHN0YXJ0TG9hZGluZ0JhcigpXG4gICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl9pZFwiKSA9PT0gbnVsbCxcIklEXCIpXG4gICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl9pZFwiKSAhPSB1bmRlZmluZWQgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfaWRcIikgIT0gbnVsbCl7XG4gICAgICAgICAgIGdvdG9Ib21lKClcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgLyoqICBBdXRoZW50aWNhdGUgdXNpbmcgZ29vZ2xlIGFuZCBtb25nb2RiICAqKi9cbiAgICBjb25zdCBhdXRoZW50aWNhdGUgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3VzZXJzJywgZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEuX2lkKVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfaWRcIixyZXNwb25zZS5kYXRhLmRhdGEuX2lkKTtcbiAgICAgIGdvdG9Ib21lKCk7XG4gICAgfSAgXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi4vLi4vLi4vaW1hZ2VzL0lNR180ODcwLlBOR1wiIC8+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlRoZSBTaWdtYSB8IExvZ2luPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi4vLi4vLi4vY3NzL2NvbW1vbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICA8TG9hZGluZ0JhciBoZWlnaHQ9ezV9IGNvbG9yPVwiIzRkNjFmY1wiIHJlZj17cmVmfSAvPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC01IGxvZ2luQnV0dG9uSG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdvb2dsZUxvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJZD1cIjI1OTA4MzkwNTQ3OC05dnMzY2ltZGc4bjFrdHJkbGE2Y3U1aWF2cDM4NzlxZC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25UZXh0PVwiTG9naW4gdXNpbmcgR29vZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlR29vZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29va2llUG9saWN5PXsnc2luZ2xlX2hvc3Rfb3JpZ2luJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2lnbmVkSW49e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkF1dG9Mb2FkRmluaXNoZWQ9e0xvYWRGaW5pc2hlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPkNsaWNrIG9uIHRoZSBidXR0b24gYWJvdmUgdG8gbG9naW4uPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luIl0sIm5hbWVzIjpbIkhlYWQiLCJHb29nbGVMb2dpbiIsIkxvYWRpbmdCYXIiLCJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsImF4aW9zIiwiTG9naW4iLCJyZWYiLCJnb3RvSG9tZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInJlc3BvbnNlR29vZ2xlIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJhdXRoZW50aWNhdGUiLCJjb21wbGV0ZUxvYWRpbmdCYXIiLCJMb2FkRmluaXNoZWQiLCJzdGFydExvYWRpbmdCYXIiLCJjdXJyZW50IiwiY29udGludW91c1N0YXJ0IiwiY29tcGxldGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwiZGF0YSIsInBvc3QiLCJfaWQiLCJzZXRJdGVtIiwiZGl2IiwibGluayIsInJlbCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiY2xhc3NOYW1lIiwiaGVpZ2h0IiwiY29sb3IiLCJjbGllbnRJZCIsImJ1dHRvblRleHQiLCJvblN1Y2Nlc3MiLCJvbkZhaWx1cmUiLCJjb29raWVQb2xpY3kiLCJpc1NpZ25lZEluIiwib25BdXRvTG9hZEZpbmlzaGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/login.tsx\n");

/***/ }),

/***/ "./node_modules/bootstrap-icons/font/bootstrap-icons.css":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-icons/font/bootstrap-icons.css ***!
  \***************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-google-login":
/*!*************************************!*\
  !*** external "react-google-login" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-google-login");

/***/ }),

/***/ "react-top-loading-bar":
/*!****************************************!*\
  !*** external "react-top-loading-bar" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-top-loading-bar");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/login.tsx"));
module.exports = __webpack_exports__;

})();