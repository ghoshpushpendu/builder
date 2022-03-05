import Head from 'next/head'

function Header(props) {

    const gotoHomePage = () => {
        window.location.href = "/"
    }

    return (
        <nav className="navbar sticky-top header">
            <div className="navbar-brand brand" onClick={() => { gotoHomePage() }}>
                <img src="../images/IMG_4867.PNG" width="30" height="30" className="d-inline-block align-top logo" alt="" />
                <span>The Sigma {props.title ? "| "+props.title : ""}</span>
            </div>
            <Head>
                <title>The Sigma | {props.title ? props.title : "Everything Online"}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="./css/common.css" rel="stylesheet" />
                <link rel="icon" href="./images/IMG_4870.PNG" />
            </Head>
        </nav>
    )
}

export default Header