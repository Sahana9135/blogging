import React from 'react';
import './Last.css';
import { Link } from 'react-router-dom';

function Last() {
  return (
    <>
      <footer id="footer" class="footer">
        <div class="footer-container">


          {/* <!-- Services Section --> */}
          <div class="footer-section">
            <h3>Our Services</h3>
            <ul>
              <li><a href="#">Blogging Platform</a></li>
              <li><a href="#">Content Creation Tools</a></li>
              <li><a href="#">Community Support</a></li>
              <li><a href="#">Monetization Options</a></li>
            </ul>
          </div>

          {/* <!-- Quick Links Section --> */}
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li><br />
              <li><Link to="/about">About</Link></li><br />
              
              <li><Link to="/contact">Contact</Link></li><br />
              <li><Link to="/">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>
        {/* <!-- Social Media Section --> */}

        <div class="footer-icons">
          {/* <center> <h3>Follow Us</h3></center> */}
          <div class="social-icons">
            <a href="https://www.facebook.com/" class="social-icon" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://x.com/?lang=en" class="social-icon" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/" class="social-icon" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/sahanasaravanan9135/" class="social-icon" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://www.youtube.com/watch?v=943D7U74_sQ&t=1823s" class="social-icon" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2024 Blogging Platform. All Rights Reserved.</p>
        </div>
      </footer>


    </>
  )
}

export default Last;