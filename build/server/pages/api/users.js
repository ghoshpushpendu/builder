"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ users)
});

;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: ./utils/dbConnect.js

const connection = {};
async function dbConnect() {
    if (connection.isConnected) {
        return;
    }
    const db = await external_mongoose_default().connect("mongodb+srv://pushpendu:thesigmapassword@thesigma-mongodb-develo.ykgql.mongodb.net/thesigma?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    connection.isConnected = db.connections[0].readyState;
    console.log(db.connections[0]);
    console.log("Database is connected : ", connection.isConnected);
}
/* harmony default export */ const utils_dbConnect = (dbConnect); // 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

;// CONCATENATED MODULE: ./pages/api/users.js


utils_dbConnect();
/* harmony default export */ const users = (async (req, res)=>{
    console.log(req.method);
    if (req.method == "POST") {
        let userInfo = getUserInfo(req.body);
        console.log(userInfo);
        let users = external_mongoose_default().connection.db.collection("users");
        let user = await users.findOne({
            email: userInfo.email
        });
        if (!user) {
            user = await users.insertOne(userInfo);
        }
        console.log("user", user);
        res.status(200).json({
            error: false,
            message: "Got user",
            data: user
        });
    }
    if (req.method == "GET") {
        console.log(req.query);
        let _id = req.query._id;
        console.log(_id);
        let users = external_mongoose_default().connection.db.collection("users");
        let user = await users.findOne({
            _id: external_mongoose_default().Types.ObjectId(_id)
        });
        console.log(user);
        res.status(200).json({
            error: false,
            message: "Got user",
            data: user
        });
    }
});
const getUserInfo = (data)=>{
    return {
        email: data.profileObj.email,
        name: data.profileObj.name,
        imageUrl: data.profileObj.imageUrl,
        loginProvider: 'google'
    };
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(973));
module.exports = __webpack_exports__;

})();