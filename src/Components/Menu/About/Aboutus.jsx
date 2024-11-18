import React from 'react';
import './Aboutus.css';
import Last from '../../Footer/Foot/Last';
import Team1 from './team1.jpg'
import Team2 from './team2.jpg'
import Team3 from './team3.jfif'

function Aboutus() {
  return (
    <>
    <header class="about-header">
        <h1>About Our Blogging Platform</h1>
        <p>
            Welcome to our platform, where stories come alive! We believe in empowering creators to inspire and connect through their unique voices.
        </p>
    </header>

    <section class="mission-vision">
        <div class="mission">
            <h2>Our Mission</h2>
            <p>
                To create an engaging and inclusive platform where bloggers and readers alike can share and connect through powerful storytelling.
            </p>
        </div>
        <div class="vision">
            <h2>Our Vision</h2>
            <p>
                To be the go-to destination for thought leadership, creativity, and community building in the blogging world.
            </p>
        </div>
    </section>

    <section class="team">
        <h2>Meet the Team</h2>
        <div class="team-members">
            <div class="team-member">
                <img src={Team1} alt="John Doe" class="team-img" />
                <h3>Mary Su</h3>
                <p>Founder & CEO</p>
            </div>
            <div class="team-member">
                <img src={Team2} alt="Jane Smith" class="team-img" />
                <h3>Elsa Bernad</h3>
                <p>CTO</p>
            </div>
            <div class="team-member">
                <img src={Team3} alt="Mike Brown" class="team-img" />
                <h3>Safra Catz</h3>
                <p>Lead Developer</p>
            </div>
        </div>
    </section>

    < Last />

    </>
  )
}

export default Aboutus