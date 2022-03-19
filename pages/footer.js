function Footer() {

    const termsandconditionpage = () => {
      window.location.href = "/termsandconditions"
    }

    const privacypolicypage = () => {
      window.location.href = "/privacypolicy"
    }

    return (<div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 item text">
                        <h3>The Sigma Corporation</h3>
                        <p>Reg Office : Pushpendu Ghosh, Vill PO Bhota PS Ausgram Dist Burdwan PIN 713141</p>
                    </div>
                    <div className="col item social"><a href="https://www.facebook.com/thesigmacorporation" target="_blank"><i className="bi bi-facebook"></i></a><a href="#"><i className="bi bi-twitter"></i></a><a href="https://wa.me/919734072595" target="_blank"><i className="bi bi-whatsapp"></i></a><a href="https://www.linkedin.com/company/thesigma" target="_blank"><i className="bi bi-linkedin"></i></a></div>
                </div>
                <p className="copyright">The Sigma Corporation © 2021 | <a  className="link-primary" style={{cursor:"pointer"}} onClick={()=>{termsandconditionpage()}}>Terms & Conditions</a> | <a  className="link-primary" style={{cursor:"pointer"}} onClick={()=>{privacypolicypage()}}>Privacy Policy</a> </p>
            </div>
        </footer>
    </div>)
}

export default Footer