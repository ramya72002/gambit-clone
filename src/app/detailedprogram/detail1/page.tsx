import React from 'react';
import './detail1.scss'; // Adjust the path as needed
import Header from '@/app/Header/page';
import Detail2 from '../detail2/page';
import Footer from '@/app/Footer/page';
import Pricing4 from '@/app/pricing/pricing4/page';
import Pricing5 from '@/app/pricing/pricing5/page';
import Hero9 from '@/app/Hero/hero9/page';

const DetailedProgram = () => {
  return (
    <div>
      <Header />
    <div
      className="detailedProgram-container"
      style={{
        backgroundImage: 'url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/outstanding-person-standing-out-from-the-crowd-and-catching-audience-attention-e1698220270855.jpg)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        paddingTop: '7%',
        // paddingBottom: '0',
        opacity:'100%',
        position: 'relative',
      }}
    >
      <div className="detailedProgram-overlay">
        <div className="detailedProgram-content" style={{ maxWidth: '720px', padding: '5em 3em',color:'white' }}>
          <h1 className="detailedProgram-title" style={{ textAlign: 'center' ,fontSize:'40px',fontWeight:'bold',color:'white'}}>
            Grand Master License
          </h1>
          <div className="detailedProgram-text" style={{ textAlign: 'center' ,color:'white'}}>
            Egestas nulla in ligula pharetra vivamus tempus pulvinar ante. Habitant sit tellus odio mollis risus lobortis cubilia. Tempus semper justo consectetur odio euismod tristique in magna maximus pellentesque ut.
          </div>
        </div>
      </div>
    </div>
    <Detail2 />
    <Hero9 />
    <Pricing4 />
    <Pricing5 />
    <Footer />
    </div>
  );
};

export default DetailedProgram;
