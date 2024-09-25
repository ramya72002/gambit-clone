import React from 'react';
import './pricing4.scss';

const Pricing4 = () => {
  const pricingData = [
    {
      title: "Modern Training",
      description: "Tincidunt vehicula lorem vulputate primis fames eget proin dui a ullamcorper eu id imperdiet fusce",
      backgroundImage: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/school-boys-playing-chess-e1698161918720.jpg",
    },
    {
      title: "Best Quality Training",
      description: "Tincidunt vehicula lorem vulputate primis fames eget proin dui a ullamcorper eu id imperdiet fusce",
      backgroundImage: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/chess-playing-e1697916016480.jpg",
    },
    {
      title: "Practical Training",
      description: "Tincidunt vehicula lorem vulputate primis fames eget proin dui a ullamcorper eu id imperdiet fusce",
      backgroundImage: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/game-of-chess-e1698161986705.jpg",
    },
    {
      title: "Library & Resources",
      description: "Tincidunt vehicula lorem vulputate primis fames eget proin dui a ullamcorper eu id imperdiet fusce",
      backgroundImage: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/friends-playing-in-chess-e1698161837628.jpg",
    },
    {
      title: "Accommodations",
      description: "Tincidunt vehicula lorem vulputate primis fames eget proin dui a ullamcorper eu id imperdiet fusce",
      backgroundImage: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/teenager-playing-chess.jpg",
    }
  ];

  return (
    <div className="pricing3">
      <div className="pricing-header">
        <h6 className="title">FACILITIES AND AMENITIES</h6>
        <h2 className="subtitle">Discover your potential: Gambit, your best chess school.</h2>
      </div>
      <div className="pricing-content">
        {pricingData.map((item, index) => (
          <div className="flip-box" key={index}>
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div
                className="flip-box-back"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing4;
