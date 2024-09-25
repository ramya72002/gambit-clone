import React from 'react';
import './hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h6 className="hero-title">Welcome To Gambit</h6>
        <h1 className="hero-subtitle">Welcome to a place  </h1>
        <h1 className="hero-subtitle">where you can paint</h1>
        <h1 className="hero-subtitle">your own history.</h1>
        <button className="hero-button">Discover more</button>
      </div>

      <div className="hero-socials">
        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Counter Section */}
      <div className="hero-counters">
        <div className="counter-item">
          <div className="counter-number">415K+</div>
          <div className="counter-title">Member Active</div>
        </div>
        <div className="counter-item">
          <div className="counter-number">2K+</div>
          <div className="counter-title">Expert Team</div>
        </div>
        <div className="counter-item">
          <div className="counter-number">751+</div>
          <div className="counter-title">Winning Competition</div>
        </div>
        <div className="counter-item">
          <div className="counter-number">25+</div>
          <div className="counter-title">Years of Experience</div>
        </div>
      </div>
     
    </section>
  );
};

export default Hero;
