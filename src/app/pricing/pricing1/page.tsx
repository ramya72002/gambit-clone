import Pricing2 from '../pricing2/page';
import Pricing3 from '../pricing3/page';
import Pricing4 from '../pricing4/page';
import Pricing5 from '../pricing5/page';
import Header from '@/app/Header/page';
import Footer from '@/app/Footer/page';
import React from 'react';
import './pricing1.scss'; // Import the SCSS file directly

const Pricing1 = () => {
  return (
    <div>
      <div className="pricing1-container">
        {/* Header inside the background image */}
        <div className="header-container">
          <Header />
        </div>

        <div className="pricing1-background">
          <div className="pricing1-content">
            <h1 className="pricing1-heading">
              Pricing Plan
            </h1>
            <h4 className="pricing1-subheading">
              Improve your Dreams with thought-provoking strategies.
            </h4>
          </div>
        </div>
      </div>

      <Pricing2 />
      <Pricing3 />
      <Pricing4 />
      <Pricing5 />
      <Footer />
    </div>
  );
};

export default Pricing1;
