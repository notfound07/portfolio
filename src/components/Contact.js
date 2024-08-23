import React from 'react';
import Header from './Header';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="container-contact">
      <Header />
      <div className="contactWrapper">
        <div className="contactForm">
          <h3>Get in Touch</h3>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: amanbhatt199916@gmail.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> Phone: (+91) 9990106790</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Location: New Delhi, India</p>
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

export default Contact;
