import { connect,ConnectOptions } from 'mongoose';

var connection:any = {};
const connectionOptions = {
		useNewUrlParser:true,
		useUnifiedTopology:true
}

async function dbConnect() {
	if(connection.isConnected){
	   console.log("Database Connected") 	
       return;
	}

	const db = await connect(process.env.mongouri,connectionOptions as ConnectOptions);

	connection.isConnected = db.connections[0].readyState;
	console.log(db.connections[0])
	console.log("Database is connected : ",connection.isConnected)
}

export default dbConnect;

// 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

// wget https://aws-codedeploy-ap-east-1.s3.ap-east-1.amazonaws.com/latest/install