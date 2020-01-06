import React from 'react';

const Header = () => {
  return (
    <div class="container">
      <header class="header">
        <div class="logo">
          <a href="#"><img src="../public/logo.png" alt="logo"></img></a>
        </div>
        <div class="top-menu">
          <nav alt = "nav-menu">
            <ul>
              <li class="link-menu"><a href="#">Home</a></li>
              <li class="link-menu"><a href="#">Proffessionals</a></li>
              <li class="link-menu"><a href="#">Pages</a></li>
              <li class="link-menu active"><a href="#">User profile</a></li>
              <li class="link-menu"><a href="#">Blog</a></li>
            </ul>
          </nav>

        </div>
      </header>
    </div>
  );
};

export default Header;