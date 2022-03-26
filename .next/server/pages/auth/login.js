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

/***/ "./pages/auth/login.js":
/*!*****************************!*\
  !*** ./pages/auth/login.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-login */ \"react-google-login\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-top-loading-bar */ \"react-top-loading-bar\");\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ \"./node_modules/bootstrap-icons/font/bootstrap-icons.css\");\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction Login() {\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const gotoHome = ()=>{\n        window.location.href = \"/\";\n    };\n    const responseGoogle = (response)=>{\n        console.log(response);\n        if (!response.error) {\n            authenticate(response);\n        }\n        completeLoadingBar();\n    };\n    const LoadFinished = ()=>{\n        completeLoadingBar();\n    };\n    const startLoadingBar = ()=>{\n        ref.current.continuousStart();\n    };\n    const completeLoadingBar = ()=>{\n        ref.current.complete();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // Update the document title using the browser API\n        startLoadingBar();\n        console.log(localStorage.getItem(\"_id\") === null, \"ID\");\n        if (localStorage.getItem(\"_id\") != undefined && localStorage.getItem(\"_id\") != null) {\n            gotoHome();\n        }\n    });\n    /**  Authenticate using google and mongodb  **/ const authenticate = async (data)=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_5___default().post('/api/users', data);\n        console.log(response.data.data._id);\n        localStorage.setItem(\"_id\", response.data.data._id);\n        gotoHome();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"./../../images/IMG_4870.PNG\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"The Sigma | Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"./../../css/common.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fluid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        height: 5,\n                        color: \"#4d61fc\",\n                        ref: ref\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 63,\n                        columnNumber: 16\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center mt-5 loginButtonHolder\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_google_login__WEBPACK_IMPORTED_MODULE_2__.GoogleLogin, {\n                                clientId: \"259083905478-9vs3cimdg8n1ktrdla6cu5iavp3879qd.apps.googleusercontent.com\",\n                                buttonText: \"Login using Google\",\n                                onSuccess: responseGoogle,\n                                onFailure: responseGoogle,\n                                cookiePolicy: 'single_host_origin',\n                                isSignedIn: true,\n                                onAutoLoadFinished: LoadFinished\n                            }, void 0, false, {\n                                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                                lineNumber: 65,\n                                columnNumber: 35\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5\",\n                                children: \"Click on the button above to login.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                                lineNumber: 74,\n                                columnNumber: 35\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 64,\n                        columnNumber: 16\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dDQUNoQkMsa0JBQWtCLEVBQUU1QixZQUFZOzs7Ozs7d0dBRWpDWSxDQUFHO2dDQUFDTyxTQUFTLEVBQUMsQ0FBTTswQ0FBQyxDQUFtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNGLENBQUM7QUFFRCxpRUFBZWhDLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL2xvZ2luLmpzPzI3OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgR29vZ2xlTG9naW4gfSBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nO1xuaW1wb3J0IExvYWRpbmdCYXIgZnJvbSAncmVhY3QtdG9wLWxvYWRpbmctYmFyJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZix1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcbmltcG9ydCAnYm9vdHN0cmFwLWljb25zL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzcydcblxuZnVuY3Rpb24gTG9naW4oKSB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgZ290b0hvbWUgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCJcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZUdvb2dsZSA9IChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgaWYoIXJlc3BvbnNlLmVycm9yKXtcbiAgICAgICAgICBhdXRoZW50aWNhdGUocmVzcG9uc2UpXG4gICAgICB9XG4gICAgICBjb21wbGV0ZUxvYWRpbmdCYXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCBMb2FkRmluaXNoZWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbXBsZXRlTG9hZGluZ0JhcigpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0TG9hZGluZ0JhciA9ICgpID0+IHtcbiAgICAgICAgcmVmLmN1cnJlbnQuY29udGludW91c1N0YXJ0KClcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZUxvYWRpbmdCYXIgPSAoKSA9PiB7XG4gICAgICAgIHJlZi5jdXJyZW50LmNvbXBsZXRlKClcbiAgICB9XG5cbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgZG9jdW1lbnQgdGl0bGUgdXNpbmcgdGhlIGJyb3dzZXIgQVBJXG4gICAgICAgICBzdGFydExvYWRpbmdCYXIoKVxuICAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfaWRcIikgPT09IG51bGwsXCJJRFwiKVxuICAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfaWRcIikgIT0gdW5kZWZpbmVkICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX2lkXCIpICE9IG51bGwpe1xuICAgICAgICAgICBnb3RvSG9tZSgpXG4gICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIC8qKiAgQXV0aGVudGljYXRlIHVzaW5nIGdvb2dsZSBhbmQgbW9uZ29kYiAgKiovXG4gICAgY29uc3QgYXV0aGVudGljYXRlID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS91c2VycycsIGRhdGEpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhLl9pZClcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX2lkXCIscmVzcG9uc2UuZGF0YS5kYXRhLl9pZCk7XG4gICAgICBnb3RvSG9tZSgpO1xuICAgIH0gIFxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIuLy4uLy4uL2ltYWdlcy9JTUdfNDg3MC5QTkdcIiAvPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5UaGUgU2lnbWEgfCBMb2dpbjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIuLy4uLy4uL2Nzcy9jb21tb24uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgPExvYWRpbmdCYXIgaGVpZ2h0PXs1fSBjb2xvcj1cIiM0ZDYxZmNcIiByZWY9e3JlZn0gLz5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNSBsb2dpbkJ1dHRvbkhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHb29nbGVMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SWQ9XCIyNTkwODM5MDU0NzgtOXZzM2NpbWRnOG4xa3RyZGxhNmN1NWlhdnAzODc5cWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIkxvZ2luIHVzaW5nIEdvb2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlR29vZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NpZ25lZEluPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BdXRvTG9hZEZpbmlzaGVkPXtMb2FkRmluaXNoZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5DbGljayBvbiB0aGUgYnV0dG9uIGFib3ZlIHRvIGxvZ2luLjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbiJdLCJuYW1lcyI6WyJIZWFkIiwiR29vZ2xlTG9naW4iLCJMb2FkaW5nQmFyIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiTG9naW4iLCJyZWYiLCJnb3RvSG9tZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInJlc3BvbnNlR29vZ2xlIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJhdXRoZW50aWNhdGUiLCJjb21wbGV0ZUxvYWRpbmdCYXIiLCJMb2FkRmluaXNoZWQiLCJzdGFydExvYWRpbmdCYXIiLCJjdXJyZW50IiwiY29udGludW91c1N0YXJ0IiwiY29tcGxldGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwiZGF0YSIsInBvc3QiLCJfaWQiLCJzZXRJdGVtIiwiZGl2IiwibGluayIsInJlbCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiY2xhc3NOYW1lIiwiaGVpZ2h0IiwiY29sb3IiLCJjbGllbnRJZCIsImJ1dHRvblRleHQiLCJvblN1Y2Nlc3MiLCJvbkZhaWx1cmUiLCJjb29raWVQb2xpY3kiLCJpc1NpZ25lZEluIiwib25BdXRvTG9hZEZpbmlzaGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/login.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/auth/login.js"));
module.exports = __webpack_exports__;

})();