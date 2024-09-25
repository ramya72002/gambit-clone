import Pricing2 from '../pricing2/page';
import Pricing3 from '../pricing3/page';
// import Pricing4 from '../pricing4/page';
// import Pricing5 from '../pricing5/page';
import Header from '@/app/Header/page';
import React from 'react';
import './pricing1.scss'; // Import the SCSS file directly

const Pricing1 = () => {
  return (
    <div>
      <Header />
    <div className="pricing1-container">
      <div className="pricing1-background">
        <div className="pricing1-content">
          <h1 className="pricing1-heading">
            {/* Dynamic heading if applicable, for now it's static */}
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
    </div>
  );
};

export default Pricing1;
