import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile">
      {/* Header Section */}
      <header className="profile-header">
        <h1>Akshay Shah</h1>
        <h2>Senior Software Engineer</h2>
        <p className="tagline">Designing high-performance applications & scalable solutions</p>
      </header>

      {/* About Me */}
      <section id="about" className="about">
        <h3>About Me</h3>
        <p>
          I am a <strong>software engineer</strong> with expertise in <strong>backend development, cloud computing, and scalable system architecture</strong>. My work focuses on designing and implementing <strong>high-performance applications</strong> using <strong>Java, Python, and .NET</strong> while ensuring <strong>security, efficiency, and seamless cloud integration</strong>. I collaborate with frontend developers and DevOps teams to build comprehensive, full-stack solutions that enhance business operations and optimize user experiences.
        </p>
      </section>

      {/* What I Do */}
      <section id="services" className="what-i-do">
        <h3>What I Do</h3>
        <ul>
          <li><strong>Backend Development & Architecture</strong> – Developing robust, efficient software solutions that support complex business operations.</li>
          <li><strong>Cloud Computing & DevOps</strong> – Managing cloud infrastructure with AWS, Kubernetes, and Terraform, ensuring smooth deployments and scalability.</li>
          <li><strong>System Optimization & Performance Tuning</strong> – Enhancing software efficiency by refining database performance, load balancing, and microservices architecture.</li>
          <li><strong>Enterprise Software Solutions</strong> – Implementing PLM tools and Catena-X solutions to streamline data exchange and product lifecycle management.</li>
          <li><strong>Technology Modernization</strong> – Upgrading legacy systems by transitioning to cloud-based microservices for improved flexibility and reliability.</li>
          <li><strong>Innovation & Research</strong> – Exploring AI-driven automation, machine learning, and cutting-edge software solutions to improve business processes.</li>
        </ul>
      </section>

      {/* Goals */}
      <section id="goals" className="goals">
        <h3>Goals</h3>
        <p>
          I aim to develop innovative and scalable software solutions that drive efficiency and performance in enterprise environments. My focus is on leveraging cloud technologies, improving software architecture, and staying at the forefront of digital transformation. I am committed to continuous learning, mentoring aspiring developers, and contributing to open-source projects that push the boundaries of modern software development.
        </p>
      </section>

      {/* Work Experience */}
      <section id="experience" className="experience">
        <h3>Work Experience</h3>
        <div className="job">
          <h4>Cognizant Technology Solutions</h4>
          <p className="job-duration"><em>Software Engineer | Dec 2017 – Oct 2022</em></p>
          <ul>
            <li>Led end-to-end development of a new Spring Boot Java messaging service.</li>
            <li>Guided the migration from .NET to Java microservices and helped implement an automated CI/CD pipeline.</li>
            <li>Developed and maintained robust REST microservices and contributed to innovative tools that improved development efficiency.</li>
          </ul>
        </div>
        <div className="job">
          <h4>Bosch</h4>
          <p className="job-duration"><em>Software Engineer | Oct 2022 – Present</em></p>
          <ul>
            <li>Working on advanced engineering projects and innovative solutions in a dynamic environment.</li>
            <li>Collaborating with cross-functional teams to drive technology modernization and scalable system design.</li>
          </ul>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="connect">
        <h3>Let’s Connect!</h3>
        <p>
          I am passionate about building scalable, high-performance applications and leveraging cutting-edge technologies to solve complex software challenges. If you’re working on cloud computing, backend development, or enterprise software modernization, let’s connect and collaborate!
        </p>
        <div className="contact-info">
          <p><strong>Phone:</strong> 9765009987</p>
          <p><strong>Email:</strong> <a href="mailto:akshayshah.1893@gmail.com">akshayshah.1893@gmail.com</a></p>
          <p>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/akshay-shah-484a0549" target="_blank" rel="noopener noreferrer">Akshay Shah</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="profile-footer">
        <p>&copy; {new Date().getFullYear()} Akshay Shah. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Profile;
