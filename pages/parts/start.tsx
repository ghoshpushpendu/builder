const goToCreateApp = () => {
    window.location.href = "/module/createapp"
}

function Start() {
    return (<div className="container-fluid">
        <div className="row mt-5 ms-3">
            <div className='col'>
                <div className="card" style={{ width: "15rem" }} onClick={()=>{goToCreateApp()}}>
                    <i className="bi bi-plus-square-dotted text-center mt-3"></i>
                    <div className="card-body">
                        <h5 className="card-title">Create Application</h5>
                        <p className="card-text">Create an Application From Scratch.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Start