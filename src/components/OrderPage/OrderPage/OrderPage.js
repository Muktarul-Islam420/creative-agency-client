import React from 'react';
import './OrderPage.css'
import { FcSms, FcList } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {RiUploadCloudLine} from "react-icons/ri"

import { Link } from 'react-router-dom';
import Appsbar from '../../Shared/Appsbar/Appsbar';
const OrderPage = () => {

    return (
        <>
        <Appsbar></Appsbar>
        <div className="order-page-container">
            <div className="row">
                <div className="col-md-2">
                    <div className="menu-list">
                        <div className="menu-list-item d-flex">
                            <AiOutlineShoppingCart  size="2em"/>
                            <h6 className="ml-2">Order</h6>
                        </div>
                        <Link to="/service" style={{textDecoration:'none'}}>
                        <div className="menu-list-item d-flex">
                            <FcList  size="2em"/>
                            <h6  className="ml-2">Service list</h6>
                        </div>
                        </Link>

                        <Link to="/review"style={{textDecoration:'none'}}>
                        <div className="menu-list-item d-flex">
                        <FcSms size="2em"></FcSms>
                        <h6 className="ml-2">Review</h6>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="order-input-container">
                        <br/>
                        <br/>
                        <form className="form " action="">
                            <input type="text" name="name" className="input mb-2" placeholder="Enter your Name/Company's Name" id=""/>
                            <br/>
                            <input type="email" name="email" className="input mb-2"   placeholder="Your email address" id="email"/>
                            <br/>
                            <input type="text" name="" className="input mb-2" placeholder="Web design"id=""/>
                            <br/>
                            <input style={{ width:'500px',height:'200px'}} type="text" name=""  placeholder="Project Details" id=""/>
                            <br/>
                            <br/>
                           <div className="d-flex">
                           <input  style={{ width:'250px',height:'50px'}} type="text" name=""  placeholder="price" id=""/>
                           <div className="upload-btn d-flex ml-2">
                           <RiUploadCloudLine size="2em"className="mt-2 ml-2 mr-2 text-success"/>
                           <p className="mt-2 text-success">Upload project file</p>
                           </div>
                           
                           </div>
                           <br/>
                           <button className="btn btn-dark">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>    
    );
};

export default OrderPage;