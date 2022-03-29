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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-login */ \"react-google-login\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-top-loading-bar */ \"react-top-loading-bar\");\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ \"./node_modules/bootstrap-icons/font/bootstrap-icons.css\");\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/pushpendughosh/Documents/personal/thesigma/pages/auth/login.js\";\n\n\n\n\n\n\n\n\n\nfunction Login() {\n  const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n\n  const gotoHome = () => {\n    window.location.href = \"/\";\n  };\n\n  const responseGoogle = response => {\n    console.log(response);\n\n    if (!response.error) {\n      authenticate(response);\n    }\n\n    completeLoadingBar();\n  };\n\n  const LoadFinished = () => {\n    completeLoadingBar();\n  };\n\n  const startLoadingBar = () => {\n    ref.current.continuousStart();\n  };\n\n  const completeLoadingBar = () => {\n    ref.current.complete();\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    // Update the document title using the browser API\n    startLoadingBar();\n    console.log(localStorage.getItem(\"_id\") === null, \"ID\");\n\n    if (localStorage.getItem(\"_id\") != undefined && localStorage.getItem(\"_id\") != null) {\n      gotoHome();\n    }\n  });\n  /**  Authenticate using google and mongodb  **/\n\n  const authenticate = async data => {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_4___default().post('/api/users', data);\n    console.log(response.data.data._id);\n    localStorage.setItem(\"_id\", response.data.data._id);\n    gotoHome();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"./../../images/IMG_4870.PNG\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"title\", {\n        children: \"The Sigma | Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        href: \"./../../css/common.css\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"container-fluid\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((react_top_loading_bar__WEBPACK_IMPORTED_MODULE_2___default()), {\n        height: 5,\n        color: \"#4d61fc\",\n        ref: ref\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 16\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"text-center mt-5 loginButtonHolder\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_google_login__WEBPACK_IMPORTED_MODULE_1__.GoogleLogin, {\n          clientId: \"259083905478-9vs3cimdg8n1ktrdla6cu5iavp3879qd.apps.googleusercontent.com\",\n          buttonText: \"Login using Google\",\n          onSuccess: responseGoogle,\n          onFailure: responseGoogle,\n          cookiePolicy: 'single_host_origin',\n          isSignedIn: true,\n          onAutoLoadFinished: LoadFinished\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 35\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: \"mt-5\",\n          children: \"Click on the button above to login.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 35\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 16\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsRUFBQyxvQkFGYjtBQUdFLG1CQUFTLEVBQUVLLGNBSGI7QUFJRSxtQkFBUyxFQUFFQSxjQUpiO0FBS0Usc0JBQVksRUFBRSxvQkFMaEI7QUFNRSxvQkFBVSxFQUFFLElBTmQ7QUFPRSw0QkFBa0IsRUFBRU87QUFQdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEbkIsZUFVbUI7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUJIOztBQUVELGlFQUFlYixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXV0aC9sb2dpbi5qcz9mM2RkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IEdvb2dsZUxvZ2luIH0gZnJvbSAncmVhY3QtZ29vZ2xlLWxvZ2luJztcbmltcG9ydCBMb2FkaW5nQmFyIGZyb20gJ3JlYWN0LXRvcC1sb2FkaW5nLWJhcidcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnXG5pbXBvcnQgJ2Jvb3RzdHJhcC1pY29ucy9mb250L2Jvb3RzdHJhcC1pY29ucy5jc3MnXG5cbmZ1bmN0aW9uIExvZ2luKCkge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIGNvbnN0IGdvdG9Ib21lID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiXG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2VHb29nbGUgPSAocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIGlmKCFyZXNwb25zZS5lcnJvcil7XG4gICAgICAgICAgYXV0aGVudGljYXRlKHJlc3BvbnNlKVxuICAgICAgfVxuICAgICAgY29tcGxldGVMb2FkaW5nQmFyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgTG9hZEZpbmlzaGVkID0gKCkgPT4ge1xuICAgICAgICBjb21wbGV0ZUxvYWRpbmdCYXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydExvYWRpbmdCYXIgPSAoKSA9PiB7XG4gICAgICAgIHJlZi5jdXJyZW50LmNvbnRpbnVvdXNTdGFydCgpXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGVMb2FkaW5nQmFyID0gKCkgPT4ge1xuICAgICAgICByZWYuY3VycmVudC5jb21wbGV0ZSgpXG4gICAgfVxuXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBVcGRhdGUgdGhlIGRvY3VtZW50IHRpdGxlIHVzaW5nIHRoZSBicm93c2VyIEFQSVxuICAgICAgICAgc3RhcnRMb2FkaW5nQmFyKClcbiAgICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX2lkXCIpID09PSBudWxsLFwiSURcIilcbiAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX2lkXCIpICE9IHVuZGVmaW5lZCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl9pZFwiKSAhPSBudWxsKXtcbiAgICAgICAgICAgZ290b0hvbWUoKVxuICAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAvKiogIEF1dGhlbnRpY2F0ZSB1c2luZyBnb29nbGUgYW5kIG1vbmdvZGIgICoqL1xuICAgIGNvbnN0IGF1dGhlbnRpY2F0ZSA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvdXNlcnMnLCBkYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZGF0YS5faWQpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl9pZFwiLHJlc3BvbnNlLmRhdGEuZGF0YS5faWQpO1xuICAgICAgZ290b0hvbWUoKTtcbiAgICB9ICBcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiLi8uLi8uLi9pbWFnZXMvSU1HXzQ4NzAuUE5HXCIgLz5cbiAgICAgICAgICAgICAgICA8dGl0bGU+VGhlIFNpZ21hIHwgTG9naW48L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiLi8uLi8uLi9jc3MvY29tbW9uLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgIDxMb2FkaW5nQmFyIGhlaWdodD17NX0gY29sb3I9XCIjNGQ2MWZjXCIgcmVmPXtyZWZ9IC8+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTUgbG9naW5CdXR0b25Ib2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R29vZ2xlTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudElkPVwiMjU5MDgzOTA1NDc4LTl2czNjaW1kZzhuMWt0cmRsYTZjdTVpYXZwMzg3OXFkLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCJMb2dpbiB1c2luZyBHb29nbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUdvb2dsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29raWVQb2xpY3k9eydzaW5nbGVfaG9zdF9vcmlnaW4nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTaWduZWRJbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQXV0b0xvYWRGaW5pc2hlZD17TG9hZEZpbmlzaGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+Q2xpY2sgb24gdGhlIGJ1dHRvbiBhYm92ZSB0byBsb2dpbi48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXSwibmFtZXMiOlsiSGVhZCIsIkdvb2dsZUxvZ2luIiwiTG9hZGluZ0JhciIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkxvZ2luIiwicmVmIiwiZ290b0hvbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJyZXNwb25zZUdvb2dsZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYXV0aGVudGljYXRlIiwiY29tcGxldGVMb2FkaW5nQmFyIiwiTG9hZEZpbmlzaGVkIiwic3RhcnRMb2FkaW5nQmFyIiwiY3VycmVudCIsImNvbnRpbnVvdXNTdGFydCIsImNvbXBsZXRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsImRhdGEiLCJwb3N0IiwiX2lkIiwic2V0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/login.js\n");

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