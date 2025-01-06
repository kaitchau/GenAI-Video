import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">LOGO placement</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-extra">
        <input type="text" placeholder="Search..." className="navbar-search" />
        <Link to="/profile" className="navbar-profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
  