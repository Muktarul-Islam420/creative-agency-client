import React from 'react';
import { Link } from 'react-router-dom';
import { FcPortraitMode, FcPlus,FcTodoList } from "react-icons/fc";
import {RiUploadCloudLine} from "react-icons/ri"
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const MakeAdmin = () => {
    return (
        <>
        <AdminNavbar></AdminNavbar>
        <div className="order-page-container">
            <div className="row">
                <div className="col-md-2">
                    <div className="menu-list">
                        <Link to="/serviceList" style={{textDecoration:'none'}}>
                        <div className="menu-list-item d-flex">
                            <FcTodoList  size="2em"/>
                            <h6 className="ml-2">Service list</h6>
                        </div>
                        </Link>

                        <Link to="/addService"style={{textDecoration:'none'}}>
                        <div className="menu-list-item d-flex">
                            <FcPlus  size="2em"/>
                            <h6  className="ml-2">Add service</h6>
                        </div>
                        </Link>

                        
                        <div className="menu-list-item d-flex">
                        <FcPortraitMode size="2em"/>
                        <h6 className="ml-2">Make Admin</h6>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="order-input-container">
                        <br/>
                        <br/>
                        <form className="form Form" action="">
                            <br/>
                            <br/>
                            <div style={{marginLeft: '40px'}} className="d-flex">

                                <div>
                                <label htmlFor="email"><strong>Email</strong></label>
                                <br/>
                            <input  style={{ width:'400px',height:'50px'}} type="text" name=""  placeholder="Akash@gmail.com" id="email"/>
                                </div>

                                <div>
                                <button style={{marginLeft:'10px', width:'100px', marginTop:'40px', height:'auto'}} className="btn btn-success">Send</button>
                                </div>
                            </div>
                           
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
        </> 
    );
};

export default MakeAdmin;