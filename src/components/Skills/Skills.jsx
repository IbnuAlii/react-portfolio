import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faJava, faGitAlt, faPython ,faReact ,faFigma , faPhp, faSwift, faGolang, faRust, faNode } from '@fortawesome/free-brands-svg-icons';
import './Skills.css';

const skillIcons = {
  HTML: faHtml5,
  CSS: faCss3Alt,
  JavaScript: faJsSquare,
  Java: faJava,
  Git: faGitAlt,
  Python: faPython,
  Figma: faFigma,
  React: faReact,
  PHP : faPhp,
  Swift :faSwift,
  Golang: faGolang,
  Rust: faRust,
  Nodejs: faNode,

};

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'Java', 'Git', 'Python','React', 'Nodejs','Figma','PHP','Swift', 'Golang', 'Rust'];

  return (
    <section id="skills">
        <div className="skills-section">
        <h2>SKILLS</h2>
        <div className="skills-container">
            {skills.map(skill => (
            <div key={skill} className="skill-box">
                <FontAwesomeIcon icon={skillIcons[skill]} size="2x" />
                <span>{skill}</span>
            </div>
            ))}
        </div>
        </div>
    </section>
  );
};

export default Skills;
