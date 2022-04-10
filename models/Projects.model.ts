var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var projectsSchema = new Schema({
   name:{
      type:String,
      required:true
   },
   projectType:{
      type:String,
      required: true
   },
   technologies:[{
      type:String
   }],
   createdDate:{
      type: Date,
      default: Date.now() 
   },
   modifiedDate : {
      type : Date
   },
   users : [{
      userId:{
         type: Schema.Types.ObjectId,
         ref:"Users",
         required: true
      },
      role:{
         type:String,
         default:"user"
      }
   }] // users who can perform tasks in this project
});

export default mongoose.models.Projects || mongoose.model('Projects', projectsSchema);