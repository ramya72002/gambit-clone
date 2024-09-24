import React from 'react';
import './about2.scss'; // Import your SCSS file

const YourComponent = () => {
  return (
    <div className="main-container">
      <div className="header">
        <div className="content">
          <h6 className="who-we-are">WHO WE ARE</h6>
          <h6 className="description">The magic of chess, beauty and complexity.</h6>
          <div className="text-editor">
            {/* Your text content here */}
          </div>
        </div>
      </div>

      <div className="icon-box-container">
        <div className="icon-box">
          <i className="mdi mdi-chess-king icon" />
          <h6 className="icon-title">Chess Club</h6>
          <p className="icon-description">Dignissim mus orci pretium leo nascetur nam aliquet metus feugiat faucibus luctus</p>
        </div>

        <div className="icon-box">
          <i className="fas fa-chess icon" />
          <h6 className="icon-title">Chess Training Center</h6>
          <p className="icon-description">Dignissim mus orci pretium leo nascetur nam aliquet metus feugiat faucibus luctus</p>
        </div>
      </div>

      <div className="background-section">
        <div className="welcome-text">
          <h4>Full of passion and dedication. Welcome to a chess school that is always ready to help you improve</h4>
          <p>{/* Additional text here */}</p>
        </div>
        <img className="image" src="http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/Martin-Richter-marking.png" alt="GM Martin Richter" />
        <h6 className="gm-title">GM MARTIN RICHTER</h6>
      </div>

      <div className="image-container">
        <img className="businessman-image" src="http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/portrait-of-a-confident-businessman-in-a-modern-factory4-e1698115669998.png" alt="Businessman" />
      </div>
    </div>
  );
};

export default YourComponent;
