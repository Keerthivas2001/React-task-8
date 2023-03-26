import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";
import { data } from "../Data/data.js";
import { AddUser } from "./AddUser";

export default function UserComponent({user,setUser}){
    const history=useHistory();

    const deleteUser=(idx)=>{
        const alterList=user.filter((per,id)=>per.id!=idx)
  setUser(alterList);
    }

    return(
    
    <BaseApp
        title="User Details">  
          <div className="user-content"> 
          
          {user.map((person,idx)=>(
            <div key={idx} className="user-card">
                <h1>{person.name}</h1>
                <p>Batch:{person.batch}</p>
                <p>Email:{person.email}</p>
                <p>Experience:{person.experience}</p>
                <div className="btn-grp">
                    <button className="btn edit-btn"
                     onClick={()=>history.push(`/edit/${person.id}`)}>Edit</button>
                    <button className="btn view-btn" 
                       onClick={()=>history.push(`/user/${idx}`)}>View</button>
                    <button className="btn del-btn"
                    onClick={()=>deleteUser(person.id)}>Delete</button>
                    
                </div>
            </div>
          ))}
          </div>
       </BaseApp>
     

    )
}