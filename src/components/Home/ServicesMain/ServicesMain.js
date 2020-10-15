import React from 'react';
import'./ServicesMain.css'
const ServicesMain = ({service}) => {
    return (
        <div className="col-md-4">
           <div className=" service-container ">
               <div className="align-self-center">
               <img src={service.image} className="imgFluid" alt=""/>
                <h5 className="mt-2 mb-2"  style={{color:'#111430'}}>{service.name}</h5>
                <p className="text-secondary">{service.details}</p>
               </div>
           </div>
        </div>
    );
};

export default ServicesMain;