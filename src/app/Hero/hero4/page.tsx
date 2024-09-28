// components/Hero4.js
import React from 'react';
import './hero4.scss'; // Importing the SCSS file for styles

const Hero4 = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <h6 className="heading">OUR Class</h6>
        <h2 className="subheading">Creating a winning mentality, giving birth to a tough generation.</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="icon-box">
          <div className="icon">
            <i className="fas fa-globe"></i>
          </div>
          <h4>Online Class</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
        <div className="icon-box">
          <div className="icon">
            <i className="fas fa-chess"></i>
          </div>
          <h4>Regular Class</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
      </div>
      <div className="image-container">
        <img
          src="/images/hero4.png"
          alt="Chess Playing"
          className="hero-image"
        />
        
      </div>
    </div>
  );
};

export default Hero4;
