import React from 'react';
import { FcSms, FcList } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {RiUploadCloudLine} from "react-icons/ri"
import Appsbar from '../../Shared/Appsbar/Appsbar';
import { Link } from 'react-router-dom';
import ServiceMain from '../ServiceMain/ServiceMain';

const ServiceList = () => {
    const orderedItems = [{
        id: '1',
        name: 'Web & Mobile design',
        image: 'https://img.techpowerup.org/201013/service1224.png',
        details:'We craft stunning and amazing web UI, using a well drafted UX to fit your product'
    },{
        id: '2',
        name: 'Graphic design',
        image: 'https://img.techpowerup.org/201013/service2706.png',
        details:`Amazing flyers, social media
                 posts and brand representations
                that would make your brand 
                    stand out`
    },{
        id: '3',
        name: 'Web development',
        image: 'https://img.techpowerup.org/201013/service3486.png ',
        details:'With well written codes,we build amazing apps for all platforms. Mobile, web & IOS apps in general'
    }
]
    return (
        <>
        <Appsbar></Appsbar>
        <div className="order-page-container">
            <div className="row">
                <div className="col-md-2">
                    <div className="menu-list">
                        <Link to="/order" style={{textDecoration:'none'}}>
                        <div className="menu-list-item d-flex">
                            <AiOutlineShoppingCart  size="2em"/>
                            <h6 className="ml-2">Order</h6>
                        </div>
                        </Link>
                        <div className="menu-list-item d-flex">
                            <FcList  size="2em"/>
                            <h6  className="ml-2">Service list</h6>
                        </div>

                        <Link to="/review" style={{textDecoration:'none'}}>
                        <div className="menu-list-item d-flex">
                        <FcSms size="2em"></FcSms>
                        <h6 className="ml-2">Review</h6>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="right-side-container">
                        
                    <div className="row">
                      {
                          orderedItems.map(orderedItem =><ServiceMain orderedItem={orderedItem} key={orderedItem.id}></ServiceMain>)
                      } 
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>    
    );
};

export default ServiceList;