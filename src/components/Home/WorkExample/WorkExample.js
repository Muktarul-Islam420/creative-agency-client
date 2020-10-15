
import React, { useState } from 'react';
import './WorkExample.css'
import Carousel from 'react-bootstrap/Carousel'
const WorkExample = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (

        <div className="all-carousel-container" style={{ background:'#111430', height:'800px'}}>
            <div  className="carousel-text-container text-center">
                <br/>
                <br/>
                <br/>
                <h2 style={{color:'#fff'}}>Here are some of <span style={{color: '#7ab259'}}>Our Works</span></h2>
            </div>
                <br/>
                <br/>
            <div className="carousel-container">
                <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 carouselImg"
                        src="https://img.techpowerup.org/201013/carousel-1.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3 className="text-primary">Book Seller</h3>
                        <p className="text-success"><i>Book seller is our mobile apps for Android & iOS</i></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 carouselImg"
                        src="https://img.techpowerup.org/201013/carousel-2.png"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3 className="text-primary">Travel Guru</h3>
                        <p className="text-success"><i>Travel Guru is our Travel agency webPage.</i></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 carouselImg"
                        src="https://img.techpowerup.org/201013/carousel-3.png"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3 className="text-danger">Learning with <span className="text-success"><strong>Programming Hero team</strong></span> </h3>
                        <p className="text-success">
                       <i> Learning with programming hero team is our education base platform project.</i>
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default WorkExample;