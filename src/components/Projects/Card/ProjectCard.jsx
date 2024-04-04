import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'; 
import './ProjectCard.css';

const projectData = [
  {
    title: 'IEEE-Certificate',
    description: "This directory, 'IEEE Certificate,' Contains IEEE competition certificates, showcasing my technical achievements and ongoing commitment to professional development in engineering and technology fields.",
    githubLink: 'https://github.com/IbnuAlii/IEEE-Certificate', 
    externalLink: 'https://github.com/IbnuAlii/IEEE-Certificate/blob/main/IEEE%20Certificate.pdf', 
  },
  {
    title: "CS50's-project-0 ",
    description: "CS50's-project-0 Design a front-end for Google Search, Google Image Search, and Google Advanced Search.",
    technologies: 'HTML  &  CSS',
    githubLink: 'https://github.com/IbnuAlii/CS50-project-0', 
    externalLink: 'https://ibnualii.github.io/CS50-project-0/', 
  },
  {
    title: 'To-Do-List-App',
    description: "This repository houses a simple yet powerful To-Do List application, designed to help keep track of daily tasks with ease. Built with the modern javaScript, it features an intuitive user interface for adding, editing, and deleting tasks. ",
    githubLink: 'https://github.com/IbnuAlii/To-Do-List-App', 
    externalLink: '#', 
  }

];

const ProjectCard = ({ darkMode }) => {
  return (
    <section id="projects">
      <div className={`projects-heading ${darkMode ? 'text-light' : 'text-dark'}`}>
        <FontAwesomeIcon icon={faLightbulb} size="3x" className="heading-icon" /> {/* Adjusted icon size to 3x */}
        <h1>Projects</h1>
      </div>    
      <div className={`project-container ${darkMode ? 'dark-mode' : ''}`}>
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h1>{project.title}</h1>
            <p>{project.description}</p> <br />
            {project.technologies && <p>{project.technologies}</p>}
            <div className="project-card-actions">
              <a href={project.githubLink} className="project-card-action-btn">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={project.externalLink} className="project-card-action-btn">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;