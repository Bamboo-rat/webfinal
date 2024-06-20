import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../assets/css/navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-toggle" onClick={toggleMobileMenu}>
        &#9776;
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMobileMenu} className={isActive('/')}>Home</Link></li>
        <li><Link to="/features" onClick={toggleMobileMenu} className={isActive('/features')}>Features</Link></li>
        <li><Link to="/service" onClick={toggleMobileMenu} className={isActive('/service')}>Service</Link></li>
        <li><Link to="/shop" onClick={toggleMobileMenu} className={isActive('/shop')}>Shop</Link></li>
        <li><Link to="/testimonial" onClick={toggleMobileMenu} className={isActive('/testimonial')}>Testimonial</Link></li>
        <li><Link to="/meetus" onClick={toggleMobileMenu} className={isActive('/meetus')}>Contact Us</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
