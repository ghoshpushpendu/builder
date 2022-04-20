import { useRouter } from "next/router";

function ProfileDropdown(props:any) {
    const router = useRouter();
    const logout = () => {
        localStorage.clear();
        router.push("/auth/login");
    }

    const replaceImage = (e:any) => {
        e.target.src = "https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg"
    }

    return (
        <div className="dropstart">
          <div data-bs-toggle="dropdown" aria-expanded="false">
             <div>
                <span><img src={props?.user?.imageUrl} onError={(e)=>{
                    replaceImage(e)
                }} alt="Avatar" className="avatar"/></span>
                <span style={{
                    marginTop:"4px",
                    marginLeft:"5px"
                }}>{props?.user?.name}</span>
             </div>
          </div>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li className="dropdown-item" onClick={()=>{logout()}}><i className="bi bi-power"></i> Logout</li>
          </ul>
        </div>
    )
}

export default ProfileDropdown