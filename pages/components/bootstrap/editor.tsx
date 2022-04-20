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
	      height: '92vh',
          width: 'auto',
          canvas:{
          	styles: [
              'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
          	],
          	scripts:[
              'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
          	]
          }
	  });

      editor.BlockManager.add('testBlock', {
        label: 'Block',
        attributes: { class:'gjs-fonts gjs-f-b1' },
        content: `<div style="padding-top:50px; padding-bottom:50px; text-align:center">Test block</div>`
      });

      editor.BlockManager.add("Button",{
      	label: "Button",
      	attributes:{ class:'gjs-fonts gjs-f-b1' },
      	content: `<button type="button" class="btn">Bootstrap 5 Button</button>`
      })

    },[]);

	return(
		<div>
			<div id="gjs">HTML Editor</div>
			<div id="blocks"></div>
		</div>
	);
}

export default Editor;