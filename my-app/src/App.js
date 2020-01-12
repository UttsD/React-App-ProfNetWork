import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Profile from './components/Profile/Profile';


import {Route, BrowserRouter} from 'react-router-dom'
import BlogContainer from './components/Blog/BlogContainer';
import ConversationsContainer from './components/Conversations/ConversationsContainer';

const App = (props) => {
  
  return (
   <div className = 'app-wrapper'>
     <Header />
     <Banner />
     
     <div class="container">
  <Route path = "/profile" render = {() => <Profile />}/>
    
  <Route path = "/profile" render = {() => <BlogContainer />}/> 
  <Route path = "/conversations" render = {() => <ConversationsContainer />}/>
     </div> 
     
     </div>
  );
}





export default App;
