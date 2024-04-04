import React, { useState } from 'react';
import NavBar from './components/Home/NavBar/NavBar';
import IntroSection from './components/Home/IntroSection/IntroSection';
import ProjectCard from './components/Projects/Card/ProjectCard';
import AboutMe from './components/About/AboutMe';

import './App.css';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <IntroSection />
      <ProjectCard darkMode={darkMode} />
      <AboutMe darkMode={darkMode}/>
      <Skills darkMode={darkMode} />
      <Contact darkMode={darkMode}/>

    </div>
  );
};

export default App;
