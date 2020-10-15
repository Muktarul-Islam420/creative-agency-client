import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="row footer-container">
         
                <div className="col-md-6">
                    <div className="footer-text-container">
                        <h2 className="mb-5">Let us handle your <br/> project,professionally.</h2>
                        <p>With well written codes, we build amazing apps for all <br/> platforms like mobile, web & IOS apps in general</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="footer-input-container">
                        <input type="email" name="email"className="input mb-2" placeholder="Your email address"/>
                        <br/>
                        <input type="text" name="name" className="input mb-2"placeholder="Your name/Company's name" id=""/>
                        <br/>
                        <input type="datetime" name="comment" className="input-comment mb-2" placeholder="Your massage" id="" />
                        <br/>
                        <button className="btn btn-dark">Send</button>
                    </div>
                </div>
          
            <div className="copy-right-container text-center">
    <small style={{marginLeft: '600px'}} className="text-secondary">© copyright MR Express all rights reserved 2020</small>
            </div>
        </div>
    );
};

export default Footer;