import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Shared/Navbar/Navbar';
import Home from './components/Home/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';

import ServiceList from './components/OrderPage/ServiceList/ServiceList';
import OrderPage from './components/OrderPage/OrderPage/OrderPage';
import Review from './components/OrderPage/Review/Review';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
function App() {
  return (
    <div>
    <Router>
        <Switch>
          <Route path="/home">
          <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/order">
            <OrderPage/>
          </Route>
          <Route path="/addService">
            <AddService/>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin/>
          </Route>
          <Route path="/review">
              <Review/>
            </Route>
          <Route path="/service">
            <ServiceList/>
          
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="*">
            <NotFound/>
          </Route>
        </Switch>
    </Router>
    
    
    </div>
  );
}

export default App;
