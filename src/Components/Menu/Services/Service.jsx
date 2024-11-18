import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

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
                <img src="content-writing-icon.png" alt="Content Writing" />
            </div>
            <h2>Content Writing</h2>
            <p>
                High-quality, SEO-optimized content to elevate your brand and engage your audience.
            </p>
        </div>

        <div class="service-card">
            <div class="service-icon">
                <img src="web-design-icon.png" alt="Web Design" />
            </div>
            <h2>Web Design</h2>
            <p>
                Modern and responsive website designs tailored to your business needs.
            </p>
        </div>

        <div class="service-card">
            <div class="service-icon">
                <img src="seo-icon.png" alt="SEO Optimization" />
            </div>
            <h2>SEO Optimization</h2>
            <p>
                Drive more traffic to your website with our expert SEO services.
            </p>
        </div>

        <div class="service-card">
            <div class="service-icon">
                <img src="social-media-icon.png" alt="Social Media Management" />
            </div>
            <h2>Social Media Management</h2>
            <p>
                Build and grow your online presence with our social media strategies.
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

export default Service