const mongoose = require('mongoose');
import ProjectsController from './../../../controllers/Projects.controller';

// changes only

export default async (req:any, res:any) => {
  console.log("Here Single Request")  
  ProjectsController.handleSingleProject(req,res)
}