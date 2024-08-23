import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev } from '@fortawesome/free-brands-svg-icons'; // Import the DEV icon

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <FontAwesomeIcon icon={faDev} /> Developer
      </h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
