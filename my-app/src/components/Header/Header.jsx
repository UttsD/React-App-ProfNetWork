import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className="container">
      <header className={styles.header}>
        <div className="logo">
          <a href="#"><img src="../public/logo.png" alt="logo"></img></a>
        </div>
        <div className={styles.top_menu}>
          <nav alt = "nav-menu">
            <ul>
              <li className="link-menu"><a href="#">Home</a></li>
              <li className="link-menu"><a href="#">Proffessionals</a></li>
              <li className="link-menu"><a href="#">Pages</a></li>
              <li className="link-menu active"><a href="#">User profile</a></li>
              <li className="link-menu"><a href="#">Blog</a></li>
            </ul>
          </nav>

        </div>
      </header>
    </div>
  );
};

export default Header;