import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { FcLeft } from "react-icons/fc";
const Login = () => {
    const handleGoogleSignIn = () => {
        console.log('click marche');
    }
    return (
        <div className="loginPage-allContainer ">
            <div className="loginPg-logo">
                    <Link>
                    <img src="https://img.techpowerup.org/201013/logo.png" className="" id=""/>
                    </Link>
                </div>
            <div className="login-page-area">
            
                <div className="login-elements">
                
                    <div className="login-text">
                        <br/>
                        <br/>
                    <h2>Login with</h2>
                    </div>
                    <div className="login-btn">
                    <img src = "https://i.ibb.co/xC3RNVs/google.png" className="btn-img" alt = "" />
                    <p className="ml-5 mt-2 text-primary"> <strong>Continue with Google</strong></p>
                    </div>
                    <div className="have-account">
                        <p className="text-danger">Don't have an account? <Link to="/login"> <span className = "text-primary">Create a new account</span></Link></p>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
               <Link to="/"> <FcLeft className="icon" /> </Link>
        </div>
        </div>
    
    );
};

export default Login;