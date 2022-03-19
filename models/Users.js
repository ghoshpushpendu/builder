const mongoose = require("mongoose");

const Users = new mongoose.Schema({
	name:{
		type:String,
		index: true,
		required: true
	},
	email:{
		type:String,
		index: true,
		required : true,
		unique: true
	},
	phone:{
		type:String,
		index: true,
		required :false,
		unique : false
	},
	googleAuthToken : {
		type:String
	}
})

module.export = mongoose.models.Users || mongoose.model("Users",Users)