import React from 'react';
import { FcSms, FcList } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {RiUploadCloudLine} from "react-icons/ri"

import { Link } from 'react-router-dom';
import Appsbar from '../../Shared/Appsbar/Appsbar';
const Review = () => {
    return (
        <>
        <Appsbar></Appsbar>
        <div className="order-page-container">
            <div className="row">
                <div className="col-md-2">
                    <div className="menu-list">
                        <Link to="/order"style={{textDecoration:'none'}}>
                        <div className="menu-list-item d-flex">
                            <AiOutlineShoppingCart  size="2em"/>
                            <h6 className="ml-2">Order</h6>
                        </div>
                        </Link>


                        <Link to="/service" style={{textDecoration:'none'}}>
                        <div className="menu-list-item d-flex">
                            <FcList  size="2em"/>
                            <h6  className="ml-2">Service list</h6>
                        </div>
                        </Link>

                        
                        <div className="menu-list-item d-flex">
                        <FcSms size="2em"></FcSms>
                        <h6 className="ml-2">Review</h6>
                        </div>
                       
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="order-input-container">
                        <br/>
                        <br/>
                        <form className="form " action="">
                            <input type="text" name="name" className="input mb-2" placeholder=" Your Name" id=""/>
                            <br/>
                            <input style={{outline:'none'}} type="text" name="" className="input mb-2" placeholder="Company name,designation"id=""/>
                            <br/>
                            <input style={{ width:'500px',height:'200px'}} type="text" name=""  placeholder="Description" id=""/>
                            <br/> 
                           <br/>
                           <button className="btn btn-dark">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>    
    );
};

export default Review;