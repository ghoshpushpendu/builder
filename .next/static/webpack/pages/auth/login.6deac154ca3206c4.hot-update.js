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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pushpendughosh_Documents_personal_thesigma_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pushpendughosh_Documents_personal_thesigma_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pushpendughosh_Documents_personal_thesigma_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-top-loading-bar */ \"./node_modules/react-top-loading-bar/dist/index.modern.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ \"./node_modules/bootstrap-icons/font/bootstrap-icons.css\");\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Login() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    var gotoHome = function() {\n        window.location.href = \"/\";\n    };\n    var responseGoogle = function(response) {\n        console.log(response);\n        if (!response.error) {\n            authenticate(response);\n        }\n        completeLoadingBar();\n    };\n    var LoadFinished = function() {\n        completeLoadingBar();\n    };\n    var startLoadingBar = function() {\n        ref.current.continuousStart();\n    };\n    var completeLoadingBar = function() {\n        ref.current.complete();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        // Update the document title using the browser API\n        startLoadingBar();\n        console.log(sessionStorage.getItem(\"_id\"));\n        if (sessionStorage.getItem(\"_id\") != undefined && sessionStorage.getItem(\"_id\") != null) {\n            gotoHome();\n        }\n    });\n    /**  Authenticate using google and mongodb  **/ var authenticate = function() {\n        var _ref = _asyncToGenerator(_Users_pushpendughosh_Documents_personal_thesigma_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {\n            var response;\n            return _Users_pushpendughosh_Documents_personal_thesigma_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_6___default().post('/api/users', data);\n                    case 2:\n                        response = _ctx.sent;\n                        console.log(response.data.data._id);\n                        sessionStorage.setItem(\"_id\", response.data.data._id);\n                        gotoHome();\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function authenticate(data) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"./../../images/IMG_4870.PNG\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"The Sigma | Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        href: \"./../../css/common.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container-fluid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        height: 5,\n                        color: \"#4d61fc\",\n                        ref: ref\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 64,\n                        columnNumber: 16\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"text-center mt-5 loginButtonHolder\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_google_login__WEBPACK_IMPORTED_MODULE_3__.GoogleLogin, {\n                                clientId: \"259083905478-9vs3cimdg8n1ktrdla6cu5iavp3879qd.apps.googleusercontent.com\",\n                                buttonText: \"Login using Google\",\n                                onSuccess: responseGoogle,\n                                onFailure: responseGoogle,\n                                cookiePolicy: 'single_host_origin',\n                                isSignedIn: true,\n                                onAutoLoadFinished: LoadFinished\n                            }, void 0, false, {\n                                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                                lineNumber: 66,\n                                columnNumber: 35\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"mt-5\",\n                                children: \"Click on the button above to login.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                                lineNumber: 75,\n                                columnNumber: 35\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                        lineNumber: 65,\n                        columnNumber: 16\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, this));\n}\n_s(Login, \"8uVE59eA/r6b92xF80p7sH8rXLk=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEU7Z0NBQ25GQyxVQUFVLEVBQUMsQ0FBb0I7Z0NBQy9CQyxTQUFTLEVBQUUvQixjQUFjO2dDQUN6QmdDLFNBQVMsRUFBRWhDLGNBQWM7Z0NBQ3pCaUMsWUFBWSxFQUFFLENBQW9CO2dDQUNsQ0MsVUFBVSxFQUFFLElBQUk7Z0NBQ2hCQyxrQkFBa0IsRUFBRTVCLFlBQVk7Ozs7Ozt3R0FFakNZLENBQUc7Z0NBQUNPLFNBQVMsRUFBQyxDQUFNOzBDQUFDLENBQW1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0YsQ0FBQztHQXZFUWhDLEtBQUs7S0FBTEEsS0FBSztBQXlFZCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoL2xvZ2luLmpzPzI3OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgR29vZ2xlTG9naW4gfSBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nO1xuaW1wb3J0IExvYWRpbmdCYXIgZnJvbSAncmVhY3QtdG9wLWxvYWRpbmctYmFyJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZix1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcbmltcG9ydCAnYm9vdHN0cmFwLWljb25zL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzcydcblxuZnVuY3Rpb24gTG9naW4oKSB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgZ290b0hvbWUgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCJcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZUdvb2dsZSA9IChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgaWYoIXJlc3BvbnNlLmVycm9yKXtcbiAgICAgICAgICBhdXRoZW50aWNhdGUocmVzcG9uc2UpXG4gICAgICB9XG4gICAgICBjb21wbGV0ZUxvYWRpbmdCYXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCBMb2FkRmluaXNoZWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbXBsZXRlTG9hZGluZ0JhcigpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0TG9hZGluZ0JhciA9ICgpID0+IHtcbiAgICAgICAgcmVmLmN1cnJlbnQuY29udGludW91c1N0YXJ0KClcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZUxvYWRpbmdCYXIgPSAoKSA9PiB7XG4gICAgICAgIHJlZi5jdXJyZW50LmNvbXBsZXRlKClcbiAgICB9XG5cbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgZG9jdW1lbnQgdGl0bGUgdXNpbmcgdGhlIGJyb3dzZXIgQVBJXG4gICAgICAgICBzdGFydExvYWRpbmdCYXIoKVxuICAgICAgICAgY29uc29sZS5sb2coc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcIl9pZFwiKSkgXG4gICAgICAgICBpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiX2lkXCIpICE9IHVuZGVmaW5lZCAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiX2lkXCIpICE9IG51bGwpe1xuICAgICAgICAgICBcbiAgICAgICAgICAgZ290b0hvbWUoKVxuICAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAvKiogIEF1dGhlbnRpY2F0ZSB1c2luZyBnb29nbGUgYW5kIG1vbmdvZGIgICoqL1xuICAgIGNvbnN0IGF1dGhlbnRpY2F0ZSA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvdXNlcnMnLCBkYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZGF0YS5faWQpXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiX2lkXCIscmVzcG9uc2UuZGF0YS5kYXRhLl9pZCk7XG4gICAgICBnb3RvSG9tZSgpO1xuICAgIH0gIFxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIuLy4uLy4uL2ltYWdlcy9JTUdfNDg3MC5QTkdcIiAvPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5UaGUgU2lnbWEgfCBMb2dpbjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIuLy4uLy4uL2Nzcy9jb21tb24uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgPExvYWRpbmdCYXIgaGVpZ2h0PXs1fSBjb2xvcj1cIiM0ZDYxZmNcIiByZWY9e3JlZn0gLz5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNSBsb2dpbkJ1dHRvbkhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHb29nbGVMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SWQ9XCIyNTkwODM5MDU0NzgtOXZzM2NpbWRnOG4xa3RyZGxhNmN1NWlhdnAzODc5cWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIkxvZ2luIHVzaW5nIEdvb2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlR29vZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NpZ25lZEluPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BdXRvTG9hZEZpbmlzaGVkPXtMb2FkRmluaXNoZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5DbGljayBvbiB0aGUgYnV0dG9uIGFib3ZlIHRvIGxvZ2luLjwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbiJdLCJuYW1lcyI6WyJIZWFkIiwiR29vZ2xlTG9naW4iLCJMb2FkaW5nQmFyIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiTG9naW4iLCJyZWYiLCJnb3RvSG9tZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInJlc3BvbnNlR29vZ2xlIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJhdXRoZW50aWNhdGUiLCJjb21wbGV0ZUxvYWRpbmdCYXIiLCJMb2FkRmluaXNoZWQiLCJzdGFydExvYWRpbmdCYXIiLCJjdXJyZW50IiwiY29udGludW91c1N0YXJ0IiwiY29tcGxldGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJkYXRhIiwicG9zdCIsIl9pZCIsInNldEl0ZW0iLCJkaXYiLCJsaW5rIiwicmVsIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJjb2xvciIsImNsaWVudElkIiwiYnV0dG9uVGV4dCIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsImNvb2tpZVBvbGljeSIsImlzU2lnbmVkSW4iLCJvbkF1dG9Mb2FkRmluaXNoZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/login.js\n");

/***/ })

});