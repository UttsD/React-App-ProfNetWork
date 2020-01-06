import React from 'react';

const Navbar = () => {
    return (
      <div class="profile-banner">
      <div class="container">
      <div class="profile-row">
      <div class="user">
          <h2>User Name</h2>
          <h5>User specialty</h5>
      </div>
      <div class="buttons">
          <div class="rect-buttons">
              
                  <a href="#">
                      <i class="fa fa-share-alt"></i> Connect
                  </a>
              
              
                  <a href="#">
                      <i class="fa fa-user-plus"></i> Share
                  </a>
              
          </div>
          <div class="icon-btns">
              <a href="#">
                  <i class="fa fa-bookmark-o"></i>
              </a>
              <a href="#">
                  <i class="fa fa-envelope-o"></i>
              </a>
              <a href="#">
                  <i class="fa fa-exclamation"></i>
              </a>
          </div>
      </div>
      </div>
  </div>
      
      <div class="profile-menu">
          <ul class="nav">
              <li class="active">Profile</li>
              <li>Jobs</li>
              <li>Contact</li>
              <li>Portfolio</li>
              <li>Blog Posts</li>
              <li>Connections</li>
              <li>Followers (241)</li>
              <li>Following</li>
          </ul>
      </div>

  </div>
    );
};

export default Navbar;