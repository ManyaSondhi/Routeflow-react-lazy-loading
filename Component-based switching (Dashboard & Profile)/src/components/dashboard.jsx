import React from "react";

function Dashboard() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Git & GitHub",
    "Machine Learning"
  ];

  return (
    <div className="page-wrapper">
      <div className="card">
        <h2>My Skills</h2>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;