import React from 'react';
import './detail2.scss';

const Detail2 = () => {
  return (
    <div className="detail2-container">
      <div className="description-section">
        <h3>Descriptions</h3>
        <p>
          Maecenas quisque ultricies placerat blandit penatibus id potenti. Nec fusce integer dui etiam magnis tellus faucibus diam. Viverra conubia dictumst semper consectetuer elementum maecenas litora pulvinar ipsum facilisis mattis.
        </p>
        <p>
          Maecenas quisque ultricies placerat blandit penatibus id potenti. Nec fusce integer dui etiam magnis tellus faucibus diam. Viverra conubia dictumst semper consectetuer elementum maecenas litora pulvinar ipsum facilisis mattis.
        </p>
        <div className="icon-lists">
          <ul className="icon-list">
            <li><i className="mdi mdi-check-circle"></i> Quisque suscipit viverra accumsan montes</li>
            <li><i className="mdi mdi-check-circle"></i> Sit lorem tincidunt nulla commodo</li>
            <li><i className="mdi mdi-check-circle"></i> Diam dictum pharetra phasellus class</li>
            <li><i className="mdi mdi-check-circle"></i> Ultricies montes tellus ornare</li>
            <li><i className="mdi mdi-check-circle"></i> Integer consectetur commodo vehicula</li>
          </ul>
          <ul className="icon-list">
            <li><i className="mdi mdi-check-circle"></i> Quisque suscipit viverra accumsan montes</li>
            <li><i className="mdi mdi-check-circle"></i> Sit lorem tincidunt nulla commodo</li>
            <li><i className="mdi mdi-check-circle"></i> Diam dictum pharetra phasellus class</li>
            <li><i className="mdi mdi-check-circle"></i> Ultricies montes tellus ornare</li>
            <li><i className="mdi mdi-check-circle"></i> Integer consectetur commodo vehicula</li>
          </ul>
        </div>
        <div className="image-container">
          <img
            src="http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/selective-focus-of-wooden-chess-board-with-seniors-playing-chess-at-home-e1697916079176.jpg"
            alt="Chess Image"
          />
        </div>
      </div>

      <div className="services-section">
        <div className="services-box">
          <h3>Other services</h3>
          <ul className="icon-list">
            <li><i className="fas fa-feather-alt"></i> Grandmaster License (GM)</li>
            <li><i className="fas fa-feather-alt"></i> International Master License (IM)</li>
            <li><i className="fas fa-feather-alt"></i> Fide Master License (FM)</li>
            <li><i className="fas fa-feather-alt"></i> Master Candidate License (MC)</li>
            <li><i className="fas fa-feather-alt"></i> Women Grandmaster (WGM)</li>
            <li><i className="fas fa-feather-alt"></i> Women International Master (WIM)</li>
            <li><i className="fas fa-feather-alt"></i> Women Fide Master (WFM)</li>
            <li><i className="fas fa-feather-alt"></i> Women Candidate Master (WCM)</li>
          </ul>
        </div>
        <div className="more-info-box">
          <h4>Need more information?</h4>
          <p>Call Us</p>
        </div>
      </div>
    </div>
  );
};

export default Detail2;
