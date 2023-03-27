import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp3({title,styles,children}){
    
    const history=useHistory();
    
    return(
<div>
    <div>
    <div className="nav-bar">
        <span>
            <button className="nav-buttons"
            onClick={()=>history.push("/add/user")}
             >Add User</button>
        </span>
        <span>
        <button className="nav-buttons"
            onClick={()=>history.push("/student/details")}
             >Students Dashboard</button>
        </span>
    </div>
    <div className="title">{title}</div>
    </div>
    <div className="content">{children}
    <footer>Contact us
       <div>Email:react@gmail.com</div>
       <div>phn:1234567890</div>
    </footer>
    </div>
    
</div>

    )
}