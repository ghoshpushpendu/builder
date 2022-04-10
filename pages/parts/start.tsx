import axios from "axios";
import React, { useRef, useState, useEffect } from "react";

function Start() {
    const [projects,setProjects] = useState([]);

    const goToCreateApp = () => {
        window.location.href = "/module/createapp"
    }

    const getProjects = async () => {
        let response = await axios.get('/api/projects?userId='+localStorage.getItem("_id"));
        console.log(response.data.data);
        setProjects(response.data.data)
    }

    useEffect(()=>{
       getProjects();
    },[])

    return (<div className="container-fluid applist">
        <div className="row mt-5 ms-3">
            {
                projects && projects.map((project,i)=>{
                    return (
                        <div className='col col-sm-6 app' key={i}>
                            <div className="card" style={{ width: "15rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{project.name}</h5>
                                    <p className="card-text">Type : {project.projectType}</p>
                                    <p className="card-text">Techs : HTML, CSS, Javascript</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            <div className='col'>
                <div className="card" style={{ width: "15rem" }} onClick={()=>{goToCreateApp()}}>
                    <i className="bi bi-plus-square-dotted text-center mt-3"></i>
                    <div className="card-body">
                        <h5 className="card-title">Create Application</h5>
                        <p className="card-text">Create an Application From Scratch.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Start