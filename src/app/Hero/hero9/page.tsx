import React from 'react';
import './hero9.scss'; // Assuming you have a separate SCSS file for styles

const Hero9 = () => {
  return (
    <div className="hero9-container">
      <div className="hero9-background">
        <video
          className="hero9-video"
          autoPlay
          loop
          muted
          playsInline
          src="https://www.youtube.com/watch?v=ZP2njDJErho"
          poster="http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/chess-pieces-on-a-dark-background-1-e1697913879398.jpg"
        >
          Your browser does not support the video tag.
        </video>
        <div className="hero9-content">
          <h1 className="hero9-title">Experience the Future of Chess Training! Try Our Fastest Strategy Now!</h1>
          <p className="hero9-description">
            Discover the most effective methods for mastering chess strategies.
          </p>
          <button className="hero9-button">DISCOVER MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Hero9;
