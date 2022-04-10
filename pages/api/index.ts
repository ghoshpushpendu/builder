import { NextApiRequest,NextApiResponse } from "next"

// changes only

export default async (req:NextApiRequest, res:NextApiResponse) => {
  console.log("Server is now Up and Running !")	
  res.send("API Server is up and running !")
}