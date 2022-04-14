import Header from "../../header";
import Footer from "../../footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
function Project(){
	return(
     <div>
     	<Header></Header>
     	<div className="container-fluid">Welcome to the Editor</div>
     	<Footer></Footer>
     </div>
	)
}

export default Project;