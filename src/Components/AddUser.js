import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";

export  function AddUser({user,setUser}){
    const history=useHistory();
    const [name,setName]=useState("");
    const[id,setId]=useState("");
    const[email,setEmail]=useState("");
    const[experience,setExperience]=useState();
    const[batch,setBatch]=useState("")

const addNewUser=()=>{
    const newUser={
        id,
        name,
        email,
        experience,
        batch
    }
    
    setUser([...user,newUser]);
    history.push("/")
    setId("");
    setName("");
    setEmail("");
    setExperience("");
    setBatch("");
}

    return(
        <BaseApp
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
          <input placeholder="batch"
          value={batch}
          type="text"
          onChange={(event)=>setBatch(event.target.value)}
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
        </BaseApp>
       
    )
}