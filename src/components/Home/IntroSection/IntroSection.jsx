// IntroSection.js
import React from 'react';
import './IntroSection.css';
import SkillTag from '../SkillTag/SkillTag'; 
import profilePic from '../../../../public/Profile1.ico'; 



const IntroSection = () => {
  return (
    <div className="intro-section">
      <SkillTag text="Webflow Developer" position="left" />
      <SkillTag text="Web Designer" position="right" />

      <div className="intro-section__content">
        <img src={profilePic} alt="Mohamed" className="intro-section__image" />
        <h1>Hi, I’m Mohamed,</h1>
        <h2>A Digital Designer</h2>
        <p>Transforming Your Digital Vision into Reality: Innovative Web Designs by a Professional Web Designer!</p>
        <a href="https://ibnualii.github.io/My-Portfolio/ressume/ressume.html" className="intro-section__cta">Ressume</a>
        <a href="https://github.com/IbnuAlii" className="intro-section__cta"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/feed/" className="intro-section__cta"><i className="fab fa-linkedin-in"></i></a>
        
      </div>
    </div>
    
  );
};

export default IntroSection;
