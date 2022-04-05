function Footer() {

    const termsandconditionpage = () => {
      window.location.href = "/termsandconditions"
    }

    const privacypolicypage = () => {
      window.location.href = "/privacypolicy"
    }

    return (<div className="footer-dark">
                <p className="copyright">Sigma Corporation © 2022 | <a  className="link-primary" style={{cursor:"pointer"}} onClick={()=>{termsandconditionpage()}}>Terms & Conditions</a> | <a  className="link-primary" style={{cursor:"pointer"}} onClick={()=>{privacypolicypage()}}>Privacy Policy</a> </p>
    </div>)
}

export default Footer