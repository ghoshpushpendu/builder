"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/login",{

/***/ "./pages/auth/login.js":
/*!*****************************!*\
  !*** ./pages/auth/login.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pushpendughosh_Documents_personal_thesigma_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pushpendughosh_Documents_personal_thesigma_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pushpendughosh_Documents_personal_thesigma_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-top-loading-bar */ \"./node_modules/react-top-loading-bar/dist/index.modern.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ \"./node_modules/bootstrap-icons/font/bootstrap-icons.css\");\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Login() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    var gotoHome = function() {\n        window.location.href = \"/\";\n    };\n    var responseGoogle = function(response) {\n        console.log(response);\n        if (!response.error) {\n            authenticate(response);\n        }\n        completeLoadingBar();\n    };\n    var LoadFinished = function() {\n        completeLoadingBar();\n    };\n    var startLoadingBar = function() {\n        ref.current.continuousStart();\n    };\n    var completeLoadingBar = function() {\n        ref.current.complete();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        // Update the document title using the browser API\n        startLoadingBar();\n        console.log(localStorage.getItem(\"_id\") === null, \"ID\");\n        if (localStorage.getItem(\"_id\") != undefined && localStorage.getItem(\"_id\") != null) {\n            gotoHome();\n        }\n    });\n    /**  Authenticate using google and mongodb  **/ var authenticate = function() {\n        var _ref = _asyncToGenerator(_Users_pushpendughosh_Documents_personal_thesigma_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {\n            var response;\n            return _Users_pushpendughosh_Documents_personal_thesigma_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_6___default().post('/api/users', data);\n                    case 2:\n                        response = _ctx.sent;\n                        console.log(response.data.data._id);\n                        localStorage.setItem(\"_id\", response.data.data._id);\n                        gotoHome();\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function authenticate(data) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"./../../images/IMG_4870.PNG\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"The Sigma | Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        href: \"./../../css/common.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container-fluid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        height: 5,\n                        color: \"#4d61fc\",\n                        ref: ref\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 63,\n                        columnNumber: 16\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"text-center mt-5 loginButtonHolder\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_google_login__WEBPACK_IMPORTED_MODULE_3__.GoogleLogin, {\n                                clientId: \"259083905478-9vs3cimdg8n1ktrdla6cu5iavp3879qd.apps.googleusercontent.com\",\n                                buttonText: \"Login using Google\",\n                                onSuccess: responseGoogle,\n                                onFailure: responseGoogle,\n                                cookiePolicy: 'single_host_origin',\n                                isSignedIn: true,\n                                onAutoLoadFinished: LoadFinished\n                            }, void 0, false, {\n                                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                                lineNumber: 65,\n                                columnNumber: 35\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"mt-5\",\n                                children: \"Click on the button above to login.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                                lineNumber: 74,\n                                columnNumber: 35\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 64,\n                        columnNumber: 16\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this));\n}\n_s(Login, \"8uVE59eA/r6b92xF80p7sH8rXLk=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDVjBDLFFBQVEsRUFBQyxDQUEwRTtnQ0FDbkZDLFVBQVUsRUFBQyxDQUFvQjtnQ0FDL0JDLFNBQVMsRUFBRS9CLGNBQWM7Z0NBQ3pCZ0MsU0FBUyxFQUFFaEMsY0FBYztnQ0FDekJpQyxZQUFZLEVBQUUsQ0FBb0I7Z0NBQ2xDQyxVQUFVLEVBQUUsSUFBSTtnQ0FDaEJDLGtCQUFrQixFQUFFNUIsWUFBWTs7Ozs7O3dHQUVqQ1ksQ0FBRztnQ0FBQ08sU0FBUyxFQUFDLENBQU07MENBQUMsQ0FBbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszRixDQUFDO0dBdEVRaEMsS0FBSztLQUFMQSxLQUFLO0FBd0VkLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2F1dGgvbG9naW4uanM/Mjc5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XG5pbXBvcnQgTG9hZGluZ0JhciBmcm9tICdyZWFjdC10b3AtbG9hZGluZy1iYXInXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xuaW1wb3J0ICdib290c3RyYXAtaWNvbnMvZm9udC9ib290c3RyYXAtaWNvbnMuY3NzJ1xuXG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBnb3RvSG9tZSA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIlxuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlR29vZ2xlID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICBpZighcmVzcG9uc2UuZXJyb3Ipe1xuICAgICAgICAgIGF1dGhlbnRpY2F0ZShyZXNwb25zZSlcbiAgICAgIH1cbiAgICAgIGNvbXBsZXRlTG9hZGluZ0JhcigpO1xuICAgIH1cblxuICAgIGNvbnN0IExvYWRGaW5pc2hlZCA9ICgpID0+IHtcbiAgICAgICAgY29tcGxldGVMb2FkaW5nQmFyKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRMb2FkaW5nQmFyID0gKCkgPT4ge1xuICAgICAgICByZWYuY3VycmVudC5jb250aW51b3VzU3RhcnQoKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlTG9hZGluZ0JhciA9ICgpID0+IHtcbiAgICAgICAgcmVmLmN1cnJlbnQuY29tcGxldGUoKVxuICAgIH1cblxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBkb2N1bWVudCB0aXRsZSB1c2luZyB0aGUgYnJvd3NlciBBUElcbiAgICAgICAgIHN0YXJ0TG9hZGluZ0JhcigpXG4gICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl9pZFwiKSA9PT0gbnVsbCxcIklEXCIpXG4gICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl9pZFwiKSAhPSB1bmRlZmluZWQgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfaWRcIikgIT0gbnVsbCl7XG4gICAgICAgICAgIGdvdG9Ib21lKClcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgLyoqICBBdXRoZW50aWNhdGUgdXNpbmcgZ29vZ2xlIGFuZCBtb25nb2RiICAqKi9cbiAgICBjb25zdCBhdXRoZW50aWNhdGUgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3VzZXJzJywgZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEuX2lkKVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfaWRcIixyZXNwb25zZS5kYXRhLmRhdGEuX2lkKTtcbiAgICAgIGdvdG9Ib21lKCk7XG4gICAgfSAgXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi4vLi4vLi4vaW1hZ2VzL0lNR180ODcwLlBOR1wiIC8+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlRoZSBTaWdtYSB8IExvZ2luPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi4vLi4vLi4vY3NzL2NvbW1vbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICA8TG9hZGluZ0JhciBoZWlnaHQ9ezV9IGNvbG9yPVwiIzRkNjFmY1wiIHJlZj17cmVmfSAvPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC01IGxvZ2luQnV0dG9uSG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdvb2dsZUxvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJZD1cIjI1OTA4MzkwNTQ3OC05dnMzY2ltZGc4bjFrdHJkbGE2Y3U1aWF2cDM4NzlxZC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25UZXh0PVwiTG9naW4gdXNpbmcgR29vZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlR29vZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29va2llUG9saWN5PXsnc2luZ2xlX2hvc3Rfb3JpZ2luJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2lnbmVkSW49e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkF1dG9Mb2FkRmluaXNoZWQ9e0xvYWRGaW5pc2hlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPkNsaWNrIG9uIHRoZSBidXR0b24gYWJvdmUgdG8gbG9naW4uPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luIl0sIm5hbWVzIjpbIkhlYWQiLCJHb29nbGVMb2dpbiIsIkxvYWRpbmdCYXIiLCJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJMb2dpbiIsInJlZiIsImdvdG9Ib21lIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicmVzcG9uc2VHb29nbGUiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImF1dGhlbnRpY2F0ZSIsImNvbXBsZXRlTG9hZGluZ0JhciIsIkxvYWRGaW5pc2hlZCIsInN0YXJ0TG9hZGluZ0JhciIsImN1cnJlbnQiLCJjb250aW51b3VzU3RhcnQiLCJjb21wbGV0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJkYXRhIiwicG9zdCIsIl9pZCIsInNldEl0ZW0iLCJkaXYiLCJsaW5rIiwicmVsIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJjb2xvciIsImNsaWVudElkIiwiYnV0dG9uVGV4dCIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsImNvb2tpZVBvbGljeSIsImlzU2lnbmVkSW4iLCJvbkF1dG9Mb2FkRmluaXNoZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/login.js\n");

/***/ })

});