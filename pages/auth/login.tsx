import Head from 'next/head'
import { GoogleLogin } from 'react-google-login';
import LoadingBar from 'react-top-loading-bar'
import React, { useRef,useState, useEffect } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from "./../footer"
import { useRouter } from "next/router";
import Loader from "./../components/loader/index"

function Login() {
    const router = useRouter();

    const gotoHome = () => {
        window.location.href = "/"
    }

    const responseGoogle = (response:any) => {
      console.log(response);
      if(!response.error){
          authenticate(response)
      }
    }

    const LoadFinished = () => {
    }

      useEffect(() => {
        // Update the document title using the browser API
         console.log(localStorage.getItem("_id") === null,"ID")
         if(localStorage.getItem("_id") != undefined && localStorage.getItem("_id") != null){
           gotoHome()
         }
      });

    /**  Authenticate using google and mongodb  **/
    const authenticate = async (data:any) => {
      const response = await axios.post('/api/users', data);
      console.log(response.data.data._id)
      localStorage.setItem("_id",response.data.data._id);
      gotoHome();
    }  


    return (
        <div>
            <Loader></Loader>
            <Head>
                <link rel="icon" href="./../../images/IMG_4870.PNG" />
                <title>The Sigma | Login</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="./../../css/common.css" rel="stylesheet" />
            </Head>
            <div className="container-fluid">
               <div className="text-center mt-5 loginButtonHolder">
                                  <GoogleLogin
                                    clientId="259083905478-9vs3cimdg8n1ktrdla6cu5iavp3879qd.apps.googleusercontent.com"
                                    buttonText="Login using Google"
                                     onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                    isSignedIn={false}
                                    onAutoLoadFinished={LoadFinished}
                                  />
                                  <div className="mt-5">Click on the button above to login. You need to login to access the application.</div>
               </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Login