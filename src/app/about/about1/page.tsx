import React from 'react';
import './about1.scss';
import Header from '@/app/Header/page';
import Footer from '@/app/Footer/page';
import About3 from '../about3/page';
import About4 from '../about4/page';
import About5 from '../about5/page';

const About1: React.FC = () => {
  const backgroundImageUrl =
    'http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/chess-board-game-concept-for-competition-and-strategy-4-e1698108413284.jpg';

  return (
    <div>
      <div
        className="about1"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '90vh', // Full viewport height for the image
          position: 'relative',
        }}
      >
      
        <Header />
        <div className="about1__content">
          <h1 className="about1__heading">About Us</h1>
          <h4 className="about1__heading about1__heading--h4">
            Competitions, friendship, and learning: Welcome to your chess home.
          </h4>
        </div>
      </div>
      {/* Rest of the sections */}
      <About3 />
      <About4 />
      <About5 />
      <Footer />
    </div>
  );
};

export default About1;
