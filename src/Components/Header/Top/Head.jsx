import React from 'react';
import './Head.css';
import { Link } from 'react-router-dom';

function Head() {
  return (
    <>
    <nav className="navbar">
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blog</h1>
                <ul className="nav-links">
                    <li><Link to="/" title="Landing Page">Home</Link></li>
                    <li><Link to="/" title="You can view a Existing Blogs by click this button">Blogs</Link></li>
                    <li><Link to="/service" title="Services of Explore world by Blogs">Services</Link></li>
                    <li><Link to="/about" title="About this Explore world">About</Link></li>
                    <li><Link to="/contact" title="To fill the form by contact us">Contact</Link></li>
                </ul>
                <ul className="btn">
                    <li><button><Link to="/login">Log In &nbsp;&nbsp;&nbsp;</Link></button></li>
                    <li><button><Link to="/signin">Sign Up &nbsp;&nbsp; &nbsp;</Link></button></li>
                </ul>
            </nav>
    </>
  );
}

export default Head;