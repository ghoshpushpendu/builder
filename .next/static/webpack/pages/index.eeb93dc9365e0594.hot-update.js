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

/***/ "./pages/components/dropdown/profileDropdown.js":
/*!******************************************************!*\
  !*** ./pages/components/dropdown/profileDropdown.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction ProfileDropdown(props) {\n    var ref, ref1;\n    var logout = function() {\n        localStorage.clear();\n        window.location.href = \"/\";\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dropstart\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"data-bs-toggle\": \"dropdown\",\n                \"aria-expanded\": \"false\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: props === null || props === void 0 ? void 0 : (ref = props.user) === null || ref === void 0 ? void 0 : ref.imageUrl,\n                        alt: \"Avatar\",\n                        className: \"avatar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/components/dropdown/profileDropdown.js\",\n                        lineNumber: 11,\n                        columnNumber: 14\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: props === null || props === void 0 ? void 0 : (ref1 = props.user) === null || ref1 === void 0 ? void 0 : ref1.name\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/components/dropdown/profileDropdown.js\",\n                        lineNumber: 12,\n                        columnNumber: 14\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/components/dropdown/profileDropdown.js\",\n                lineNumber: 10,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"dropdown-menu\",\n                \"aria-labelledby\": \"dropdownMenuButton1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"dropdown-item\",\n                    onClick: function() {\n                        logout();\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            class: \"bi bi-power\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/components/dropdown/profileDropdown.js\",\n                            lineNumber: 15,\n                            columnNumber: 68\n                        }, this),\n                        \" Logout\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/components/dropdown/profileDropdown.js\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/components/dropdown/profileDropdown.js\",\n                lineNumber: 14,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pushpendughosh/Documents/personal/thesigma/pages/components/dropdown/profileDropdown.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this));\n}\n_c = ProfileDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileDropdown);\nvar _c;\n$RefreshReg$(_c, \"ProfileDropdown\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2Ryb3Bkb3duL3Byb2ZpbGVEcm9wZG93bi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztTQUFTQSxlQUFlLENBQUNDLEtBQUssRUFBRSxDQUFDO1FBVVZBLEdBQVcsRUFDZkEsSUFBVztJQVQxQixHQUFLLENBQUNDLE1BQU0sR0FBRyxRQUNuQixHQUR5QixDQUFDO1FBQ2xCQyxZQUFZLENBQUNDLEtBQUs7UUFDbEJDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsQ0FBRztJQUM5QixDQUFDO0lBRUQsTUFBTSw2RUFDREMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBVzs7d0ZBQ3ZCRCxDQUFHO2dCQUFDRSxDQUFjLGlCQUFDLENBQVU7Z0JBQUNDLENBQWEsZ0JBQUMsQ0FBTzs7Z0dBQ2hEQyxDQUFHO3dCQUFDQyxHQUFHLEVBQUVaLEtBQUssYUFBTEEsS0FBSyxLQUFMQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFKQSxDQUFXLElBQVhBLEdBQVcsR0FBWEEsS0FBSyxDQUFFYSxJQUFJLGNBQVhiLEdBQVcsS0FBWEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLElBQUksQ0FBSkEsQ0FBVyxHQUFYQSxHQUFXLENBQUVjLFFBQVE7d0JBQUVDLEdBQUcsRUFBQyxDQUFRO3dCQUFDUCxTQUFTLEVBQUMsQ0FBUTs7Ozs7O2dHQUMvREQsQ0FBRztrQ0FBRVAsS0FBSyxhQUFMQSxLQUFLLEtBQUxBLElBQUksQ0FBSkEsQ0FBVyxHQUFYQSxJQUFJLENBQUpBLENBQVcsSUFBWEEsSUFBVyxHQUFYQSxLQUFLLENBQUVhLElBQUksY0FBWGIsSUFBVyxLQUFYQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLElBQVcsQ0FBRWdCLElBQUk7Ozs7Ozs7Ozs7Ozt3RkFFekJDLENBQUU7Z0JBQUNULFNBQVMsRUFBQyxDQUFlO2dCQUFDVSxDQUFlLGtCQUFDLENBQXFCO3NHQUNoRUMsQ0FBRTtvQkFBQ1gsU0FBUyxFQUFDLENBQWU7b0JBQUNZLE9BQU8sRUFBRSxRQUFRLEdBQUosQ0FBQ25CO3dCQUFBQSxNQUFNO29CQUFFLENBQUM7O29HQUFHb0IsQ0FBQzs0QkFBQ0MsS0FBSyxFQUFDLENBQWE7Ozs7Ozt3QkFBSyxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJckcsQ0FBQztLQWxCUXZCLGVBQWU7QUFvQnhCLCtEQUFlQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvZHJvcGRvd24vcHJvZmlsZURyb3Bkb3duLmpzPzJiNzgiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gUHJvZmlsZURyb3Bkb3duKHByb3BzKSB7XG5cbiAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wc3RhcnRcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHM/LnVzZXI/LmltYWdlVXJsfSBhbHQ9XCJBdmF0YXJcIiBjbGFzc05hbWU9XCJhdmF0YXJcIi8+XG4gICAgICAgICAgICAgPGRpdj57cHJvcHM/LnVzZXI/Lm5hbWV9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bk1lbnVCdXR0b24xXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpPT57bG9nb3V0KCl9fT48aSBjbGFzcz1cImJpIGJpLXBvd2VyXCI+PC9pPiBMb2dvdXQ8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZURyb3Bkb3duIl0sIm5hbWVzIjpbIlByb2ZpbGVEcm9wZG93biIsInByb3BzIiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhLWJzLXRvZ2dsZSIsImFyaWEtZXhwYW5kZWQiLCJpbWciLCJzcmMiLCJ1c2VyIiwiaW1hZ2VVcmwiLCJhbHQiLCJuYW1lIiwidWwiLCJhcmlhLWxhYmVsbGVkYnkiLCJsaSIsIm9uQ2xpY2siLCJpIiwiY2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/dropdown/profileDropdown.js\n");

/***/ })

});