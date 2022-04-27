import { useState, useEffect } from "react";
import Head from "next/head";
import "grapesjs/dist/css/grapes.min.css";
const grapesjs = require("grapesjs");
import initBlocks from "./editor_plugins/blocks";
import logo from "./../../../public/images/IMG_4867.png";

function Editor(props) {

  const [project,setProject] = useState({});
  useEffect(() => {
    console.log(props)
    setProject(props.project)
    var editor = grapesjs.init({
      container: "#gjs",
      activate: false,
      showOffsets: 1,
      noticeOnUnload: 0,
      storageManager: { autoload: 1 },
      canvas: {
        styles: [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        ],
        scripts: [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
        ],
      },
      deviceManager: {
        devices: [
        {
          name: "Desktop",
            width: "", // default size
          },
          {
            name: "Mobile",
            width: "320px", // this value will be used on canvas width
            widthMedia: "480px", // this value will be used in CSS @media
          },
          ],
        },
      });

    /** Check if Panel has been rendered already  **/
    editor.Panels.addPanel({
      id: "panel-top",
      el: ".custom_panel__top",
    });

    editor.Panels.addPanel({
      id: "basic-actions",
      el: ".panel__basic-actions",
      buttons: [
      {
          id: "clearcanvas",
          active: false, // active by default
          className: "btn-toggle-borders",
          label: `<span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          </span>`,
          command :  (ed: any) => {
              ed.DomComponents.clear();
              ed.CssComposer.clear();
          },
        },
        ],
      });
    if(document.getElementsByClassName("btn-toggle-borders").length > 1){
      document.getElementsByClassName("btn-toggle-borders")[0].parentElement.remove()
    }

    initBlocks(editor);
  }, [1]);

  return (
    <div className="container-fluid">
    <Head>
         <title>{project.name}-({project.projectType})</title>
         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         <link href="/css/common.css" rel="stylesheet" />
         <link rel="icon" href={logo.src} />
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
    </Head>
    <div className="sidebar">
       <div className="sidebar-header"> <p>Components
         <svg className="componentAddICON bi bi-plus-circle-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
           <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
         </svg>
         </p>
       </div>
       <div className="sidebar-content">
         <ol class="list-group list-group-numbered">
          <li class="list-group-item list-group-item-action sidebar-item">Login Page</li>
          <li class="list-group-item list-group-item-action sidebar-item">Register Page</li>
          <li class="list-group-item list-group-item-action sidebar-item">Complaints List</li>
          <li class="list-group-item list-group-item-action sidebar-item">Case Details</li>
        </ol> 
       </div>
    </div>
    <div className="custom_panel__top">
    <div className="panel__basic-actions"></div>
    </div>
    <div id="gjs" className="editor">HTML Editor</div>
    <div id="blocks"></div>
    </div>
    );
}

export default Editor;
