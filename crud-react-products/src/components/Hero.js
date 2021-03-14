import React from "react";
import {ToastContainer } from 'react-toastify';
import Products from './Products';
import './style/style-login.css'
const Hero = ({handleLogout}) => {
    return(
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button className="buttoncredentials" onClick={handleLogout}>Logout</button>
            </nav>
          <div className="container p-4">

             <Products/>
             <ToastContainer/>
          </div>
        </section>
    );
};

export default Hero;