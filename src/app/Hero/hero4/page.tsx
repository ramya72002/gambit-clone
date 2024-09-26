import React from 'react';
import './hero4.scss';

const Hero4 = () => {
  return (
    <div className="hero4-container">
      <div className="hero4-content">
        <div className="hero4-left">
          <h6 className="hero4-title">OUR Class</h6>
          <h2 className="hero4-subtitle">
            Creating a winning mentality, giving birth to a tough generation
          </h2>
          <div className="hero4-text">
            {/* Additional text content can be added here */}
          </div>
          <div className="hero4-icon-box">
            <div className="icon-box">
              <i className="fas fa-globe icon" />
              <div className="icon-box-content">
                <div className="icon-box-title">Online Class</div>
                <div className="icon-box-description">
                  Engaging online classes designed for effective learning.
                </div>
              </div>
            </div>
            <div className="icon-box">
              <i className="fas fa-chess icon" />
              <div className="icon-box-content">
                <div className="icon-box-title">Regular Class</div>
                <div className="icon-box-description">
                  In-person classes that foster interaction and collaboration.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero4-right">
          <div className="image-mask-container">
            <img
              src="http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/chess-playing-e1697916016480.jpg"
              alt="Chess Playing"
              className="hero4-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
