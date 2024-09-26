import React from 'react';
import './hero1.scss'; // Using the import style as requested

const Hero1 = () => {
  return (
    <div className="hero1">
      <div className="container">
        {/* Left section */}
        <div className="content-left">
          <h6 className="who-we-are">WHO WE ARE</h6>
          <h1 className="main-title">The magic of chess, beauty and complexity.</h1>
          <p className="description">
            Dignissim mus orci pretium leo nascetur nam aliquet metus feugiat faucibus luctus.
          </p>
          
          <div className="icon-box">
            <i className="mdi mdi-chess-king"></i>
            <div className="icon-content">
              <h4>Chess Club</h4>
              <p>Dignissim mus orci pretium leo nascetur nam aliquet metus feugiat faucibus luctus</p>
            </div>
          </div>

          <div className="icon-box">
            <i className="fas fa-chess"></i>
            <div className="icon-content">
              <h4>Chess Training Center</h4>
              <p>Dignissim mus orci pretium leo nascetur nam aliquet metus feugiat faucibus luctus</p>
            </div>
          </div>
        </div>

        {/* Right section with background image */}
        <div className="content-right">
          <div className="image-overlay">
            <div className="image-section">
              <h4 className="passion-dedication">
                Full of passion and dedication. Welcome to a chess school that is always ready to help you improve
              </h4>
              <img src="http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/Martin-Richter-marking.png" alt="GM Martin Richter" />
              <h6 className="gm-name">GM MARTIN RICHTER</h6>
            </div>
            <div className="image-container">
              <img src="http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/portrait-of-a-confident-businessman-in-a-modern-factory4-e1698115669998.png" alt="Portrait" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
