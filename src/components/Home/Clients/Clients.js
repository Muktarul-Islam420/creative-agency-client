import React from 'react';
import './Clients.css'
const Clients = () => {
    return (
        <main className="clients-container">

            <div className="row">
                <div className="col-md-2 mr-2">
                    <img src="https://img.techpowerup.org/201013/slack.png" className="w-100 " alt=""/>
                    </div>
                <div className="col-md-2 mr-2">
                    <img src="https://img.techpowerup.org/201013/google.png"className="w-100 " alt=""/>
                    </div>
                <div className="col-md-2">
                    <img src="https://img.techpowerup.org/201013/uber.png"className="w-100 " alt=""/>
                    </div>
                <div className="col-md-2">
                    <img src="https://img.techpowerup.org/201013/netflix.png"className="w-100 "  alt=""/>
                    </div>
                <div className="col-md-2">
                    <img src="https://img.techpowerup.org/201013/airbnb.png"className="w-100 " alt=""/>
                    </div>
            </div>
        </main>
    );
};

export default Clients;