import React from "react";
import { useHistory } from "react-router-dom";
import BaseApp1 from "../Core/Base1";




export default function UserHomePage(){
const history=useHistory();
    return(
      <BaseApp1
        title="User Details"> 
     
        <div className="user-content"> 
        
                      
        <div className="user-card">
          <h1 className="card">Students</h1>
          <button className="card-btn" onClick={()=>history.push("/student/details")}> VIEW </button>
        </div>
      

     
        <div className="user-card">
        <h1 className="card">Teachers</h1>
        <button className="card-btn" onClick={()=>history.push("/teacher/details")}> VIEW </button>
        </div>
     

        </div>

        </BaseApp1>
    )
}

