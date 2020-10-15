import React from 'react';
import ServicesMain from '../ServicesMain/ServicesMain';
import './Services.css'

const Service = () => {
   const services = [{
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
       <div className="services-container">
           <div className="text-center  mb-5">
           <h2 style={{color:'#363136'}}>Provide awesome <span style={{color: '#7ab259'}}>services</span></h2>
           </div>
          
            <div className="row text-center">
            {
                services.map(service =><ServicesMain service={service} key={service.id}></ServicesMain>)
            }
        </div>
       </div>
    );
};

export default Service;