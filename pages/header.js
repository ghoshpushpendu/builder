import Head from 'next/head'
import axios from 'axios';
import React, { useRef,useState, useEffect } from 'react'

function Header(props) {
    const [user,setUser] = useState(null) 
   
    const gotoHomePage = () => {
        window.location.href = "/"
    }

    const gotoLoginPage = () => {
      window.location.href = "/auth/login"   
    }

    const getProfile = async (_id) => {
       const response = await axios.get('/api/users?_id='+_id);
       console.log(response.data.data)
       setUser(response.data.data?response.data.data:null)
    }


    useEffect(() => {
      // Update the document title using the browser API
      if(sessionStorage.getItem("_id") != undefined || sessionStorage.getItem("_id") != null){
        getProfile(sessionStorage.getItem("_id"))
      }
    },[]);

    return (
        <nav className="navbar header ps-3 pe-3">
            <div className="navbar-brand brand float-start" onClick={() => { gotoHomePage() }}>
                <img src="../images/IMG_4867.PNG" width="40" height="40" className="d-inline-block align-top logo" alt="" />
                <span className="mt-2">{props.title ? props.title : ""}</span>
            </div>
            <Head>
                <title>The Sigma | {props.title ? props.title : "Everything Online"}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="./css/common.css" rel="stylesheet" />
                <link rel="icon" href="./images/IMG_4870.PNG" />
            </Head>
            {
                user ? (
                    <div className="float-end text-center" role="button">
                        <img src={user.imageUrl} alt="Avatar" className="avatar"/>
                        <div>{user.name}</div>
                    </div>
                ) : (
                    <div className="float-end text-center" role="button" onClick={()=>{gotoLoginPage()}}>
                        <img src="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg" alt="Avatar" className="avatar"/>
                        <div>Please Login ?</div>
                    </div>
                )
            }
        </nav>
    )
}

export default Header