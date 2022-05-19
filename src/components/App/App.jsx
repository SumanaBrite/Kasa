import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from '../../components/Footer/Footer';
import Home from '../../views/Home/Home';
import AboutUs from '../../views/AboutUs/AboutUs';
import Housing from '../../views/Housing/Housing';
import Error from '../../views/Error/Error';
import './App.css';

export default function App () {
    return(
    <Router>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="/*" element={<Error />} />
        </Routes>  
        <Footer/>
    </Router>
    )

}
    

