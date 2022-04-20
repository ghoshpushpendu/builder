import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./footer";
import Header from "./header";
import Start from "./parts/start";

export default function Home() {

  return (
    <div>
      <Header></Header>
      <Start></Start>
      <Footer></Footer>
    </div>
  );
}
