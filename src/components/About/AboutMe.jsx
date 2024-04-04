import React from 'react';
import './AboutMe.css';
import profileImage from '../../../public/Profile2.jpg'; 

const AboutMe = ({ darkMode }) => {
  return (
    <section id="about-me">
        <section className={`about-me ${darkMode ? 'dark-mode' : ''}`}>
        <h1 className="about-me-header">About Me</h1>
        <div className="about-me-cards">
            <div className="about-me-image-container">
            <img src={profileImage} alt="John Smith" className="profile-image" />
            </div>
            <div className="about-me-card">
            <h2>Hi, I am Mohamed Ali</h2>
            <h3>Graphic Designer and A Front end Developer</h3>
            <p>I have a strong interest in both computing and graphic design, a talent I am always honing. I devote the majority of my time to improving my talents, whether that be through job or other activities. Greetings, and thank you for visiting my profile. you can get here some of the projects I have completed that I hope will impress you.</p>
            <div className="buttons">
                <button className="bttn">Download CV</button>
                <a href="https://github.com/IbnuAlii" className="link-button"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/feed/" className="link-button"><i className="fab fa-linkedin-in"></i></a>
            </div>
            </div>
        </div>
        </section>
    </section>
  );
};

export default AboutMe;
