import React, { useState } from 'react';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGithub, faPython, faLinux, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Projects.css';

const Projects = () => {
  // State to track which project is expanded
  const [expandedProject, setExpandedProject] = useState(null);

  // Function to toggle project details
  const toggleDetails = (projectIndex) => {
    setExpandedProject(expandedProject === projectIndex ? null : projectIndex);
  };

  return (
    <div className="container">
      <Header />
      <div className="skills">
        <h3>Skills</h3>
        <ul className="skillsList">
          <li><FontAwesomeIcon icon={faHtml5} className="skillIcon" /> HTML</li>
          <li><FontAwesomeIcon icon={faCss3Alt} className="skillIcon" /> CSS</li>
          <li><FontAwesomeIcon icon={faCss3Alt} className="skillIcon" /> Responsive Web Design</li>
          <li><FontAwesomeIcon icon={faJs} className="skillIcon" /> JavaScript</li>
          <li><FontAwesomeIcon icon={faReact} className="skillIcon" /> React.js</li>
          <li><FontAwesomeIcon icon={faNodeJs} className="skillIcon" /> Node.js</li>
          <li><FontAwesomeIcon icon={faGithub} className="skillIcon" /> MongoDB</li>
          <li><FontAwesomeIcon icon={faPython} className="skillIcon" /> Python</li>
          <li><FontAwesomeIcon icon={faLinux} className="skillIcon" /> Linux</li>
          <li><FontAwesomeIcon icon={faMicrosoft} className="skillIcon" /> MS Office</li>
        </ul>
      </div>
      <div className="projects">
        <div className={`projectCard ${expandedProject === 1 ? 'expanded' : ''}`}>
          <h3>Reservelt - Online Restaurant Table Reservation System</h3>
          <p>Developed an online platform for restaurant reservations using HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. Integrated real-time table availability and booking confirmation feature.</p>
          <button className="buttonWhite" onClick={() => toggleDetails(1)}>View Details</button>
          <a href="https://github.com/notfound07/ReserveIt" target="_blank" rel="noopener noreferrer">
            <button className="buttonOrange">Live Project</button>
          </a>
          {expandedProject === 1 && (
            <div className="projectDetails">
              <p>- Developed an online platform for restaurant reservations, enabling users to efficiently search for available tables, view restaurant details, and seamlessly make reservations online.</p>
              <p>- Implemented user authentication and profile management for enhanced user experience.</p>
              <p>- Engineered real-time table availability and booking confirmation feature for prompt and efficient reservation process.</p>
              <p>- Integrated the system with restaurant management systems for seamless booking updates.</p>
              <p>- Utilized HTML, CSS, JavaScript, and React.js for frontend development, and Node.js, Express.js, and MongoDB for backend operations.</p>
              <p>- Ensured responsive design for optimal user experience across mobile and desktop devices.</p>
              <p>- Managed version control using Git for efficient collaboration and tracking of project progress.</p>
            </div>
          )}
        </div>
        <div className={`projectCard ${expandedProject === 2 ? 'expanded' : ''}`}>
          <h3>Trigger (Android App)</h3>
          <p>Developed an Android application using Python with the Kivy and KivyMD frameworks for phone number information retrieval and location services. Integrated with YouTube for song downloads.</p>
          <button className="buttonWhite" onClick={() => toggleDetails(2)}>View Details</button>
          <a href="https://github.com/notfound07/Trigger" target="_blank" rel="noopener noreferrer">
            <button className="buttonOrange">Live Project</button>
          </a>
          {expandedProject === 2 && (
            <div className="projectDetails">
              <p>- Developed an Android application using Python with the Kivy and KivyMD frameworks.</p>
              <p>- Implemented functionalities for retrieving phone number information via USSD codes, determining the phone's location, and downloading songs from YouTube links.</p>
              <p>- Utilized SQLite for database management and Buildozer for packaging the app into an APK.</p>
              <p>- Key Features:</p>
              <ul>
                <li>Phone number information retrieval through USSD codes.</li>
                <li>Location services to provide geographical data.</li>
                <li>Integration with YouTube for downloading songs from provided links.</li>
              </ul>
            </div>
          )}
        </div>
        <div className="socialLinks">
          <h3>Follow Me</h3>
          <div className="socialIcons">
            <a href="https://discord.gg/GThQjCw7" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/aman-216443306/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/notfound07" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2023 Aman Bhatt. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Projects;
