import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaMoon, FaSun, FaBriefcase, FaCode, FaCloud } from "react-icons/fa";
import { motion } from "framer-motion";
import "./profile.css";

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`profile-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* Header Section */}
      <motion.header className="profile-header" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1>Akshay Shah</h1>
        <h2>Software Engineer</h2>
        <p className="tagline">Building Scalable & High-Performance Applications</p>
      </motion.header>

      {/* About Section */}
      <motion.section className="about" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h3>About Me</h3>
        <p>
          Passionate software engineer specializing in **backend development, cloud computing, and scalable architecture**. 
          Experienced in **Java, Python, and .NET**, focusing on performance, security, and seamless cloud integration.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="skills" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h3>Key Skills</h3>
        <div className="skills-grid">
          {[
            { skill: "Java", icon: <FaCode /> },
            { skill: "Python", icon: <FaCode /> },
            { skill: "C#", icon: <FaCode /> },
            { skill: "Spring Boot", icon: <FaCode /> },
            { skill: "AWS", icon: <FaCloud /> },
            { skill: "Kubernetes", icon: <FaCloud /> },
            { skill: "Terraform", icon: <FaCloud /> },
            { skill: "CI/CD", icon: <FaCloud /> },
            { skill: "Microservices", icon: <FaBriefcase /> },
            { skill: "SQL", icon: <FaBriefcase /> }
          ].map((item, index) => (
            <motion.div key={index} className="skill-card" whileHover={{ scale: 1.1 }}>
              {item.icon} {item.skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Work Experience Section */}
      <motion.section className="experience" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h3>Work Experience</h3>

        <div className="experience-card">
          <h4>🚀 Bosch</h4>
          <p className="job-duration"><em>Software Engineer | Oct 2022 – Present</em></p>
          <ul>
            <li>Developing scalable solutions with **cloud & DevOps** best practices.</li>
            <li>Driving enterprise software innovation using **AI-powered tools**.</li>
          </ul>
        </div>

        <div className="experience-card">
          <h4>💼 Cognizant Technology Solutions</h4>
          <p className="job-duration"><em>Software Engineer | Dec 2017 – Oct 2022</em></p>
          <ul>
            <li>Led migration from **.NET to Java microservices**.</li>
            <li>Built **CI/CD automation tools**, improving development speed by 50%.</li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
};

export default Profile;
