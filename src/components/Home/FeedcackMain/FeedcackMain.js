import React from 'react';
import './FeedcackMain.css'
const FeedbackMain = ({feedback}) => {
    return (
        <div className ="col-md-4">
            <div className="feedback-sub-container">
               <div className="feedback-box mt-4 ml-2">
                    <div className="feedback-client d-inline-flex">
                    <img src={feedback.image} className="imgFluid" alt=""/>
                    <user className="mt-4 ml-4">
                    <h4 style={{color:'#111430'}}>{feedback.name} </h4>
                    <h6 style={{color:'#111430'}}>{ feedback.title}</h6>
                    </user>
                    </div>
                    <p className="text-secondary">{ feedback.comment}</p>
               </div>
            </div>
        </div>
    );
};

export default FeedbackMain;