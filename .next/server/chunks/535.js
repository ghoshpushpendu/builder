"use strict";
exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




function Loader() {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const startLoadingBar = ()=>{
        console.log("Start Loading", ref);
        if (ref && ref.current) {
            ref.current.continuousStart();
        }
    };
    const completeLoadingBar = ()=>{
        console.log("Stop Loading", ref);
        if (ref && ref.current) {
            ref.current.complete();
        }
    };
    ActivateInterceptor(startLoadingBar, completeLoadingBar);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_top_loading_bar__WEBPACK_IMPORTED_MODULE_2___default()), {
        height: 2,
        color: "#f11946",
        ref: ref
    });
};
function ActivateInterceptor(startLoadingBar, completeLoadingBar) {
    // Add a request interceptor
    axios__WEBPACK_IMPORTED_MODULE_3___default().interceptors.request.use((config)=>{
        startLoadingBar();
        console.log("Request Getting Sent");
        // Do something before request is sent
        return config;
    }, function(error) {
        completeLoadingBar();
        // Do something with request error
        return Promise.reject(error);
    });
    // Add a response interceptor
    axios__WEBPACK_IMPORTED_MODULE_3___default().interceptors.response.use((response)=>{
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        console.log("Response Came");
        completeLoadingBar();
        return response;
    }, function(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        completeLoadingBar();
        return Promise.reject(error);
    });
}


/***/ })

};
;