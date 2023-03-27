import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp4 from "../Core/Base4";

export  function AddUser1({user1,setUser1}){
    const history=useHistory();
    const [name,setName]=useState("");
    const[id,setId]=useState("");
    const[email,setEmail]=useState("");
    const[experience,setExperience]=useState();
   

const addNewUser=()=>{
    const newUser1={
        id,
        name,
        email,
        experience,
      
    }
    
    setUser1([...user1,newUser1]);
    history.push("/teacher/details")
    setId("");
    setName("");
    setEmail("");
    setExperience("");
    
   
}

    return(
        <BaseApp4
        title={"Add a new User"}
        >
        
 <div className="inputs">
          
          <input placeholder="id" 
          valur={id}
          type="text"
          onChange={(event)=>setId(event.target.value)}
          />

          <input placeholder="name"
          value={name}
          type="text"
          onChange={(event)=>setName(event.target.value)}
          />
         
          
          <input placeholder="email" 
          value={email}
          type="text"
          onChange={(event)=>setEmail(event.target.value)}
          />

          <input placeholder="experience"
          value={experience}
          type="number"
          onChange={(event)=>setExperience(event.target.value)}
          />

          <button 
          onClick={addNewUser}>Add</button>

    
  </div>
        </BaseApp4>
       
    )
}