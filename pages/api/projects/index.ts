const mongoose = require('mongoose');
import ProjectsController from './../../../controllers/Projects.controller';

// changes only

export default async (req, res) => {
  ProjectsController.handleRequests(req,res)
}