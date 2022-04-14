import Header from "../header";
import Footer from "../footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import python from "./../../public/images/python.png";
import html from "./../../public/images/html.png";
import blockchain from "./../../public/images/blockchain.png";
import typescript from "./../../public/images/typescript.png";
import css from "./../../public/images/css.png";
import bootstrap from "./../../public/images/bootstrap.png";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios"
import { useRouter } from "next/router";

function CreateApp() {
  const [project, setProject] = useState({
    name: "",
    projectType: "",
    users:[]
  });
  const [loading,setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
      setProject({
        ...project,...{users:[{userId:localStorage.getItem("_id")}]}
      })
  },[]);

    const gotoHome = () => {
        router.push("/")
    }

  const updateValue = (e) => {
    console.log(e.target.name, e.target.value);
    console.log({ ...project, ...{ [e.target.name]: e.target.value } });
    setProject({ ...project, ...{ [e.target.name]: e.target.value } });
    setTimeout(() => {
      console.log(project);
      validateInput(["name", "projectType"]);
    }, 500);
  };

  const createProject = async (e) => {
    e.preventDefault()
    setLoading(true)
    console.log(project);
    try {
      let validationResponse = await validateInput(project);
      renderError(null);
      if(validationResponse == "success"){
         console.log("Inside Success",project)
         let response = await axios.post('/api/projects', project);
         console.log(response)
         if(response.data.error){
            alert(response.data.message)
            setLoading(false)
         }else {
            alert(response.data.message);
            gotoHome();
         }
      }else{
        setLoading(false)
      }
    } catch (e) {
      console.log(e);
      renderError(e);
      setLoading(false)
    }
  };

  const renderError = (e) => {
    clearError();
    if (e) {
      let childElement = document.createElement("p"); // to render the error
      childElement.innerText = e.message;
      childElement.className = "error";
      if(document.getElementsByName(e.key).length != 0){
      document
        .getElementsByName(e.key)[0]
        .parentElement.appendChild(childElement);
      }
    }
  };

  const clearError = () => {
    document.querySelectorAll(".error").forEach((element) => {
      element.remove();
    });
  };

  /** Write the validation code here **/
  const validateInput = async (params) => {
    for (let key in params) {
      let value = params[key];
      console.log(key, value);
      if (key == "name") {
        // for the project name validation
        if (value.indexOf(" ") != -1) {
          throw {
            error: true,
            message: "* remove the space from the project name",
            key: key,
          };
        }else if(value == null || value.length < 10){
           throw({
            error:true,
            message:"* your project name should be more than 10 characters long",
            key:key 
           })
        }
      }else if(key == "projectType") {
        if (value == "") {
          throw {
            error: true,
            message: "* please select a project type",
            key: key,
          };
        }
      }
    }

    return "success"
  };

  return (
    <div>
      <Header title="Create Application"></Header>
      <div className="container-fluid">
        <div className="card mt-3" style={{ width: "30rem" }}>
          <div className="card-header">
            <b>Create Project</b>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3 mt-3">
                <label htmlFor="name" className="form-label">
                  What is the name of your Project ?
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="My First Project"
                  name="name"
                  onChange={(e) => {
                    updateValue(e);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">
                  I want to make a
                </label>
                <select
                  name="projectType"
                  defaultValue=""
                  onChange={(e) => {
                    updateValue(e);
                  }}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option disabled value="">
                    -- Select Preferred Option --
                  </option>
                  <option value="web">Landing Page for my Website</option>
                  <option disabled>
                    Full Stack Application ( Web , Android , IOS )
                  </option>
                  <option value="3" disabled>
                    Blockchain For my Business
                  </option>
                  <option value="4" disabled>
                    AI / ML Model For my Business
                  </option>
                </select>
              </div>

              {project.projectType == "web" ? (
                <div className="mb-3">
                  <label htmlFor="pwd" className="form-label">
                    Technology to be used
                  </label>
                  <div className="row">
                    <div className="col">
                      <img src={html.src} height="50" />
                    </div>
                    <div className="col">
                      <img src={css.src} height="50" />
                    </div>
                    <div className="col">
                      <img src={bootstrap.src} height="50" />
                    </div>
                  </div>
                </div>
              ) : null}
              {
                loading == false ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => {
                      createProject(e);
                    }}
                  >
                    Lets Create Project
                  </button>
                ) : (
                  <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Wait while we create your project
                  </button>
                )
              }
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default CreateApp;
