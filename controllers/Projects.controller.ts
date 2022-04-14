import Projects from "./../models/Projects.model";

class ProjectsController {
   handleRequests = async (req,res) => {
   	console.log("Handling Project Requests")
     if(req.method == "POST"){
         return await this.createProject(req,res);
     }else if(req.method == "GET"){
         return await this.getProjects(req,res);
     }
   }

   // create project
   createProject = async (req,res) => {
       let projectData = req.body;
       let projectDocument = new Projects(projectData)
       projectDocument.save((error,success)=>{
       	if(error){
            res.status(200).json({
            	error:true,
            	message:"Project not created !",
            	data: error
            })
       	}else{
            res.status(200).json({
            	error:false,
            	message:"Project created !",
            	data: success
            })
       	}
       }) 
   }

   // get project(s)
   getProjects = async (req,res) => {
       let userId = req.query.userId; // projects of a user
       console.log(userId)
       let query = {
       }
       if(userId){
         query = {
           "users.userId" : userId
         }
       }else{
         return res.status(200).json({
            error:true,
            message:"List of Projects of current user !",
            data: []
         })
       }
       let projects = await Projects.find(query);
       console.log(JSON.stringify(projects))
       res.status(200).json({
            error:false,
            message:"List of Projects of current user !",
            data: projects
       })
   }
}

export default new ProjectsController();
