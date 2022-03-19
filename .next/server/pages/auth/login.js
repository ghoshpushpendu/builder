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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-login */ \"react-google-login\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-top-loading-bar */ \"react-top-loading-bar\");\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ \"./node_modules/bootstrap-icons/font/bootstrap-icons.css\");\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction Login() {\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const gotoHome = ()=>{\n        window.location.href = \"/\";\n    };\n    const responseGoogle = (response)=>{\n        console.log(response);\n        authenticate(response);\n        completeLoadingBar();\n    };\n    const LoadFinished = ()=>{\n        completeLoadingBar();\n    };\n    const startLoadingBar = ()=>{\n        ref.current.continuousStart();\n    };\n    const completeLoadingBar = ()=>{\n        ref.current.complete();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // Update the document title using the browser API\n        startLoadingBar();\n    });\n    /**  Authenticate using google and mongodb  **/ const authenticate = async (data)=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_5___default().post('http://localhost:3000/api/users', data);\n        console.log(response.data.data._id);\n        sessionStorage.setItem(\"_id\", response.data.data._id);\n        gotoHome();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"./../../images/IMG_4870.PNG\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"The Sigma | Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"./../../css/common.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fluid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        height: 5,\n                        color: \"#4d61fc\",\n                        ref: ref\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 57,\n                        columnNumber: 16\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_google_login__WEBPACK_IMPORTED_MODULE_2__.GoogleLogin, {\n                                clientId: \"259083905478-9vs3cimdg8n1ktrdla6cu5iavp3879qd.apps.googleusercontent.com\",\n                                buttonText: \"Login using Google\",\n                                onSuccess: responseGoogle,\n                                onFailure: responseGoogle,\n                                cookiePolicy: 'single_host_origin',\n                                isSignedIn: true,\n                                onAutoLoadFinished: LoadFinished\n                            }, void 0, false, {\n                                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                                lineNumber: 59,\n                                columnNumber: 35\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5\",\n                                children: \"Click on the button above to login.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                                lineNumber: 68,\n                                columnNumber: 35\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 58,\n                        columnNumber: 16\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL2xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNvQjtBQUNGO0FBQ1c7QUFDaEM7QUFDZ0I7QUFDUTtTQUV4Q1EsS0FBSyxHQUFHLENBQUM7SUFDZCxLQUFLLENBQUNDLEdBQUcsR0FBR0wsNkNBQU0sQ0FBQyxJQUFJO0lBRXZCLEtBQUssQ0FBQ00sUUFBUSxPQUFTLENBQUM7UUFDcEJDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsQ0FBRztJQUM5QixDQUFDO0lBRUQsS0FBSyxDQUFDQyxjQUFjLElBQUlDLFFBQVEsR0FBSyxDQUFDO1FBQ3BDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUTtRQUNwQkcsWUFBWSxDQUFDSCxRQUFRO1FBQ3JCSSxrQkFBa0I7SUFDcEIsQ0FBQztJQUVELEtBQUssQ0FBQ0MsWUFBWSxPQUFTLENBQUM7UUFDeEJELGtCQUFrQjtJQUN0QixDQUFDO0lBRUQsS0FBSyxDQUFDRSxlQUFlLE9BQVMsQ0FBQztRQUMzQlosR0FBRyxDQUFDYSxPQUFPLENBQUNDLGVBQWU7SUFDL0IsQ0FBQztJQUVELEtBQUssQ0FBQ0osa0JBQWtCLE9BQVMsQ0FBQztRQUM5QlYsR0FBRyxDQUFDYSxPQUFPLENBQUNFLFFBQVE7SUFDeEIsQ0FBQztJQUVDbEIsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsRUFBa0Q7UUFDbERlLGVBQWU7SUFDakIsQ0FBQztJQUVILEVBQStDLDhDQUMvQyxLQUFLLENBQUNILFlBQVksVUFBVU8sSUFBSSxHQUFLLENBQUM7UUFDcEMsS0FBSyxDQUFDVixRQUFRLEdBQUcsS0FBSyxDQUFDUixpREFBVSxDQUFDLENBQWlDLGtDQUFFa0IsSUFBSTtRQUN6RVQsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQ1UsSUFBSSxDQUFDQSxJQUFJLENBQUNFLEdBQUc7UUFDbENDLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLENBQUssTUFBQ2QsUUFBUSxDQUFDVSxJQUFJLENBQUNBLElBQUksQ0FBQ0UsR0FBRztRQUNuRGpCLFFBQVE7SUFDVixDQUFDO0lBR0QsTUFBTSw2RUFDRG9CLENBQUc7O3dGQUNDOUIsa0RBQUk7O2dHQUNBK0IsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNuQixJQUFJLEVBQUMsQ0FBNkI7Ozs7OztnR0FDbERvQixDQUFLO2tDQUFDLENBQWlCOzs7Ozs7Z0dBQ3ZCQyxDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBVTt3QkFBQ0MsT0FBTyxFQUFDLENBQXVDOzs7Ozs7Z0dBQ3BFTCxDQUFJO3dCQUFDbEIsSUFBSSxFQUFDLENBQXdCO3dCQUFDbUIsR0FBRyxFQUFDLENBQVk7Ozs7Ozs7Ozs7Ozt3RkFFdkRGLENBQUc7Z0JBQUNPLFNBQVMsRUFBQyxDQUFpQjs7Z0dBQzVCbkMsOERBQVU7d0JBQUNvQyxNQUFNLEVBQUUsQ0FBQzt3QkFBRUMsS0FBSyxFQUFDLENBQVM7d0JBQUM5QixHQUFHLEVBQUVBLEdBQUc7Ozs7OztnR0FDOUNxQixDQUFHO3dCQUFDTyxTQUFTLEVBQUMsQ0FBYTs7d0dBQ1JwQywyREFBVztnQ0FDVnVDLFFBQVEsRUFBQyxDQUEwRTtnQ0FDbkZDLFVBQVUsRUFBQyxDQUFvQjtnQ0FDL0JDLFNBQVMsRUFBRTVCLGNBQWM7Z0NBQ3pCNkIsU0FBUyxFQUFFN0IsY0FBYztnQ0FDekI4QixZQUFZLEVBQUUsQ0FBb0I7Z0NBQ2xDQyxVQUFVLEVBQUUsSUFBSTtnQ0FDaEJDLGtCQUFrQixFQUFFMUIsWUFBWTs7Ozs7O3dHQUVqQ1UsQ0FBRztnQ0FBQ08sU0FBUyxFQUFDLENBQU07MENBQUMsQ0FBbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszRixDQUFDO0FBRUQsaUVBQWU3QixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXV0aC9sb2dpbi5qcz8yNzlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IEdvb2dsZUxvZ2luIH0gZnJvbSAncmVhY3QtZ29vZ2xlLWxvZ2luJztcbmltcG9ydCBMb2FkaW5nQmFyIGZyb20gJ3JlYWN0LXRvcC1sb2FkaW5nLWJhcidcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnXG5pbXBvcnQgJ2Jvb3RzdHJhcC1pY29ucy9mb250L2Jvb3RzdHJhcC1pY29ucy5jc3MnXG5cbmZ1bmN0aW9uIExvZ2luKCkge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIGNvbnN0IGdvdG9Ib21lID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiXG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2VHb29nbGUgPSAocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIGF1dGhlbnRpY2F0ZShyZXNwb25zZSlcbiAgICAgIGNvbXBsZXRlTG9hZGluZ0JhcigpO1xuICAgIH1cblxuICAgIGNvbnN0IExvYWRGaW5pc2hlZCA9ICgpID0+IHtcbiAgICAgICAgY29tcGxldGVMb2FkaW5nQmFyKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRMb2FkaW5nQmFyID0gKCkgPT4ge1xuICAgICAgICByZWYuY3VycmVudC5jb250aW51b3VzU3RhcnQoKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlTG9hZGluZ0JhciA9ICgpID0+IHtcbiAgICAgICAgcmVmLmN1cnJlbnQuY29tcGxldGUoKVxuICAgIH1cblxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBkb2N1bWVudCB0aXRsZSB1c2luZyB0aGUgYnJvd3NlciBBUElcbiAgICAgICAgc3RhcnRMb2FkaW5nQmFyKClcbiAgICAgIH0pO1xuXG4gICAgLyoqICBBdXRoZW50aWNhdGUgdXNpbmcgZ29vZ2xlIGFuZCBtb25nb2RiICAqKi9cbiAgICBjb25zdCBhdXRoZW50aWNhdGUgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXJzJywgZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEuX2lkKVxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcIl9pZFwiLHJlc3BvbnNlLmRhdGEuZGF0YS5faWQpO1xuICAgICAgZ290b0hvbWUoKTtcbiAgICB9ICBcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiLi8uLi8uLi9pbWFnZXMvSU1HXzQ4NzAuUE5HXCIgLz5cbiAgICAgICAgICAgICAgICA8dGl0bGU+VGhlIFNpZ21hIHwgTG9naW48L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiLi8uLi8uLi9jc3MvY29tbW9uLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgIDxMb2FkaW5nQmFyIGhlaWdodD17NX0gY29sb3I9XCIjNGQ2MWZjXCIgcmVmPXtyZWZ9IC8+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdvb2dsZUxvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJZD1cIjI1OTA4MzkwNTQ3OC05dnMzY2ltZGc4bjFrdHJkbGE2Y3U1aWF2cDM4NzlxZC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25UZXh0PVwiTG9naW4gdXNpbmcgR29vZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlR29vZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29va2llUG9saWN5PXsnc2luZ2xlX2hvc3Rfb3JpZ2luJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2lnbmVkSW49e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkF1dG9Mb2FkRmluaXNoZWQ9e0xvYWRGaW5pc2hlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPkNsaWNrIG9uIHRoZSBidXR0b24gYWJvdmUgdG8gbG9naW4uPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luIl0sIm5hbWVzIjpbIkhlYWQiLCJHb29nbGVMb2dpbiIsIkxvYWRpbmdCYXIiLCJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJMb2dpbiIsInJlZiIsImdvdG9Ib21lIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicmVzcG9uc2VHb29nbGUiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJhdXRoZW50aWNhdGUiLCJjb21wbGV0ZUxvYWRpbmdCYXIiLCJMb2FkRmluaXNoZWQiLCJzdGFydExvYWRpbmdCYXIiLCJjdXJyZW50IiwiY29udGludW91c1N0YXJ0IiwiY29tcGxldGUiLCJkYXRhIiwicG9zdCIsIl9pZCIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsImRpdiIsImxpbmsiLCJyZWwiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImNsYXNzTmFtZSIsImhlaWdodCIsImNvbG9yIiwiY2xpZW50SWQiLCJidXR0b25UZXh0Iiwib25TdWNjZXNzIiwib25GYWlsdXJlIiwiY29va2llUG9saWN5IiwiaXNTaWduZWRJbiIsIm9uQXV0b0xvYWRGaW5pc2hlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/login.js\n");

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