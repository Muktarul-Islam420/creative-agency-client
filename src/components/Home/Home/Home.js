import React from 'react';
import './Home.css'
import Navbar from '../../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import Clients from '../Clients/Clients';
import Service from '../Services/Services';
import WorkExample from '../WorkExample/WorkExample';
import Feedback from '../Feedback/Feedback';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
             <Navbar></Navbar>
            <Header></Header>
            <Clients></Clients>
            <Service></Service>
            <WorkExample></WorkExample>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;