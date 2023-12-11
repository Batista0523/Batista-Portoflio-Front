import React from "react";
import "./Skills.scss";

function Skills() {
  const skills = [
    { name: "JavaScript", description: "Dynamic scripting language for web development." },
    { name: "HTML", description: "Markup language for creating the structure of web pages." },
    { name: "CSS", description: "Style sheet language for designing the appearance of web pages." },
    { name: "React", description: "JavaScript library for building user interfaces." },
    { name: "PostgreSQL", description: "Open-source relational database management system." },
    { name: "Node.js", description: "JavaScript runtime for server-side development." },
    { name: "Express.js", description: "Web application framework for Node.js." },
  ];

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
