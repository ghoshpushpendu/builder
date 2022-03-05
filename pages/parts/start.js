import SearchBox from "./searchbox"
function Start() {
    return (<div className="container-fluid">
        <SearchBox></SearchBox>
        <div className="row mt-5">
            <div className='col'>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top img-fluid" src="./images/pharmacy.svg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Pharmacy</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top img-fluid" src="./images/shopping.svg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Grocery</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top img-fluid" src="./images/food.svg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Restourant</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top img-fluid" src="./images/onlineshopping.svg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Online Shopping</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Start