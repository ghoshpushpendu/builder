import Header from "../../header";
import Footer from "../../footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Project(){
    const router = useRouter();
    const { project } = router.query;
    const [projectObject,setProject] = useState({});
    useEffect(()=>{
      if(router.isReady){
       console.log(project)
       getProjectDetails(project);
      } 	
    },[router.isReady]);

    const getProjectDetails = async (projectId) => {
       console.log("Calling APIs ...");
       let response = await axios.get('/api/projects/'+projectId);
       console.log("Response",response.data.data);
       setProject(response.data.data)
       return true;
    }

	return(
     <div>
     	<Header title={projectObject.name+" ("+projectObject.projectType+")"}></Header>
     	<div className="container-fluid">Hi ! Here you ll be able to design the project very shortly.</div>
     	<Footer></Footer>
     </div>
	)
}

export default Project;