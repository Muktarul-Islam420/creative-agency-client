import React from 'react';
import './ServiceMain.css'
const ServiceMain = ({orderedItem}) => {

    return (
        <div className="col-md-6">
            <div className="order-list-container">
                <div className="">
                    <img className="review-img" src={orderedItem.image} alt=""/>
                    <button className="btn btn-success">Done</button>
                </div>
                <h5 className="">{orderedItem.name}</h5>
                <p className="text-secondary">{orderedItem.details}</p>
            </div>
          
        </div>
    );
};

export default ServiceMain;