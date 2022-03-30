var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var usersSchema = new Schema({
   name:String,
   email:String,
   imageUrl:String,
   loginProvider:Number,
});

export default mongoose.models.Users || mongoose.model('Users', usersSchema);