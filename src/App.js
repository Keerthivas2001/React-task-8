import './App.css';
import UserComponent from './Components/UserComponent';
import BaseApp from './Core/Base';
import { Redirect, Route,Switch } from 'react-router-dom';
import { AddUser } from './Components/AddUser';
import { data } from './Data/data';
import { useState } from 'react';
import { Nopage } from './Components/NoPage';
import { UserDetails } from './Components/UserDetails';
import EditUser from './Components/EditUser';

export default function App() {
const [user,setUser]=useState(data);
  return (
    <div className="App">

<Switch>
  <Route exact path="/">
  <UserComponent
  user={user}
  setUser={setUser}  />
  </Route>

  <Route path= "/add/user">
  <AddUser
    user={user}
    setUser={setUser} />
  </Route>
  <Route path="/user/:id">
<UserDetails
user={user}
setUser={setUser}/>
</Route>

<Route path="/page">
<Redirect path="/"/>
</Route>


<Route path= "/edit/:id">
 <EditUser
 user={user}
 setUser={setUser}/>
  </Route>
  <Route path="**">
<Nopage/>
  </Route>




</Switch>



    
    </div>
  );
}