// Components/Navbar.js
import React from 'react';
import loginIcon from '../res/login.png'; // Update the path to your image

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-title">Athletics</div>
      <ul>
        <li><a href="#">News</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Results</a></li>
        <li><a href="#">Coaches</a></li>
        <li><a href="#">Athletes</a></li>
        <li>
          <a href="#">
            <img 
              src={loginIcon} 
              alt="Login" 
              style={{ 
                width: '20px', // Adjust width to your liking
                height: '20px', // Adjust height to your liking
                marginRight: '5px', 
                verticalAlign: 'middle' 
              }} 
            />
            Login
          </a>
        </li>
        <li><a href="#">Sign Up</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
