import React from 'react';
import './about5.scss'; // Adjust the path as needed

const About5 = () => {
  return (
    <div
      className="aboutUs-container"
      style={{
        backgroundImage: 'url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/chess-figures-on-gray-table-background-e1698308725958.jpg)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '7em 0',
        position: 'relative',
      }}
    >
      <div className="aboutUs-overlay">
        <div className="aboutUs-content">
          <h1 className="aboutUs-title">
            Together with Gambit Chess School Towards Excellence.
          </h1>
          <p className="aboutUs-text">
            {/* Add your additional text here */}
          </p>
          <button className="aboutUs-button">GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default About5;
