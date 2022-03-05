function SearchBox() {

    const gotoSearchResultPage = () => {
        window.location.href = "/nearme"
    }

    return (<div className="row searchbox">
        <div className="col-md-5 mx-auto">
            <div className="input-group">
                <input className="form-control border-end-0 border rounded-pill shadow-none" type="text" placeholder="Search nearby" />
                <span className="input-group-append">
                    <button className="btn btn-outline border-bottom-0 border rounded-pill searchicon" type="button">
                        <i className="bi bi-search"></i>
                    </button>
                </span>
            </div>
            <ul className="list-group searchresult">
                <li className="list-group-item searchitem" onClick={() => { gotoSearchResultPage() }}><i className="bi bi-search"></i>Restourants near me</li>
                <li className="list-group-item searchitem"><i className="bi bi-search"></i>Dapibus ac facilisis in</li>
                <li className="list-group-item searchitem"><i className="bi bi-search"></i>Morbi leo risus</li>
                <li className="list-group-item searchitem"><i className="bi bi-search"></i>Porta ac consectetur ac</li>
                <li className="list-group-item searchitem"><i className="bi bi-search"></i>Vestibulum at eros</li>
            </ul>
        </div>
    </div>)
}

export default SearchBox