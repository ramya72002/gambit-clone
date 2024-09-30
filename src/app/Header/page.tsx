'use client'
import React, { useState } from 'react';
import './header.scss'; // Direct import of SCSS

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Left section: Logo */}
        <div className="header__logo">
          <a href="/">
            <img
              src="http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/Gambit-Logo.png"
              alt="Gambit Logo"
              className="header__logo-image"
            />
          </a>
        </div>

        {/* Hamburger Button for Mobile View */}
        <button className="header__hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger Icon */}
        </button>

        {/* Right section: Navigation Menu */}
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__menu">
            <li className="header__menu-item"><a href="/">Home</a></li>
            <li className="header__menu-item header__dropdown">
              <a href="/about/about1">About Us</a>
              <div className="header__dropdown-content">
                <a href="/about/about1">Trainers</a>
              </div>
            </li>
            <li className="header__menu-item header__dropdown">
              <a href="/detailedprogram/detail1">Program</a>
              <div className="header__dropdown-content">
                <a href="/detailedprogram/detail1">Detailed Program</a>
                <a href="/pricing/pricing1">Pricing Plan</a> 
              </div>
            </li> 
            <li className="header__menu-item"><a href="/contact">Contact Us</a></li>
            <li className="header__menu-item header__dropdown">
              <a href="/gallery/gallery1">Pages</a>
              <div className="header__dropdown-content">
                <a href="/gallary/gallary1">Gallery</a>
                <a href="/faq/faq1">FAQ</a>
                <a href="/blog/blog1">Blog</a>
              </div>
            </li> 
          </ul>

          <a href="/membership" className="header__join-btn">
            Join Membership
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
