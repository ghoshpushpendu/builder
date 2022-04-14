import { useRouter } from "next/router";

function Footer() {
    const router = useRouter();

    const termsandconditionpage = () => {
      router.push("/termsandconditions")
    }

    const privacypolicypage = () => {
      router.push("/privacypolicy")
    }

    return (<div className="footer-dark">
                <p className="copyright">Sigma Corporation © 2022 | <a  className="link-primary" style={{cursor:"pointer"}} onClick={()=>{termsandconditionpage()}}>Terms & Conditions</a> | <a  className="link-primary" style={{cursor:"pointer"}} onClick={()=>{privacypolicypage()}}>Privacy Policy</a> </p>
    </div>)
}

export default Footer