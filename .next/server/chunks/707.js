"use strict";
exports.id = 707;
exports.ids = [707];
exports.modules = {

/***/ 707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./pages/components/dropdown/profileDropdown.tsx
var profileDropdown = __webpack_require__(349);
;// CONCATENATED MODULE: ./public/images/IMG_4867.png
/* harmony default export */ const IMG_4867 = ({"src":"/_next/static/media/IMG_4867.c5235fad.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAYElEQVR42kXLsQmEQAAF0dk7zrvojMUKBEG0GJsz0AIMxQrUsnZk2UA+TPDhES58RcR36gX+xL+D5NURJw9XF7GKfMXO3dE2MSnExs3RLh8PmTPBQiztxSDCiSEiflKPGwplSAZa6QaGAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./pages/header.tsx







function Header(props) {
    const { 0: user , 1: setUser  } = (0,external_react_.useState)(null);
    const router = (0,router_.useRouter)();
    const gotoHomePage = ()=>{
        router.push("/");
    };
    const gotoLoginPage = ()=>{
        router.push("/auth/login");
    };
    const getProfile = async (_id)=>{
        const response = await external_axios_default().get('/api/users?_id=' + _id);
        console.log(response.data.data);
        setUser(response.data.data ? response.data.data : null);
    };
    (0,external_react_.useEffect)(()=>{
        // Update the document title using the browser API
        if (localStorage.getItem("_id") != undefined && localStorage.getItem("_id") != null) {
            getProfile(localStorage.getItem("_id"));
        } else {
            gotoLoginPage();
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "navbar header ps-3 pe-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "navbar-brand brand float-start",
                onClick: ()=>{
                    gotoHomePage();
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: IMG_4867.src,
                        width: "40",
                        height: "40",
                        className: "d-inline-block align-top logo",
                        alt: ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "align-middle",
                        children: props.title ? props.title : "Home"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            "The Sigma | ",
                            props.title ? props.title : "Empowering Innovations"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "/css/common.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: IMG_4867.src
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
                        integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
                        crossOrigin: "anonymous"
                    })
                ]
            }),
            user ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "float-end text-center",
                role: "button",
                children: /*#__PURE__*/ jsx_runtime_.jsx(profileDropdown["default"], {
                    user: user
                })
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "float-end text-center",
                role: "button",
                onClick: ()=>{
                    gotoLoginPage();
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg",
                        alt: "Avatar",
                        className: "avatar"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "Please Login ?"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const header = (Header);


/***/ })

};
;