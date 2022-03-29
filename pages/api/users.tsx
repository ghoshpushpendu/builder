import dbConnect from "./../../utils/dbConnect";
import mongoose from "mongoose";

dbConnect();

export default async (req,res) => {
    console.log(req.method) 
    if(req.method == "POST"){
    	let userInfo = getUserInfo(req.body)
    	console.log(userInfo)
	    let users = mongoose.connection.db.collection("users")
	    let user = await users.findOne({
	    	email:userInfo.email
	    })
	    if(!user){
           user = await users.insertOne(userInfo)
	    }
	    console.log("user",user)
		res.status(200).json({
			error:false,
			message:"Got user",
			data : user
		})
    }

    if(req.method == "GET"){
       console.log(req.query)	
       let _id = req.query._id;
       console.log(_id)
       let users = mongoose.connection.db.collection("users");
       let user = await users.findOne({
	    	_id:mongoose.Types.ObjectId(_id)
	   })
	   console.log(user)
	   res.status(200).json({
			error:false,
			message:"Got user",
			data : user
	   })
    }
}



const getUserInfo = (data) => {
	return {
		email:data.profileObj.email,
		name : data.profileObj.name,
		imageUrl : data.profileObj.imageUrl,
		loginProvider : 'google'
	}	
}