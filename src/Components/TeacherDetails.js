import React from "react";
import { useParams } from "react-router-dom";
import BaseApp4 from "../Core/Base4";

export  function TeacherDetails({user1}){
    const{id}=useParams();
   const person=user1[id]
    return(
    <BaseApp4
    title={"User details"}
    >
     <div className="user-content"> 
          
          
            <div   className="user-card">
                <h1>{person.name}</h1>
                <p>Email:{person.email}</p>
                <p>Experience:{person.experience}</p>
               </div>
            </div>
    </BaseApp4>


    )
}