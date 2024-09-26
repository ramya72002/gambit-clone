import React from 'react';
import './header.scss'; // Direct import of SCSS

const Header = () => {
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

        {/* Right section: Navigation Menu & Button */}
        <nav className="header__nav">
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
