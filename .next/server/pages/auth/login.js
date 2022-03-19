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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-login */ \"react-google-login\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-top-loading-bar */ \"react-top-loading-bar\");\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ \"./node_modules/bootstrap-icons/font/bootstrap-icons.css\");\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction Login() {\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const gotoHome = ()=>{\n        window.location.href = \"/\";\n    };\n    const responseGoogle = (response)=>{\n        console.log(response);\n        authenticate(response);\n        completeLoadingBar();\n    };\n    const LoadFinished = ()=>{\n        completeLoadingBar();\n    };\n    const startLoadingBar = ()=>{\n        ref.current.continuousStart();\n    };\n    const completeLoadingBar = ()=>{\n        ref.current.complete();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // Update the document title using the browser API\n        startLoadingBar();\n    });\n    /**  Authenticate using google and mongodb  **/ const authenticate = async (data)=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_5___default().post('/api/users', data);\n        console.log(response.data.data._id);\n        sessionStorage.setItem(\"_id\", response.data.data._id);\n        gotoHome();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"./../../images/IMG_4870.PNG\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"The Sigma | Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"./../../css/common.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fluid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        height: 5,\n                        color: \"#4d61fc\",\n                        ref: ref\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 57,\n                        columnNumber: 16\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_google_login__WEBPACK_IMPORTED_MODULE_2__.GoogleLogin, {\n                                clientId: \"259083905478-9vs3cimdg8n1ktrdla6cu5iavp3879qd.apps.googleusercontent.com\",\n                                buttonText: \"Login using Google\",\n                                onSuccess: responseGoogle,\n                                onFailure: responseGoogle,\n                                cookiePolicy: 'single_host_origin',\n                                isSignedIn: true,\n                                onAutoLoadFinished: LoadFinished\n                            }, void 0, false, {\n                                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                                lineNumber: 59,\n                                columnNumber: 35\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5\",\n                                children: \"Click on the button above to login.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                                lineNumber: 68,\n                                columnNumber: 35\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 58,\n                        columnNumber: 16\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL2xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNvQjtBQUNGO0FBQ1c7QUFDaEM7QUFDZ0I7QUFDUTtTQUV4Q1EsS0FBSyxHQUFHLENBQUM7SUFDZCxLQUFLLENBQUNDLEdBQUcsR0FBR0wsNkNBQU0sQ0FBQyxJQUFJO0lBRXZCLEtBQUssQ0FBQ00sUUFBUSxPQUFTLENBQUM7UUFDcEJDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsQ0FBRztJQUM5QixDQUFDO0lBRUQsS0FBSyxDQUFDQyxjQUFjLElBQUlDLFFBQVEsR0FBSyxDQUFDO1FBQ3BDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUTtRQUNwQkcsWUFBWSxDQUFDSCxRQUFRO1FBQ3JCSSxrQkFBa0I7SUFDcEIsQ0FBQztJQUVELEtBQUssQ0FBQ0MsWUFBWSxPQUFTLENBQUM7UUFDeEJELGtCQUFrQjtJQUN0QixDQUFDO0lBRUQsS0FBSyxDQUFDRSxlQUFlLE9BQVMsQ0FBQztRQUMzQlosR0FBRyxDQUFDYSxPQUFPLENBQUNDLGVBQWU7SUFDL0IsQ0FBQztJQUVELEtBQUssQ0FBQ0osa0JBQWtCLE9BQVMsQ0FBQztRQUM5QlYsR0FBRyxDQUFDYSxPQUFPLENBQUNFLFFBQVE7SUFDeEIsQ0FBQztJQUVDbEIsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsRUFBa0Q7UUFDbERlLGVBQWU7SUFDakIsQ0FBQztJQUVILEVBQStDLDhDQUMvQyxLQUFLLENBQUNILFlBQVksVUFBVU8sSUFBSSxHQUFLLENBQUM7UUFDcEMsS0FBSyxDQUFDVixRQUFRLEdBQUcsS0FBSyxDQUFDUixpREFBVSxDQUFDLENBQVksYUFBRWtCLElBQUk7UUFDcERULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRLENBQUNVLElBQUksQ0FBQ0EsSUFBSSxDQUFDRSxHQUFHO1FBQ2xDQyxjQUFjLENBQUNDLE9BQU8sQ0FBQyxDQUFLLE1BQUNkLFFBQVEsQ0FBQ1UsSUFBSSxDQUFDQSxJQUFJLENBQUNFLEdBQUc7UUFDbkRqQixRQUFRO0lBQ1YsQ0FBQztJQUdELE1BQU0sNkVBQ0RvQixDQUFHOzt3RkFDQzlCLGtEQUFJOztnR0FDQStCLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFNO3dCQUFDbkIsSUFBSSxFQUFDLENBQTZCOzs7Ozs7Z0dBQ2xEb0IsQ0FBSztrQ0FBQyxDQUFpQjs7Ozs7O2dHQUN2QkMsQ0FBSTt3QkFBQ0MsSUFBSSxFQUFDLENBQVU7d0JBQUNDLE9BQU8sRUFBQyxDQUF1Qzs7Ozs7O2dHQUNwRUwsQ0FBSTt3QkFBQ2xCLElBQUksRUFBQyxDQUF3Qjt3QkFBQ21CLEdBQUcsRUFBQyxDQUFZOzs7Ozs7Ozs7Ozs7d0ZBRXZERixDQUFHO2dCQUFDTyxTQUFTLEVBQUMsQ0FBaUI7O2dHQUM1Qm5DLDhEQUFVO3dCQUFDb0MsTUFBTSxFQUFFLENBQUM7d0JBQUVDLEtBQUssRUFBQyxDQUFTO3dCQUFDOUIsR0FBRyxFQUFFQSxHQUFHOzs7Ozs7Z0dBQzlDcUIsQ0FBRzt3QkFBQ08sU0FBUyxFQUFDLENBQWE7O3dHQUNScEMsMkRBQVc7Z0NBQ1Z1QyxRQUFRLEVBQUMsQ0FBMEU7Z0NBQ25GQyxVQUFVLEVBQUMsQ0FBb0I7Z0NBQy9CQyxTQUFTLEVBQUU1QixjQUFjO2dDQUN6QjZCLFNBQVMsRUFBRTdCLGNBQWM7Z0NBQ3pCOEIsWUFBWSxFQUFFLENBQW9CO2dDQUNsQ0MsVUFBVSxFQUFFLElBQUk7Z0NBQ2hCQyxrQkFBa0IsRUFBRTFCLFlBQVk7Ozs7Ozt3R0FFakNVLENBQUc7Z0NBQUNPLFNBQVMsRUFBQyxDQUFNOzBDQUFDLENBQW1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0YsQ0FBQztBQUVELGlFQUFlN0IsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2F1dGgvbG9naW4uanM/Mjc5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XG5pbXBvcnQgTG9hZGluZ0JhciBmcm9tICdyZWFjdC10b3AtbG9hZGluZy1iYXInXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xuaW1wb3J0ICdib290c3RyYXAtaWNvbnMvZm9udC9ib290c3RyYXAtaWNvbnMuY3NzJ1xuXG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBnb3RvSG9tZSA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIlxuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlR29vZ2xlID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICBhdXRoZW50aWNhdGUocmVzcG9uc2UpXG4gICAgICBjb21wbGV0ZUxvYWRpbmdCYXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCBMb2FkRmluaXNoZWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbXBsZXRlTG9hZGluZ0JhcigpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0TG9hZGluZ0JhciA9ICgpID0+IHtcbiAgICAgICAgcmVmLmN1cnJlbnQuY29udGludW91c1N0YXJ0KClcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZUxvYWRpbmdCYXIgPSAoKSA9PiB7XG4gICAgICAgIHJlZi5jdXJyZW50LmNvbXBsZXRlKClcbiAgICB9XG5cbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgZG9jdW1lbnQgdGl0bGUgdXNpbmcgdGhlIGJyb3dzZXIgQVBJXG4gICAgICAgIHN0YXJ0TG9hZGluZ0JhcigpXG4gICAgICB9KTtcblxuICAgIC8qKiAgQXV0aGVudGljYXRlIHVzaW5nIGdvb2dsZSBhbmQgbW9uZ29kYiAgKiovXG4gICAgY29uc3QgYXV0aGVudGljYXRlID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS91c2VycycsIGRhdGEpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhLl9pZClcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJfaWRcIixyZXNwb25zZS5kYXRhLmRhdGEuX2lkKTtcbiAgICAgIGdvdG9Ib21lKCk7XG4gICAgfSAgXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi4vLi4vLi4vaW1hZ2VzL0lNR180ODcwLlBOR1wiIC8+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlRoZSBTaWdtYSB8IExvZ2luPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi4vLi4vLi4vY3NzL2NvbW1vbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICA8TG9hZGluZ0JhciBoZWlnaHQ9ezV9IGNvbG9yPVwiIzRkNjFmY1wiIHJlZj17cmVmfSAvPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHb29nbGVMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SWQ9XCIyNTkwODM5MDU0NzgtOXZzM2NpbWRnOG4xa3RyZGxhNmN1NWlhdnAzODc5cWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIkxvZ2luIHVzaW5nIEdvb2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlR29vZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NpZ25lZEluPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BdXRvTG9hZEZpbmlzaGVkPXtMb2FkRmluaXNoZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5DbGljayBvbiB0aGUgYnV0dG9uIGFib3ZlIHRvIGxvZ2luLjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbiJdLCJuYW1lcyI6WyJIZWFkIiwiR29vZ2xlTG9naW4iLCJMb2FkaW5nQmFyIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiTG9naW4iLCJyZWYiLCJnb3RvSG9tZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInJlc3BvbnNlR29vZ2xlIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiYXV0aGVudGljYXRlIiwiY29tcGxldGVMb2FkaW5nQmFyIiwiTG9hZEZpbmlzaGVkIiwic3RhcnRMb2FkaW5nQmFyIiwiY3VycmVudCIsImNvbnRpbnVvdXNTdGFydCIsImNvbXBsZXRlIiwiZGF0YSIsInBvc3QiLCJfaWQiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJkaXYiLCJsaW5rIiwicmVsIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJjb2xvciIsImNsaWVudElkIiwiYnV0dG9uVGV4dCIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsImNvb2tpZVBvbGljeSIsImlzU2lnbmVkSW4iLCJvbkF1dG9Mb2FkRmluaXNoZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/login.js\n");

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