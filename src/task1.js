


import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import "./task1.css";


function Task() {
  
  
  
    return (
      <div className="App">
          <div className="card">
       <p><b>FREE</b></p>
       <div className="cost">$0<span>/month </span></div>
       <hr></hr>
       <div className="card-body">
       <p className="letters">✔️ Single User</p>
       <p className="letters">✔️ 5GB Storage</p>
       <p className="letters">✔️ Unlimited Public Projects</p>
       <p className="letters">✔️ Community Access</p>
       <p className="letters"><span className="dull">❌ Unlimited Private Projects</span></p>
       <p className="letters"><span className="dull">❌ Dedicated Phone Support</span></p>
       <p className="letters"><span className="dull">❌ Free Subdomain</span></p>
       <p className="letters"><span className="dull">❌ Monthly Status Reports</span></p>
       
       </div>
       <button>BUTTON</button>

     </div>
     <div className="card">
       <p><b>PLUS</b></p>
       <div className="cost">$9<span>/month </span></div>
       <hr></hr>
       <div className="card-body">
       <p className="letters"><span className="bold"> ✔️ 5 Users</span></p>
       <p className="letters">✔️ 50GB Storage</p>
       <p className="letters">✔️ Unlimited Public Projects</p>
       <p className="letters">✔️ Community Access</p>
       <p className="letters">✔️ Unlimited Private Projects</p>
       <p className="letters">✔️ Dedicated Phone Support</p>
       <p className="letters">✔️ Free Subdomain</p>
       <p className="letters"><span className="dull"> ❌ Monthly Status Reports </span></p>
       
       </div>
       <button>BUTTON</button>

     </div>
     <div className="card">
       <p><b>PRO</b></p>
       <div className="cost">$49<span>/month </span></div>
       <hr></hr>
       <div className="card-body">
       <p className="letters">✔️<span className="bold"> Unlimited Users</span></p>
       <p className="letters">✔️ 150GB Storage</p>
       <p className="letters">✔️ Unlimited Public Projects</p>
       <p className="letters">✔️ Community Access</p>
       <p className="letters">✔️ Unlimited Private Projects</p>
       <p className="letters">✔️ Dedicated Phone Support</p>
       <p className="letters">✔️<span className="bold"> Unlimited </span> Free Subdomain</p>
       <p className="letters">✔️ Monthly Status Reports</p>
       
       </div>
       <button>BUTTON</button>

     </div>
     </div>
    
    );
  }
  
  export default Task;
