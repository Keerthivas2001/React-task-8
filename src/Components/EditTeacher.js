import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp4 from "../Core/Base4";

const EditTeacher=({user1,setUser1})=>{
    const history=useHistory();
    const [name,setName]=useState("");
    const[idx,setIdx]=useState("");
    const[email,setEmail]=useState("");
    const[experience,setExperience]=useState();

    const {id}=useParams();
   
    const selectUser=user1.find((per)=>per.id===id)

    useEffect(()=>{
        setIdx(selectUser.id)
        setName(selectUser.name)
        setEmail(selectUser.email)
        setExperience(selectUser.experience)
    },[]);


const updateUser=()=>{
    const editIndex=user1.findIndex(per=>per.id===id);
    
    const editedData={ 
        id:idx,
        name,
        email,
        experience
    }
user1[editIndex]=editedData;
setUser1([...user1])
history.push("/teacher/details")

console.log(user1);
}

    return(
        <BaseApp4
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
        </BaseApp4>
    )
}


export default EditTeacher