function ProfileDropdown(props) {

    const logout = () => {
        localStorage.clear();
        window.location.href = "/"
    }

    return (
        <div className="dropstart">
          <div data-bs-toggle="dropdown" aria-expanded="false">
             <img src={props?.user?.imageUrl} alt="Avatar" className="avatar"/>
             <div>{props?.user?.name}</div>
          </div>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li className="dropdown-item" onClick={()=>{logout()}}><i class="bi bi-power"></i> Logout</li>
          </ul>
        </div>
    )
}

export default ProfileDropdown