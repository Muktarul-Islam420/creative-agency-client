import React from 'react';
import './AdminNavbar.css'
const AdminNavbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light " >
                <a class="navbar-brand" href="/">
                <img src="https://img.techpowerup.org/201013/logo.png" class="fluid nav-img" alt=""/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav app-bar mr-auto">
                    <li class="nav-item active" style={{marginRight:'1000px'}}>
                    <a  class="navLink"><strong>Add Service </strong><span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active" >
                    <a class="navLink">
                        <div className="user d-flex">
                            <img src="https://img.techpowerup.org/201014/customer-1632.png" className="user-img" alt=""/>
                            <p className="mt-2 ml-2 text-primary"><strong>Khalifa</strong></p>
                        </div>
                        <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
                
                </div>
            </nav>
      </div>
    );
};

export default AdminNavbar;