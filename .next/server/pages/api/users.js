"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ users)
});

;// CONCATENATED MODULE: ./models/Users.model.ts
var mongoose = __webpack_require__(185);
var Schema = mongoose.Schema;
var usersSchema = new Schema({
    name: String,
    email: String,
    imageUrl: String,
    loginProvider: Number
});
/* harmony default export */ const Users_model = (mongoose.models.Users || mongoose.model("Users", usersSchema));

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(185);
;// CONCATENATED MODULE: ./utils/dbConnect.ts

var connection = {};
const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
async function dbConnect() {
    if (connection.isConnected) {
        console.log("Database Connected");
        return;
    }
    const db = await (0,external_mongoose_.connect)("mongodb+srv://pushpendu:thesigmapassword@thesigma-mongodb-develo.ykgql.mongodb.net/thesigma?retryWrites=true&w=majority", connectionOptions);
    connection.isConnected = db.connections[0].readyState;
    console.log(db.connections[0]);
    console.log("Database is connected : ", connection.isConnected);
}
/* harmony default export */ const utils_dbConnect = (dbConnect); // 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
 // wget https://aws-codedeploy-ap-east-1.s3.ap-east-1.amazonaws.com/latest/install

;// CONCATENATED MODULE: ./pages/api/users.ts
const users_mongoose = __webpack_require__(185);


utils_dbConnect();
// changes only
/* harmony default export */ const users = (async (req, res)=>{
    console.log("Request is coming here");
    if (req.method == "POST") {
        let userInfo = getUserInfo(req.body);
        console.log(userInfo);
        let user = await Users_model.findOne({
            email: userInfo.email
        });
        if (!user) {
            user = await Users_model.insertOne(userInfo);
        } else {
            await Users_model.updateOne({
                email: userInfo.email
            }, {
                $set: {
                    name: userInfo.name,
                    imageUrl: userInfo.imageUrl
                }
            });
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
        let user = await Users_model.findOne({
            _id: users_mongoose.Types.ObjectId(_id)
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
        loginProvider: "google"
    };
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(440));
module.exports = __webpack_exports__;

})();