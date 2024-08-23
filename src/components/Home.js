import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="mainContent">
        <h2>Aman Bhatt</h2>
        <p>Crafting beautiful and functional web experiences</p>
        <div className="aboutSection">
          <h3>About Me</h3>
          <p>
            I'm an aspiring Master of Computer Application graduate with a BCA degree from Guru Gobind Singh Indraprastha University. 
            I bring a strong foundation in computer science and a drive to excel in the professional world. As a responsible and 
            organized individual, I am eager to embark on my first professional experience, leveraging my skills and gaining 
            valuable knowledge. I am enthusiastic about contributing to dynamic teams and embracing new challenges to foster both 
            personal and organizational growth.
          </p>
        </div>
        <div className="educationSection">
          <h3>Education</h3>
          <ul>
            <li>MCA - Indira Gandhi National Open University (IGNOU) - Expected 2024</li>
            <li>BCA - Guru Gobind Singh Indraprastha University - 2022</li>
          </ul>
        </div>
        <div className="experienceSection">
          <h3>Work Experience</h3>
          <ul>
            <li>Developer - Freelancer - June 2024 - Present</li>
          </ul>
          <p>
          As a freelance developer, I am working on projects ranging from small business websites to dynamic web applications. 
          This role has honed my skills in both front-end and back-end development, allowed me to manage client communications, 
          and provided valuable experience in delivering solutions that effectively meet clients' needs.
          </p>
        </div>
        <div className="buttons">
          <Link to="/projects">
            <button className="buttonOrange">View Projects</button>
          </Link>
          <Link to="/contact">
            <button className="buttonWhite">Contact Me</button>
          </Link>
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

export default Home;
