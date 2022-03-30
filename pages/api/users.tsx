import dbConnect from "./../../utils/dbConnect";
import { mongoose,Types } from "mongoose";

dbConnect();

export default async (req,res) => {
    
    if(!mongoose.connection.db){
       return res.status(200).json({
       	error:true,
       	message:"Database is not ready",
       	data:{}
       })
    }

    if(req.method == "POST"){
    	 let userInfo:any = getUserInfo(req.body)
    	 console.log(userInfo)
	    let users:any = mongoose.connection.db.collection("users")
	    let user:any = await users.findOne({
	    	email:userInfo.email
	    })
	    console.log(users)
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
       let _id:String = req.query._id;
       console.log(_id)
       let users:any = mongoose.connection.db.collection("users");
       let user:any = await users.findOne({
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



const getUserInfo = (data:any) => {
	return {
		email:data.profileObj.email,
		name : data.profileObj.name,
		imageUrl : data.profileObj.imageUrl,
		loginProvider : 'google'
	}	
}