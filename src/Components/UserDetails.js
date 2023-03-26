import React from "react";
import BaseApp from "../Core/Base";
import { useParams } from "react-router-dom";

export  function UserDetails({user}){
    const{id}=useParams();
   const person=user[id]
    return(
    <BaseApp
    title={"User details"}
    >
     <div className="user-content"> 
          
          
            <div   className="user-card">
                <h1>{person.name}</h1>
                <p>Batch:{person.batch}</p>
                <p>Email:{person.email}</p>
                <p>Experience:{person.experience}</p>
               </div>
            </div>
    </BaseApp>


    )
}