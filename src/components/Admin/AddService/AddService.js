import React from 'react';
import './AddService.css'
import { FcPortraitMode, FcPlus,FcTodoList } from "react-icons/fc";
import {RiUploadCloudLine} from "react-icons/ri"

import { Link } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
const AddService = () => {
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

                        <div className="menu-list-item d-flex">
                            <FcPlus  size="2em"/>
                            <h6  className="ml-2">Add service</h6>
                        </div>
                       

                        <Link to="/makeAdmin"style={{textDecoration:'none'}}>
                        <div className="menu-list-item d-flex">
                        <FcPortraitMode size="2em"/>
                        <h6 className="ml-2">Make Admin</h6>
                        </div>
                        </Link>
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
                            <label htmlFor="title"><strong>Service Title</strong></label>
                            <br/>
                           <input  style={{ width:'250px',height:'50px'}} type="text" name=""  placeholder="Enter Title" id="title"/>
                            </div>
                           
                          <div>
                              <label htmlFor="uploadBtn" className="ml-4"><strong>Icon</strong></label>
                              <br/>
                          <div className="upload-btn d-flex ml-2" id="uploadBtn">
                           <RiUploadCloudLine size="2em"className="mt-2 ml-2 mr-2 text-success"/>
                           <p className="mt-2 text-success">Upload Image</p>
                           </div>
                          </div>

                           </div>
                            <br/>
                            <input style={{ width:'500px',height:'200px', marginLeft:'40px' }} type="text" name=""  placeholder="Enter Designation" id=""/>
                            <br/>
                        </form>
                        <br/>
                        <button style={{marginLeft:'940px', width:'100px'}} className="btn btn-success">Send</button>
                    </div>
                </div>
            </div>
        </div>
        </>    
    );
};

export default AddService;