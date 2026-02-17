import React from "react";

function profile() {
  return (
    <div className="page-wrapper">
      <div className="card profile">
        
        {/* Profile Image */}
        <div className="profile-img-wrapper">
          <img src="Picture1.jpg" alt="Profile" />
        </div>

        {/* Name & Designation */}
        <h2>Manya Sondhi</h2>
        <p className="designation">AI & ML Engineer</p>

        {/* Projects */}
        <h3>Projects / Internships</h3>
        <ul>
          <li>Gamified Rehabilitation System</li>
          <li>Hand Therapy Game using Computer Vision</li>
          <li>AI Intern at Yhills</li>
        </ul>

      </div>
    </div>
  );
}

export default profile;