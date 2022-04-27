import Head from 'next/head';
import axios from 'axios';
import React, { useRef,useState, useEffect } from 'react';
import ProfileDropdown from "./components/dropdown/profileDropdown";
import logo from "./../public/images/IMG_4867.png";
import { useRouter } from "next/router";
import Loader from "./components/loader/index";

function Header(props:any) {
    const [user,setUser] = useState(null) 
    const router = useRouter();
    console.log(props.title) 
    const gotoHomePage = () => {
        router.push("/")
    }

    const gotoLoginPage = () => {
      router.push("/auth/login")
    }

    const getProfile = async (_id:any) => {
       const response = await axios.get('/api/users?_id='+_id);
       console.log(response.data.data)
       setUser(response.data.data?response.data.data:null)
    }


    useEffect(() => { 
      // Update the document title using the browser API
      if(localStorage.getItem("_id") != undefined && localStorage.getItem("_id") != null){
        getProfile(localStorage.getItem("_id"))
      }else {
        gotoLoginPage();
      }
    },[]);

    return (
        <nav className="navbar header ps-3 pe-3">
            <Loader></Loader>
            <div className="navbar-brand brand float-start" onClick={() => { gotoHomePage() }}>
                <img src={logo.src} width="35" height="35" className="d-inline-block align-top logo" alt="" />
                <span className="align-middle">{(props.title != null && props.title != undefined && !props.title.includes("undefined") ) ? props.title : "My Applications"}</span>
            </div>
            <Head>
                <title>The Sigma | {(props.title != null && props.title != undefined && !props.title.includes("undefined") ) ? props.title : "Empowering Innovations"}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="/css/common.css" rel="stylesheet" />
                <link rel="icon" href={logo.src} />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
            </Head>
            {
                user ? (
                    <div className="float-end text-center" role="button">
                        <ProfileDropdown user={user}/>
                    </div>
                ) : (
                    <div className="float-end text-center" role="button" onClick={()=>{gotoLoginPage()}}>
                      Please Login ?
                    </div>
                )
            }
        </nav>
    )
}

export default Header