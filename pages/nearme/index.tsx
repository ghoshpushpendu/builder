import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from "../footer"
import Header from "../header"
import Result from './result'
export default function Nearme() {
    return (
        <div>
            <Head>
                <title>Restaurants Near Me</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="./../css/common.css" rel="stylesheet" />
                <link rel="icon" href="./../images/IMG_4870.PNG" />
            </Head>
            <Header></Header>
            <Result></Result>
            <Footer></Footer>
        </div>
    )
}
