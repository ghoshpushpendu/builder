"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/header.js":
/*!*************************!*\
  !*** ./pages/header.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pushpendughosh_Documents_personal_thesigma_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pushpendughosh_Documents_personal_thesigma_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pushpendughosh_Documents_personal_thesigma_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Header(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), user = ref[0], setUser = ref[1];\n    var gotoHomePage = function() {\n        window.location.href = \"/\";\n    };\n    var gotoLoginPage = function() {\n        window.location.href = \"/auth/login\";\n    };\n    var getProfile = function() {\n        var _ref = _asyncToGenerator(_Users_pushpendughosh_Documents_personal_thesigma_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_id) {\n            var response;\n            return _Users_pushpendughosh_Documents_personal_thesigma_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get('/api/users?_id=' + _id);\n                    case 2:\n                        response = _ctx.sent;\n                        console.log(response.data.data);\n                        setUser(response.data.data ? response.data.data : null);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getProfile(_id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        // Update the document title using the browser API\n        if (localStorage.getItem(\"_id\") != undefined && localStorage.getItem(\"_id\") != null) {\n            getProfile(localStorage.getItem(\"_id\"));\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n        className: \"navbar header ps-3 pe-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"navbar-brand brand float-start\",\n                onClick: function() {\n                    gotoHomePage();\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: \"../images/IMG_4867.PNG\",\n                        width: \"40\",\n                        height: \"40\",\n                        className: \"d-inline-block align-top logo\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/header.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: \"mt-2\",\n                        children: props.title ? props.title : \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/header.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/header.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: [\n                            \"The Sigma | \",\n                            props.title ? props.title : \"Everything Online\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/header.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/header.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        href: \"./css/common.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/header.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"./images/IMG_4870.PNG\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/header.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/header.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"float-end text-center\",\n                role: \"button\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: user.imageUrl,\n                        alt: \"Avatar\",\n                        className: \"avatar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/header.js\",\n                        lineNumber: 45,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: user.name\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/header.js\",\n                        lineNumber: 46,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/header.js\",\n                lineNumber: 44,\n                columnNumber: 21\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"float-end text-center\",\n                role: \"button\",\n                onClick: function() {\n                    gotoLoginPage();\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: \"https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg\",\n                        alt: \"Avatar\",\n                        className: \"avatar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/header.js\",\n                        lineNumber: 50,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: \"Please Login ?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/header.js\",\n                        lineNumber: 51,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/header.js\",\n                lineNumber: 49,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/header.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this));\n}\n_s(Header, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9oZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDSDtBQUNnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUVoRE0sTUFBTSxDQUFDQyxLQUFLLEVBQUUsQ0FBQzs7SUFDcEIsR0FBSyxDQUFrQkgsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBN0JJLElBQUksR0FBWUosR0FBYyxLQUF6QkssT0FBTyxHQUFJTCxHQUFjO0lBRXJDLEdBQUssQ0FBQ00sWUFBWSxHQUFHLFFBQ3pCLEdBRCtCLENBQUM7UUFDeEJDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsQ0FBRztJQUM5QixDQUFDO0lBRUQsR0FBSyxDQUFDQyxhQUFhLEdBQUcsUUFDMUIsR0FEZ0MsQ0FBQztRQUMzQkgsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBRyxDQUFhO0lBQ3RDLENBQUM7SUFFRCxHQUFLLENBQUNFLFVBQVU7a01BQUcsUUFBUSxTQUFEQyxHQUFHLEVBQUssQ0FBQztnQkFDMUJDLFFBQVE7Ozs7OytCQUFTaEIsZ0RBQVMsQ0FBQyxDQUFpQixtQkFBQ2UsR0FBRzs7d0JBQWhEQyxRQUFRO3dCQUNkRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsUUFBUSxDQUFDSSxJQUFJLENBQUNBLElBQUk7d0JBQzlCWixPQUFPLENBQUNRLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDQSxJQUFJLEdBQUNKLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDQSxJQUFJLEdBQUMsSUFBSTs7Ozs7O1FBQ3JELENBQUM7d0JBSktOLFVBQVUsQ0FBVUMsR0FBRzs7OztJQU83QlgsZ0RBQVMsQ0FBQyxRQUNkLEdBRG9CLENBQUM7UUFDZixFQUFrRDtRQUNsRCxFQUFFLEVBQUNpQixZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFLLFNBQUtDLFNBQVMsSUFBSUYsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBSyxTQUFLLElBQUksRUFBQyxDQUFDO1lBQ2xGUixVQUFVLENBQUNPLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQUs7UUFDdkMsQ0FBQztJQUNILENBQUMsRUFBQyxDQUFDLENBQUM7SUFFSixNQUFNLDZFQUNERSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUF5Qjs7d0ZBQ25DQyxDQUFHO2dCQUFDRCxTQUFTLEVBQUMsQ0FBZ0M7Z0JBQUNFLE9BQU8sRUFBRSxRQUFRbEIsR0FBRixDQUFDO29CQUFDQSxZQUFZO2dCQUFHLENBQUM7O2dHQUM1RW1CLENBQUc7d0JBQUNDLEdBQUcsRUFBQyxDQUF3Qjt3QkFBQ0MsS0FBSyxFQUFDLENBQUk7d0JBQUNDLE1BQU0sRUFBQyxDQUFJO3dCQUFDTixTQUFTLEVBQUMsQ0FBK0I7d0JBQUNPLEdBQUcsRUFBQyxDQUFFOzs7Ozs7Z0dBQ3hHQyxDQUFJO3dCQUFDUixTQUFTLEVBQUMsQ0FBTTtrQ0FBRW5CLEtBQUssQ0FBQzRCLEtBQUssR0FBRzVCLEtBQUssQ0FBQzRCLEtBQUssR0FBRyxDQUFFOzs7Ozs7Ozs7Ozs7d0ZBRXpEbkMsa0RBQUk7O2dHQUNBbUMsQ0FBSzs7NEJBQUMsQ0FBWTs0QkFBQzVCLEtBQUssQ0FBQzRCLEtBQUssR0FBRzVCLEtBQUssQ0FBQzRCLEtBQUssR0FBRyxDQUFtQjs7Ozs7OztnR0FDbEVDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFVO3dCQUFDQyxPQUFPLEVBQUMsQ0FBdUM7Ozs7OztnR0FDcEVDLENBQUk7d0JBQUMxQixJQUFJLEVBQUMsQ0FBa0I7d0JBQUMyQixHQUFHLEVBQUMsQ0FBWTs7Ozs7O2dHQUM3Q0QsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUMzQixJQUFJLEVBQUMsQ0FBdUI7Ozs7Ozs7Ozs7OztZQUc3Q0wsSUFBSSwrRUFDQ21CLENBQUc7Z0JBQUNELFNBQVMsRUFBQyxDQUF1QjtnQkFBQ2UsSUFBSSxFQUFDLENBQVE7O2dHQUMvQ1osQ0FBRzt3QkFBQ0MsR0FBRyxFQUFFdEIsSUFBSSxDQUFDa0MsUUFBUTt3QkFBRVQsR0FBRyxFQUFDLENBQVE7d0JBQUNQLFNBQVMsRUFBQyxDQUFROzs7Ozs7Z0dBQ3ZEQyxDQUFHO2tDQUFFbkIsSUFBSSxDQUFDNkIsSUFBSTs7Ozs7Ozs7Ozs7bUdBR2xCVixDQUFHO2dCQUFDRCxTQUFTLEVBQUMsQ0FBdUI7Z0JBQUNlLElBQUksRUFBQyxDQUFRO2dCQUFDYixPQUFPLEVBQUUsUUFBUSxHQUFKLENBQUNkO29CQUFBQSxhQUFhO2dCQUFFLENBQUM7O2dHQUM5RWUsQ0FBRzt3QkFBQ0MsR0FBRyxFQUFDLENBQXFHO3dCQUFDRyxHQUFHLEVBQUMsQ0FBUTt3QkFBQ1AsU0FBUyxFQUFDLENBQVE7Ozs7OztnR0FDN0lDLENBQUc7a0NBQUMsQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNDLENBQUM7R0FwRFFyQixNQUFNO0tBQU5BLE1BQU07QUFzRGYsK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVhZGVyLmpzP2Y5YjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpIFxuICAgXG4gICAgY29uc3QgZ290b0hvbWVQYWdlID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiXG4gICAgfVxuXG4gICAgY29uc3QgZ290b0xvZ2luUGFnZSA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYXV0aC9sb2dpblwiICAgXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvZmlsZSA9IGFzeW5jIChfaWQpID0+IHtcbiAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS91c2Vycz9faWQ9JytfaWQpO1xuICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZGF0YSlcbiAgICAgICBzZXRVc2VyKHJlc3BvbnNlLmRhdGEuZGF0YT9yZXNwb25zZS5kYXRhLmRhdGE6bnVsbClcbiAgICB9XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAvLyBVcGRhdGUgdGhlIGRvY3VtZW50IHRpdGxlIHVzaW5nIHRoZSBicm93c2VyIEFQSVxuICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfaWRcIikgIT0gdW5kZWZpbmVkICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX2lkXCIpICE9IG51bGwpe1xuICAgICAgICBnZXRQcm9maWxlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX2lkXCIpKVxuICAgICAgfVxuICAgIH0sW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgaGVhZGVyIHBzLTMgcGUtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgYnJhbmQgZmxvYXQtc3RhcnRcIiBvbkNsaWNrPXsoKSA9PiB7IGdvdG9Ib21lUGFnZSgpIH19PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL0lNR180ODY3LlBOR1wiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcCBsb2dvXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC0yXCI+e3Byb3BzLnRpdGxlID8gcHJvcHMudGl0bGUgOiBcIlwifTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlRoZSBTaWdtYSB8IHtwcm9wcy50aXRsZSA/IHByb3BzLnRpdGxlIDogXCJFdmVyeXRoaW5nIE9ubGluZVwifTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIuL2Nzcy9jb21tb24uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIuL2ltYWdlcy9JTUdfNDg3MC5QTkdcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVzZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtZW5kIHRleHQtY2VudGVyXCIgcm9sZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuaW1hZ2VVcmx9IGFsdD1cIkF2YXRhclwiIGNsYXNzTmFtZT1cImF2YXRhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3VzZXIubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1lbmQgdGV4dC1jZW50ZXJcIiByb2xlPVwiYnV0dG9uXCIgb25DbGljaz17KCk9Pntnb3RvTG9naW5QYWdlKCl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9kMTFhNnRya2dtdW1zYi5jbG91ZGZyb250Lm5ldC9vcmlnaW5hbC8zWC9kLzgvZDhiNWQwYTczODI5NTM0NWViZDg5MzRiODU5ZmExZmNhMWM4YzZhZC5qcGVnXCIgYWx0PVwiQXZhdGFyXCIgY2xhc3NOYW1lPVwiYXZhdGFyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5QbGVhc2UgTG9naW4gPzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvbmF2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sIm5hbWVzIjpbIkhlYWQiLCJheGlvcyIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJwcm9wcyIsInVzZXIiLCJzZXRVc2VyIiwiZ290b0hvbWVQYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZ290b0xvZ2luUGFnZSIsImdldFByb2ZpbGUiLCJfaWQiLCJyZXNwb25zZSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNwYW4iLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJyb2xlIiwiaW1hZ2VVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/header.js\n");

/***/ })

});