/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './faq3.scss'; // Adjust the path as necessary for your SCSS file

const FAQ3: React.FC = () => {
  return (
    <div className="faq3-container">
      <div className="faq3-background" style={{ backgroundImage: `url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/chessboard-with-black-chess-figures-isolated-on-black-e1698059185527.jpg)` }}>
        <div className="faq3-content">
          <div className="faq3-left">
            <h2 className="faq3-title">Take Your First Move Towards Victory.</h2>
            <p className="faq3-description">Have questions? We've got answers.</p>
            <button className="faq3-button">DISCOVER MORE</button>
          </div>
          <div className="faq3-right">
            <img 
              src="http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/woman-chess-2.png" 
              alt="Woman Chess" 
              className="faq3-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ3;
