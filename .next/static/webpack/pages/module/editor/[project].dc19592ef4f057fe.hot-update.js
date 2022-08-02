"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/module/editor/[project]",{

/***/ "./pages/components/bootstrap/editor.tsx":
/*!***********************************************!*\
  !*** ./pages/components/bootstrap/editor.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var grapesjs_dist_css_grapes_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grapesjs/dist/css/grapes.min.css */ \"./node_modules/grapesjs/dist/css/grapes.min.css\");\n/* harmony import */ var grapesjs_dist_css_grapes_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grapesjs_dist_css_grapes_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _editor_plugins_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor_plugins/blocks */ \"./pages/components/bootstrap/editor_plugins/blocks.tsx\");\n/* harmony import */ var _public_images_IMG_4867_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../public/images/IMG_4867.png */ \"./public/images/IMG_4867.png\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar grapesjs = __webpack_require__(/*! grapesjs */ \"./node_modules/grapesjs/dist/grapes.min.js\");\nfunction Editor(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), project = ref[0], setProject = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(props);\n        setProject(props.project);\n        var editor = grapesjs.init({\n            container: \"#gjs\",\n            activate: false,\n            showOffsets: 1,\n            noticeOnUnload: 0,\n            storageManager: {\n                autoload: 1\n            },\n            canvas: {\n                styles: [\n                    \"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css\", \n                ],\n                scripts: [\n                    \"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js\", \n                ]\n            },\n            deviceManager: {\n                devices: [\n                    {\n                        name: \"Desktop\",\n                        width: \"\"\n                    },\n                    {\n                        name: \"Mobile\",\n                        width: \"320px\",\n                        widthMedia: \"480px\"\n                    }, \n                ]\n            }\n        });\n        /** Check if Panel has been rendered already  **/ editor.Panels.addPanel({\n            id: \"panel-top\",\n            el: \".custom_panel__top\"\n        });\n        editor.Panels.addPanel({\n            id: \"basic-actions\",\n            el: \".panel__basic-actions\",\n            buttons: [\n                {\n                    id: \"clearcanvas\",\n                    active: false,\n                    className: \"btn-toggle-borders\",\n                    label: '<span>\\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x-circle\" viewBox=\"0 0 16 16\">\\n          <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\\n          <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\\n          </svg>\\n          </span>',\n                    command: function(ed) {\n                        ed.DomComponents.clear();\n                        ed.CssComposer.clear();\n                    }\n                }, \n            ]\n        });\n        if (document.getElementsByClassName(\"btn-toggle-borders\").length > 1) {\n            document.getElementsByClassName(\"btn-toggle-borders\")[0].parentElement.remove();\n        }\n        (0,_editor_plugins_blocks__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(editor);\n    }, [\n        1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-fluid\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: [\n                            project.name,\n                            \"-(\",\n                            project.projectType,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/builder/pages/components/bootstrap/editor.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/builder/pages/components/bootstrap/editor.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"/css/common.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/builder/pages/components/bootstrap/editor.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: _public_images_IMG_4867_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/builder/pages/components/bootstrap/editor.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js\",\n                        integrity: \"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM\",\n                        crossOrigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pushpendughosh/Documents/personal/builder/pages/components/bootstrap/editor.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 10\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/builder/pages/components/bootstrap/editor.tsx\",\n                lineNumber: 79,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sidebar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \" Pages  \"\n                }, void 0, false, {\n                    fileName: \"/Users/pushpendughosh/Documents/personal/builder/pages/components/bootstrap/editor.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 8\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/builder/pages/components/bootstrap/editor.tsx\",\n                lineNumber: 86,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"custom_panel__top\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"panel__basic-actions\"\n                }, void 0, false, {\n                    fileName: \"/Users/pushpendughosh/Documents/personal/builder/pages/components/bootstrap/editor.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/builder/pages/components/bootstrap/editor.tsx\",\n                lineNumber: 89,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"gjs\",\n                className: \"editor\",\n                children: \"HTML Editor\"\n            }, void 0, false, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/builder/pages/components/bootstrap/editor.tsx\",\n                lineNumber: 92,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"blocks\"\n            }, void 0, false, {\n                fileName: \"/Users/pushpendughosh/Documents/personal/builder/pages/components/bootstrap/editor.tsx\",\n                lineNumber: 93,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pushpendughosh/Documents/personal/builder/pages/components/bootstrap/editor.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this);\n}\n_s(Editor, \"bZvTV4UWTy+ePeavylPDvbKzupU=\");\n_c = Editor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Editor);\nvar _c;\n$RefreshReg$(_c, \"Editor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2Jvb3RzdHJhcC9lZGl0b3IudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFDZjtBQUNhO0FBRU87QUFDUTs7QUFGekQsSUFBTUssUUFBUSxHQUFHQyxtQkFBTyxDQUFDLDREQUFVLENBQUM7QUFJcEMsU0FBU0MsTUFBTSxDQUFDQyxLQUFLLEVBQUU7O0lBRXJCLElBQTZCUixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBVDNDLE9BU2dCLEdBQWVBLEdBQVksR0FBM0IsRUFUaEIsVUFTMkIsR0FBSUEsR0FBWSxHQUFoQjtJQUN6QkMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLLENBQUM7UUFDbEJFLFVBQVUsQ0FBQ0YsS0FBSyxDQUFDQyxPQUFPLENBQUM7UUFDekIsSUFBSUksTUFBTSxHQUFHUixRQUFRLENBQUNTLElBQUksQ0FBQztZQUN6QkMsU0FBUyxFQUFFLE1BQU07WUFDakJDLFFBQVEsRUFBRSxLQUFLO1lBQ2ZDLFdBQVcsRUFBRSxDQUFDO1lBQ2RDLGNBQWMsRUFBRSxDQUFDO1lBQ2pCQyxjQUFjLEVBQUU7Z0JBQUVDLFFBQVEsRUFBRSxDQUFDO2FBQUU7WUFDL0JDLE1BQU0sRUFBRTtnQkFDTkMsTUFBTSxFQUFFO29CQUNSLHlFQUF5RTtpQkFDeEU7Z0JBQ0RDLE9BQU8sRUFBRTtvQkFDVCw4RUFBOEU7aUJBQzdFO2FBQ0Y7WUFDREMsYUFBYSxFQUFFO2dCQUNiQyxPQUFPLEVBQUU7b0JBQ1Q7d0JBQ0VDLElBQUksRUFBRSxTQUFTO3dCQUNiQyxLQUFLLEVBQUUsRUFBRTtxQkFDVjtvQkFDRDt3QkFDRUQsSUFBSSxFQUFFLFFBQVE7d0JBQ2RDLEtBQUssRUFBRSxPQUFPO3dCQUNkQyxVQUFVLEVBQUUsT0FBTztxQkFDcEI7aUJBQ0E7YUFDRjtTQUNGLENBQUM7UUFFSixpREFBaUQsQ0FDakRmLE1BQU0sQ0FBQ2dCLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDO1lBQ3JCQyxFQUFFLEVBQUUsV0FBVztZQUNmQyxFQUFFLEVBQUUsb0JBQW9CO1NBQ3pCLENBQUMsQ0FBQztRQUVIbkIsTUFBTSxDQUFDZ0IsTUFBTSxDQUFDQyxRQUFRLENBQUM7WUFDckJDLEVBQUUsRUFBRSxlQUFlO1lBQ25CQyxFQUFFLEVBQUUsdUJBQXVCO1lBQzNCQyxPQUFPLEVBQUU7Z0JBQ1Q7b0JBQ0lGLEVBQUUsRUFBRSxhQUFhO29CQUNqQkcsTUFBTSxFQUFFLEtBQUs7b0JBQ2JDLFNBQVMsRUFBRSxvQkFBb0I7b0JBQy9CQyxLQUFLLEVBQUcsMmVBS0Q7b0JBQ1BDLE9BQU8sRUFBSSxTQUFDQyxFQUFPLEVBQUs7d0JBQ3BCQSxFQUFFLENBQUNDLGFBQWEsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7d0JBQ3pCRixFQUFFLENBQUNHLFdBQVcsQ0FBQ0QsS0FBSyxFQUFFLENBQUM7cUJBQzFCO2lCQUNGO2FBQ0E7U0FDRixDQUFDLENBQUM7UUFDTCxJQUFHRSxRQUFRLENBQUNDLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUM7WUFDbEVGLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsYUFBYSxDQUFDQyxNQUFNLEVBQUU7U0FDaEY7UUFFRDNDLGtFQUFVLENBQUNVLE1BQU0sQ0FBQyxDQUFDO0tBQ3BCLEVBQUU7QUFBQyxTQUFDO0tBQUMsQ0FBQyxDQUFDO0lBRVIscUJBQ0UsOERBQUNrQyxLQUFHO1FBQUNaLFNBQVMsRUFBQyxpQkFBaUI7OzBCQUNoQyw4REFBQ2pDLGtEQUFJOztrQ0FDQSw4REFBQzhDLE9BQUs7OzRCQUFFdkMsT0FBTyxDQUFDaUIsSUFBSTs0QkFBQyxJQUFFOzRCQUFDakIsT0FBTyxDQUFDd0MsV0FBVzs0QkFBQyxHQUFDOzs7Ozs7NEJBQVE7a0NBQ3JELDhEQUFDQyxNQUFJO3dCQUFDeEIsSUFBSSxFQUFDLFVBQVU7d0JBQUN5QixPQUFPLEVBQUMsdUNBQXVDOzs7Ozs0QkFBRztrQ0FDeEUsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxpQkFBaUI7d0JBQUNDLEdBQUcsRUFBQyxZQUFZOzs7Ozs0QkFBRztrQ0FDaEQsOERBQUNGLE1BQUk7d0JBQUNFLEdBQUcsRUFBQyxNQUFNO3dCQUFDRCxJQUFJLEVBQUVqRCx1RUFBUTs7Ozs7NEJBQUk7a0NBQ25DLDhEQUFDb0QsUUFBTTt3QkFBQ0QsR0FBRyxFQUFDLDhFQUE4RTt3QkFBQ0UsU0FBUyxFQUFDLHlFQUF5RTt3QkFBQ0MsV0FBVyxFQUFDLFdBQVc7Ozs7OzRCQUFVOzs7Ozs7b0JBQzlNOzBCQUNQLDhEQUFDWCxLQUFHO2dCQUFDWixTQUFTLEVBQUMsU0FBUzswQkFDckIsNEVBQUNZLEtBQUc7OEJBQUMsVUFBUTs7Ozs7d0JBQU07Ozs7O29CQUNoQjswQkFDTiw4REFBQ0EsS0FBRztnQkFBQ1osU0FBUyxFQUFDLG1CQUFtQjswQkFDbEMsNEVBQUNZLEtBQUc7b0JBQUNaLFNBQVMsRUFBQyxzQkFBc0I7Ozs7O3dCQUFPOzs7OztvQkFDdEM7MEJBQ04sOERBQUNZLEtBQUc7Z0JBQUNoQixFQUFFLEVBQUMsS0FBSztnQkFBQ0ksU0FBUyxFQUFDLFFBQVE7MEJBQUMsYUFBVzs7Ozs7b0JBQU07MEJBQ2xELDhEQUFDWSxLQUFHO2dCQUFDaEIsRUFBRSxFQUFDLFFBQVE7Ozs7O29CQUFPOzs7Ozs7WUFDakIsQ0FDSjtDQUNMO0dBeEZReEIsTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBMEZmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9ib290c3RyYXAvZWRpdG9yLnRzeD8yNTYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBcImdyYXBlc2pzL2Rpc3QvY3NzL2dyYXBlcy5taW4uY3NzXCI7XG5jb25zdCBncmFwZXNqcyA9IHJlcXVpcmUoXCJncmFwZXNqc1wiKTtcbmltcG9ydCBpbml0QmxvY2tzIGZyb20gXCIuL2VkaXRvcl9wbHVnaW5zL2Jsb2Nrc1wiO1xuaW1wb3J0IGxvZ28gZnJvbSBcIi4vLi4vLi4vLi4vcHVibGljL2ltYWdlcy9JTUdfNDg2Ny5wbmdcIjtcblxuZnVuY3Rpb24gRWRpdG9yKHByb3BzKSB7XG5cbiAgY29uc3QgW3Byb2plY3Qsc2V0UHJvamVjdF0gPSB1c2VTdGF0ZSh7fSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvcHMpXG4gICAgc2V0UHJvamVjdChwcm9wcy5wcm9qZWN0KVxuICAgIHZhciBlZGl0b3IgPSBncmFwZXNqcy5pbml0KHtcbiAgICAgIGNvbnRhaW5lcjogXCIjZ2pzXCIsXG4gICAgICBhY3RpdmF0ZTogZmFsc2UsXG4gICAgICBzaG93T2Zmc2V0czogMSxcbiAgICAgIG5vdGljZU9uVW5sb2FkOiAwLFxuICAgICAgc3RvcmFnZU1hbmFnZXI6IHsgYXV0b2xvYWQ6IDEgfSxcbiAgICAgIGNhbnZhczoge1xuICAgICAgICBzdHlsZXM6IFtcbiAgICAgICAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiLFxuICAgICAgICBdLFxuICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjIvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIGRldmljZU1hbmFnZXI6IHtcbiAgICAgICAgZGV2aWNlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJEZXNrdG9wXCIsXG4gICAgICAgICAgICB3aWR0aDogXCJcIiwgLy8gZGVmYXVsdCBzaXplXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIk1vYmlsZVwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMzIwcHhcIiwgLy8gdGhpcyB2YWx1ZSB3aWxsIGJlIHVzZWQgb24gY2FudmFzIHdpZHRoXG4gICAgICAgICAgICB3aWR0aE1lZGlhOiBcIjQ4MHB4XCIsIC8vIHRoaXMgdmFsdWUgd2lsbCBiZSB1c2VkIGluIENTUyBAbWVkaWFcbiAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgIC8qKiBDaGVjayBpZiBQYW5lbCBoYXMgYmVlbiByZW5kZXJlZCBhbHJlYWR5ICAqKi9cbiAgICBlZGl0b3IuUGFuZWxzLmFkZFBhbmVsKHtcbiAgICAgIGlkOiBcInBhbmVsLXRvcFwiLFxuICAgICAgZWw6IFwiLmN1c3RvbV9wYW5lbF9fdG9wXCIsXG4gICAgfSk7XG5cbiAgICBlZGl0b3IuUGFuZWxzLmFkZFBhbmVsKHtcbiAgICAgIGlkOiBcImJhc2ljLWFjdGlvbnNcIixcbiAgICAgIGVsOiBcIi5wYW5lbF9fYmFzaWMtYWN0aW9uc1wiLFxuICAgICAgYnV0dG9uczogW1xuICAgICAge1xuICAgICAgICAgIGlkOiBcImNsZWFyY2FudmFzXCIsXG4gICAgICAgICAgYWN0aXZlOiBmYWxzZSwgLy8gYWN0aXZlIGJ5IGRlZmF1bHRcbiAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuLXRvZ2dsZS1ib3JkZXJzXCIsXG4gICAgICAgICAgbGFiZWw6IGA8c3Bhbj5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS14LWNpcmNsZVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTggMTVBNyA3IDAgMSAxIDggMWE3IDcgMCAwIDEgMCAxNHptMCAxQTggOCAwIDEgMCA4IDBhOCA4IDAgMCAwIDAgMTZ6XCIvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNC42NDYgNC42NDZhLjUuNSAwIDAgMSAuNzA4IDBMOCA3LjI5M2wyLjY0Ni0yLjY0N2EuNS41IDAgMCAxIC43MDguNzA4TDguNzA3IDhsMi42NDcgMi42NDZhLjUuNSAwIDAgMS0uNzA4LjcwOEw4IDguNzA3bC0yLjY0NiAyLjY0N2EuNS41IDAgMCAxLS43MDgtLjcwOEw3LjI5MyA4IDQuNjQ2IDUuMzU0YS41LjUgMCAwIDEgMC0uNzA4elwiLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L3NwYW4+YCxcbiAgICAgICAgICBjb21tYW5kIDogIChlZDogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGVkLkRvbUNvbXBvbmVudHMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgZWQuQ3NzQ29tcG9zZXIuY2xlYXIoKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSk7XG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0bi10b2dnbGUtYm9yZGVyc1wiKS5sZW5ndGggPiAxKXtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tdG9nZ2xlLWJvcmRlcnNcIilbMF0ucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgIH1cblxuICAgIGluaXRCbG9ja3MoZWRpdG9yKTtcbiAgfSwgWzFdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgPEhlYWQ+XG4gICAgICAgICA8dGl0bGU+e3Byb2plY3QubmFtZX0tKHtwcm9qZWN0LnByb2plY3RUeXBlfSk8L3RpdGxlPlxuICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgPGxpbmsgaHJlZj1cIi9jc3MvY29tbW9uLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e2xvZ28uc3JjfSAvPlxuICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMi9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LU1yY1c2Wk1GWWx6Y0xBOE5sK050VVZGMHNBN01zWHNQMVV5Sm9NcDRZTEV1TlNmQVArSmNYbi90V3RJYXhWWE1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cbiAgICAgICA8ZGl2PiBQYWdlcyAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21fcGFuZWxfX3RvcFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWxfX2Jhc2ljLWFjdGlvbnNcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwiZ2pzXCIgY2xhc3NOYW1lPVwiZWRpdG9yXCI+SFRNTCBFZGl0b3I8L2Rpdj5cbiAgICA8ZGl2IGlkPVwiYmxvY2tzXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsImluaXRCbG9ja3MiLCJsb2dvIiwiZ3JhcGVzanMiLCJyZXF1aXJlIiwiRWRpdG9yIiwicHJvcHMiLCJwcm9qZWN0Iiwic2V0UHJvamVjdCIsImNvbnNvbGUiLCJsb2ciLCJlZGl0b3IiLCJpbml0IiwiY29udGFpbmVyIiwiYWN0aXZhdGUiLCJzaG93T2Zmc2V0cyIsIm5vdGljZU9uVW5sb2FkIiwic3RvcmFnZU1hbmFnZXIiLCJhdXRvbG9hZCIsImNhbnZhcyIsInN0eWxlcyIsInNjcmlwdHMiLCJkZXZpY2VNYW5hZ2VyIiwiZGV2aWNlcyIsIm5hbWUiLCJ3aWR0aCIsIndpZHRoTWVkaWEiLCJQYW5lbHMiLCJhZGRQYW5lbCIsImlkIiwiZWwiLCJidXR0b25zIiwiYWN0aXZlIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJjb21tYW5kIiwiZWQiLCJEb21Db21wb25lbnRzIiwiY2xlYXIiLCJDc3NDb21wb3NlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmUiLCJkaXYiLCJ0aXRsZSIsInByb2plY3RUeXBlIiwibWV0YSIsImNvbnRlbnQiLCJsaW5rIiwiaHJlZiIsInJlbCIsInNyYyIsInNjcmlwdCIsImludGVncml0eSIsImNyb3NzT3JpZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/bootstrap/editor.tsx\n");

/***/ })

});