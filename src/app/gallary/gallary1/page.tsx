// import Pricing2 from '../gallary2/page';
// import Pricing3 from '../pricing3/page';
// import Pricing4 from '../pricing4/page';
// import Pricing5 from '../pricing5/page';
 
import React from 'react';
import './gallary1.scss';
import Footer from '@/app/Footer/page';
import Header from '@/app/Header/page';
import Gallery2 from '../gallary2/page';
import Gallery3 from '../gallary3/page';

const Gallery = () => {
  const images = [
    'http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/grandfather-playing-against-grandkids-e1698334619299.jpg',
    'http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/difficult-chess-tournament-e1698308890473.jpg',
    'http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/smart-boy-playing-chess-and-staring-at-the-chessboard-e1698161801842.jpg',
    'http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/chess-playing-e1697916016480.jpg',
    'http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/amateur-chess-tournament-e1697915985599.jpg',
    'http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/teacher-showing-rules.jpg',
  ];

  return (
   
    <div>
      <Header />
    <div className="gallery-container">
      <div className="header-section">
        <h1>Together with Gambit Chess School Towards Excellence</h1>
        <h4>In every chess position, there are opportunities.</h4>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Chess Image ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2>We are committed to helping you achieve your chess dreams, one step at a time</h2>
        <button className="learn-more">Learn More</button>
      </div>
    </div>
    <Gallery2 /> 
    <Gallery3 /> 
    <Footer />
    </div>
  );
};

export default Gallery;

 
