"use strict";
exports.id = 983;
exports.ids = [983];
exports.modules = {

/***/ 983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Projects_controller)
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
        if (userId && userId != null) {
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
        try {
            let projects = await Projects_model.find(query);
            console.log(JSON.stringify(projects));
            res.status(200).json({
                error: false,
                message: "List of Projects of current user !",
                data: projects
            });
        } catch (e) {
            console.log("Error fetching projects");
            return res.status(200).json({
                error: true,
                message: "List of Projects of current user !",
                data: []
            });
        }
    };
    handleSingleProject = async (req, res)=>{
        console.log("Handling Project Requests");
        if (req.method == "POST") {
            return await this.updateProject(req, res);
        } else if (req.method == "GET") {
            return await this.getProject(req, res);
        }
    };
    updateProject = async (req, res)=>{};
    getProject = async (req, res)=>{
        console.log(req.url);
        let projectId = req.url.split("/")[req.url.split("/").length - 1];
        console.log(projectId);
        let project = await Projects_model.findOne({
            _id: projectId
        });
        res.status(200).json({
            error: false,
            message: "SOmething",
            data: project
        });
    };
}
/* harmony default export */ const Projects_controller = (new ProjectsController());


/***/ })

};
;