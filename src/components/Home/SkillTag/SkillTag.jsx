// SkillTag.js
import React from 'react';
import './SkillTag.css';

const SkillTag = ({ text, position }) => {
  return (
    <div className={`skill-tag ${position}`}>
      <span>{text}</span>
    </div>
  );
};

export default SkillTag;
