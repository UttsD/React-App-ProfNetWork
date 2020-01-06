import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Blog from './components/Blog';

const App = () => {
  return (
   <div className = 'app-wrapper'>
     <Header />
     <Navbar />
     <Profile />
     <Blog />
     </div>
  );
}





export default App;
