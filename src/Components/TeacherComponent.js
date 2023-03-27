import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import BaseApp2 from "../Core/Base2";


export default function TeacherComponent({user1,setUser1}){
    const history=useHistory();

    const deleteUser=(idx)=>{
        const alterList=user1.filter((per,id)=>per.id!=idx)
  setUser1(alterList);
    }

    return(
    
    <BaseApp2
    
        title="User Details">  
          <div className="user-content"> 
          
          {user1.map((person,idx)=>(
            <div key={idx} className="user-card">
                <h1>{person.name}</h1>
                <p>Email:{person.email}</p>
                <p>Experience:{person.experience}</p>
                <div className="btn-grp">
                    <button className="btn edit-btn"
                     onClick={()=>history.push(`/edits/${person.id}`)}>Edit</button>
                    <button className="btn view-btn" 
                       onClick={()=>history.push(`/users/${idx}`)}>View</button>
                    <button className="btn del-btn"
                    onClick={()=>deleteUser(person.id)}>Delete</button>
                    
                </div>
            </div>
          ))}
          </div>
       </BaseApp2>
     

    )
}