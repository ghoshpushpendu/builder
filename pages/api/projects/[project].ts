import dbConnect from './../../utils/dbConnect';
const mongoose = require('mongoose');
import Projects from './../../models/Projects.model';
import ProjectsController from './../../../controllers/Projects.controller';

// changes only

export default async (req, res) => {
  console.log("Here Single Request")  
  ProjectsController.handleSingleProject(req,res)
}