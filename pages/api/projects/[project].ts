const mongoose = require('mongoose');
import ProjectsController from './../../../controllers/Projects.controller';

// changes only

export default async (req, res) => {
  console.log("Here Single Request")  
  ProjectsController.handleSingleProject(req,res)
}