import React from 'react';
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from './components/Users/UsersContainer';

import {Route, BrowserRouter} from 'react-router-dom'
import BlogContainer from './components/Blog/BlogContainer';
import Login from './components/Login/Login';
import ConversationsContainer from './components/Conversations/ConversationsContainer';

const App = (props) => {
  
  return (
   <div className = 'app-wrapper'>
     <HeaderContainer />
     
     <Route path = "/profile/:userID?" render = {() => <ProfileContainer />}/>
     <div class="container">
  
  <Route path = "/profile" render = {() => <BlogContainer />}/>   
  <Route path = "/blog" render = {() => <BlogContainer />}/> 
  <Route path = "/users" render = {() => <UsersContainer />}/> 
  <Route path = "/conversations" render = {() => <ConversationsContainer />}/>
  <Route path = "/login" render = {() => <Login />}/>
     </div> 
     
     </div>
  );
}





export default App;
