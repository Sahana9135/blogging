import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';
import Alt from '../Header/Alter/Alt';


function Signin() {
  return (
    <>
    <Alt />
    <section id="signin-section" class="signin-section">
        <div className="scontainer">
        <h2>Signin by Your Account</h2><br />
        <ul className ="ssign">
            <li><button><Link to="/google"><i class="fa-brands fa-google fa-lg"></i>&nbsp;&nbsp;&nbsp;Sign Up with Google</Link></button></li>
            <br /> 
            <li><button><Link to="/facebook">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-brands fa-facebook fa-lg"></i> &nbsp;&nbsp;Sign Up With Facebook</Link></button></li> 
            <br />      
            <li><button><Link to="/email"><i class="fa-solid fa-envelope fa-lg"></i>&nbsp;&nbsp;&nbsp;&nbsp;Sign Up with Email</Link></button></li>
        </ul>
       
        </div>
        </section>
        </>
    
  )
}

export default Signin;