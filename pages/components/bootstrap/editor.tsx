import { useState, useEffect } from "react";
import Head from 'next/head';
import "grapesjs/dist/css/grapes.min.css";
const grapesjs = require('grapesjs');

function Editor(){
    useEffect(()=>{
	  var editor = grapesjs.init({
	      container : '#gjs',
	      components: '<div class="txt-red">Hello world!</div>',
	      style: '.txt-red{color: red}',
	      storageManager: true,
	      activate: true,
	      height: '90vh',
          width: 'auto',
	  });
    },[]);

	return(
		<div>
			<div id="gjs">HTML Editor</div>
			<div id="blocks"></div>
		</div>
	);
}

export default Editor;