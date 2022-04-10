const mongoose = require('mongoose');
import Users from './../../models/Users.model';
import dbConnect from './../../utils/dbConnect';

dbConnect();
// changes only

export default async (req, res) => {
	 console.log("Request is coming here")
    if(req.method == "POST"){
    	 let userInfo:any = getUserInfo(req.body)
    	 console.log(userInfo)
	    let user:any = await Users.findOne({
	    	email:userInfo.email
	    })
	    if(!user){
           user = await Users.insertOne(userInfo)
	    }else{
	    	await Users.updateOne({email:userInfo.email},{
	    		$set :{
	    			name : userInfo.name,
	    			imageUrl : userInfo.imageUrl
	    		}
	    	})
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
       let user:any = await Users.findOne({
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