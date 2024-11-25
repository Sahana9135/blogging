import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import Image1 from './img1.jpg';
import Image2 from './img2.jpg';
import Image3 from './img3.jpg';
import Image4 from './img4.jpg';
import Image5 from './img5.jpg';
import Image6 from './img6.jpg';
import Image7 from './img7.jpg';
import Image8 from './img8.jpg';


function Service() {
    return (
        <>
            <header class="services-header">
                <h1>Our Services</h1>
                <p>We offer a variety of services to meet your needs and help you succeed.</p>
            </header>

            <section class="services-container">
                <div class="service-card">
                    <div class="service-icon">
                        <img src={Image1} alt="Content Writing" />
                    </div>
                    <h2>Content Writing</h2>
                    <p>
                        High-quality, SEO-optimized content to elevate your brand and engage your audience.
                    </p>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <img src={Image2} alt="Web Design" />
                    </div>
                    <h2>Web Design</h2>
                    <p>
                        Modern and responsive website designs tailored to your business needs.
                    </p>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <img src={Image3} alt="SEO Optimization" />
                    </div>
                    <h2>SEO Optimization</h2>
                    <p>
                        Drive more traffic to your website with our expert SEO services.
                    </p>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <img src={Image4} alt="Social Media Management" />
                    </div>
                    <h2>Social Media Management</h2>
                    <p>
                        Build and grow your online presence with our social media strategies.
                    </p>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <img src={Image5} alt="User Authentication" />
                    </div>
                    <h2>User Authentication</h2>
                    <p>
                        It ensures secure access by verifying and identifying legitimate users.
                    </p>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <img src={Image6} alt="Responsive Web Design" />
                    </div>
                    <h2>Responsive Web Design</h2>
                    <p>
                        Responsive web design adapts website content for optimal viewing on any device.
                    </p>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <img src={Image7} alt="Dynamic UI" />
                    </div>
                    <h2>Dynamic UI</h2>
                    <p>
                        A dynamic UI adjusts visible fields based on user-specific conditions.
                    </p>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <img src={Image8} alt="Database Integration" />
                    </div>
                    <h2>Database Integration</h2>
                    <p>
                        A successful blog thrives on a well-designed database managing content and user interactions.
                    </p>
                </div>

            </section>

            <section class="cta">
                <h2>Need Our Expertise?</h2>
                <p>Contact us today to learn more about how we can help your business grow.</p>
                <Link to="/contact" class="cta-button">Contact Us</Link>
            </section>

        </>
    )
}

export default Service;