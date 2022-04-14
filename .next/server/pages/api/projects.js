"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ projects)
});

;// CONCATENATED MODULE: ./models/Projects.model.ts
var mongoose = __webpack_require__(185);
var Schema = mongoose.Schema;
var projectsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    projectType: {
        type: String,
        required: true
    },
    technologies: [
        {
            type: String
        }
    ],
    createdDate: {
        type: Date,
        default: Date.now()
    },
    modifiedDate: {
        type: Date
    },
    users: [
        {
            userId: {
                type: Schema.Types.ObjectId,
                ref: "Users",
                required: true
            },
            role: {
                type: String,
                default: "user"
            }
        }
    ] // users who can perform tasks in this project
});
/* harmony default export */ const Projects_model = (mongoose.models.Projects || mongoose.model('Projects', projectsSchema));

;// CONCATENATED MODULE: ./controllers/Projects.controller.ts

class ProjectsController {
    handleRequests = async (req, res)=>{
        console.log("Handling Project Requests");
        if (req.method == "POST") {
            return await this.createProject(req, res);
        } else if (req.method == "GET") {
            return await this.getProjects(req, res);
        }
    };
    // create project
    createProject = async (req, res)=>{
        let projectData = req.body;
        let projectDocument = new Projects_model(projectData);
        projectDocument.save((error, success)=>{
            if (error) {
                res.status(200).json({
                    error: true,
                    message: "Project not created !",
                    data: error
                });
            } else {
                res.status(200).json({
                    error: false,
                    message: "Project created !",
                    data: success
                });
            }
        });
    };
    // get project(s)
    getProjects = async (req, res)=>{
        let userId = req.query.userId; // projects of a user
        console.log(userId);
        let query = {};
        if (userId) {
            query = {
                "users.userId": userId
            };
        } else {
            return res.status(200).json({
                error: true,
                message: "List of Projects of current user !",
                data: []
            });
        }
        let projects = await Projects_model.find(query);
        console.log(JSON.stringify(projects));
        res.status(200).json({
            error: false,
            message: "List of Projects of current user !",
            data: projects
        });
    };
}
/* harmony default export */ const Projects_controller = (new ProjectsController());

;// CONCATENATED MODULE: ./pages/api/projects.ts
const projects_mongoose = __webpack_require__(185);

// changes only
/* harmony default export */ const projects = (async (req, res)=>{
    console.log("Here");
    Projects_controller.handleRequests(req, res);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(370));
module.exports = __webpack_exports__;

})();