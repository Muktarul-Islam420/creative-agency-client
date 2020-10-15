import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  const handleLoginButton = () => {
    
  }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light " >
              <a class="navbar-brand" href="/">
                <img src="https://img.techpowerup.org/201013/logo.png" class="fluid navImg" alt=""/>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav-make mr-auto">
                  <li class="nav-item active" >
                    <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">Our Portfolio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">Our Team</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">Contact Us</a>
                  </li>
                 <Link to="/login">
                 <button  class="btn bg-dark text-white" type="submit">login</button>
                 </Link>
                 
                </ul>
              
              </div>
            </nav>
        </div>
    );
};

export default Navbar;