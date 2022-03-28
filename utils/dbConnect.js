import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
	if(connection.isConnected){
       return;
	}

	const db = await mongoose.connect(process.env.mongouri,{
		useNewUrlParser:true,
		useUnifiedTopology:true
	})

	connection.isConnected = db.connections[0].readyState;
	console.log(db.connections[0])
	console.log("Database is connected : ",connection.isConnected)
}

export default dbConnect;

// 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

// wget https://aws-codedeploy-ap-east-1.s3.ap-east-1.amazonaws.com/latest/install