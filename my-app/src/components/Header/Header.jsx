import React from 'react';
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  return ( <>
    <div className="container">
      <header className={styles.header}>
        <div className="logo">
          <a href="#"><img src="../../../logo.png" alt="logo"></img></a>
        </div>
        <div className={styles.top_menu}>
          <nav alt = "nav-menu">
            <ul>
              <li className="link-menu"><NavLink to="/profile">Home</NavLink></li>
              <li className="link-menu"><NavLink to="/users">Proffessionals</NavLink></li>
              <li className="link-menu"><a href="#">Pages</a></li>
              
              <li className="link-menu"><a href="#">Blog</a></li>
              {props.isAuth? <li className="link-menu active"><NavLink to="/login">Log Out</NavLink></li> : <li className="link-menu active"><NavLink to="/login">Log In</NavLink></li>}
              
            </ul>
          </nav>

        </div>
      </header>
    </div>
    
    </>
  );
};

export default Header;