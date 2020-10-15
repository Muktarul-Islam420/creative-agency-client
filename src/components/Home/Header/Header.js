import React from 'react';

import './Header.css'
const Header = () => {
    return (
        <header>
          
            <div className="header-container">
           
                <div className="row">
                    <div className="col-md-4">
                       <div className="text-area text-center">
                       <h1 style={{color:'#111430'}}>Let's Grow Your <br/>Brand To The <br/> Next Level</h1>
                        <p className="text-secondary mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora magni quae amet dolorem nam consequatur ratione eveniet nulla dolorum ipsum?</p>
                        <button className="btn btn-dark">Hire Us</button>
                       </div>
                    </div>
                    <div className="col-md-8 text-center">
                       <div style={{marginTop:'80px'}}>
                           <img className="img-fluid " src="https://img.techpowerup.org/201013/frame.png" alt=""/>
                       </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;