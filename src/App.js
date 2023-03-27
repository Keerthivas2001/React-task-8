import './App.css';
import UserComponent from './Components/UserComponent';
import BaseApp from './Core/Base';
import { Redirect, Route,Switch } from 'react-router-dom';
import { AddUser } from './Components/AddUser';
import {AddUser1} from'./Components/Adduser1';
import { data } from './Data/data';
import { data1 } from './Data/data1';
import { useState } from 'react';
import { Nopage } from './Components/NoPage';
import { UserDetails } from './Components/UserDetails';
import EditUser from './Components/EditUser';
import UserHomePage from './Components/UserHomePage';
import TeacherComponent from './Components/TeacherComponent';
import EditTeacher from './Components/EditTeacher';
import { TeacherDetails } from './Components/TeacherDetails';

export default function App() {
const [user,setUser]=useState(data);
const [user1,setUser1]=useState(data1)
  return (
    <div className="App">

<Switch>
  <Route exact path="/">
 <UserHomePage/>
  </Route>

 <Route path="/student/details">
  <UserComponent
  user={user}
  setUser={setUser}/>
</Route>

<Route path="/teacher/details">
  <TeacherComponent
  user1={user1}
  setUser1={setUser1}/>
 </Route>

  <Route path= "/add/user">
  <AddUser
    user={user}
    setUser={setUser} />
  </Route>

  <Route path= "/add/teachers">
  <AddUser1
    user1={user1}
    setUser1={setUser1} />
  </Route>

  <Route path="/user/:id">
<UserDetails
user={user}
setUser={setUser}/>
</Route>

<Route path="/users/:id">
<TeacherDetails
user1={user1}
setUser1={setUser1}/>
</Route>


<Route path="/page">
<Redirect path="/"/>
</Route>


<Route path= "/edit/:id">
 <EditUser
 user={user}
 setUser={setUser}/>
  </Route>

  <Route path= "/edits/:id">
 <EditTeacher
 user1={user1}
 setUser1={setUser1}/>
  </Route>

  <Route path="**">
<Nopage/>
  </Route>




</Switch>



    
    </div>
  );
}