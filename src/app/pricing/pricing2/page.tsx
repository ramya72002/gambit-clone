import React from 'react';
import './pricing2.scss';  // Importing SCSS file

const Pricing2 = () => {
  return (
    <div className="pricing-container">
      {/* Header Section */}
      <div className="pricing-header">
        <h6 className="package-title">CHOOSE PACKAGE</h6>
        <h2 className="package-description">We help you grow in the world of chess.</h2>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-cards">

        {/* Basic Package */}
        <div className="pricing-card">
          <div className="pricing-card-content">
            <h3 className="card-title">Basic</h3>
            <p className="card-description">Designed for those taking their first steps in the world of chess.</p>
            <hr className="divider" />
            <h4 className="price">$299</h4>
            <p className="price-description">/PACKAGE</p>
            <h4>Includes:</h4>
            <ul className="features-list">
              <li>30 hours full training.</li>
              <li>Basic chess training.</li>
              <li>FIDE-approved study materials.</li>
              <li>An introduction to the rules of the game.</li>
              <li>Dedicated mentorship and support.</li>
            </ul>
            <button className="get-started-btn">GET STARTED</button>
            <p className="footer-note">*Ultrices ligula felis rhoncus nisl sapien vel semper imperdiet porttitor</p>
          </div>
        </div>

        {/* Advance Package */}
        <div className="pricing-card">
          <div className="pricing-card-content">
            <h6 className="most-popular">Most Popular</h6>
            <h3 className="card-title">Advance</h3>
            <p className="card-description">For those who want to take their chess skills to the next level</p>
            <hr className="divider" />
            <h4 className="price">$399</h4>
            <p className="price-description">/PACKAGE</p>
            <h4>Includes:</h4>
            <ul className="features-list">
              <li>30 hours full training.</li>
              <li>In-depth instrument rating training.</li>
              <li>Advanced sparring simulation.</li>
              <li>Thinking and strategy courses.</li>
              <li>Access to the chess players association.</li>
            </ul>
            <button className="get-started-btn">GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing2;
