import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Core/Base";

const EditUser=({user,setUser})=>{
    const history=useHistory();
    const [name,setName]=useState("");
    const[idx,setIdx]=useState("");
    const[email,setEmail]=useState("");
    const[experience,setExperience]=useState();
    const[batch,setBatch]=useState("")

    const {id}=useParams();
   
    const selectUser=user.find((per)=>per.id===id)

    useEffect(()=>{
        setIdx(selectUser.id)
        setName(selectUser.name)
        setBatch(selectUser.batch)
        setEmail(selectUser.email)
        setExperience(selectUser.experience)
    },[]);


const updateUser=()=>{
    const editIndex=user.findIndex(per=>per.id===id);
    
    const editedData={ 
        id:idx,
        name,
        batch,

        email,
        experience
    }
user[editIndex]=editedData;
setUser([...user])
history.push("/")

console.log(user);
}

    return(
        <BaseApp
        title={"Edit the user details"}
        >
        
 <div className="inputs">
          
          <input placeholder="id" 
          valur={idx}
          type="text"
          onChange={(event)=>setIdx(event.target.value)}
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
          onClick={updateUser}>Edit</button>

    
  </div>
        </BaseApp>
    )
}


export default EditUser