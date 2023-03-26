import React from "react";
import { useHistory } from "react-router-dom";


export function Nopage(){
    const history=useHistory();
    return(
<div>

    <h1>Oops 404 ERROR  </h1>
        <button
      onClick={()=>history.push("/")}  >
Dashboard
        </button>
  
</div>
    )
}