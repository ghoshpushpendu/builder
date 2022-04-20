const mongoose = require('mongoose');
import ProjectsController from './../../../controllers/Projects.controller';

// changes only

export default async (req:any, res:any) => {
  ProjectsController.handleRequests(req,res)
}