/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './gallary3.scss';

const Gallery3 = () => {
  return (
    <div className="gallery3-container" style={{
      backgroundImage: 'url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/chess-player-hitting-the-chess-clock-e1697916105818.jpg)',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      padding: '5em 0 7em 0',
      position: 'relative'
    }}>
      <div className="overlay" style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.75,
        borderRadius: '10px'
      }}></div>
      <div className="content" style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto', padding: '2em' }}>
        <h6 className="header-title" style={{ textAlign: 'center' }}>TESTIMONIAL</h6>
        <h2 className="sub-title" style={{ textAlign: 'center', color: '#6B7C92' }}>Feedback & Reviews</h2>
        <p className="description" style={{ textAlign: 'center', color: '#6B7C92' }}>
          I'm highly impressed with the quality of their instruction. Experienced instructors have helped improve my understanding of chess strategies and provided valuable insights. Gambit School is the place.
        </p>
      </div>
      <div className="testimonials">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card" style={{ backgroundColor: '#FFFFFFCC', margin: '1em', padding: '1.5em', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <img src={testimonial.client_photo.url} alt={testimonial.client_name} style={{ borderRadius: '50%', width: '60px', height: '60px', marginBottom: '0.5em' }} />
            <h4 className="client-name" style={{ fontWeight: '600', color: '#1B1B1B' }}>{testimonial.client_name}</h4>
            <p className="designation" style={{ fontSize: '14px', color: '#1B1B1B' }}>{testimonial.designation}</p>
            <p className="review" style={{ fontSize: '16px', color: '#1B1B1B', lineHeight: '1.4' }}>{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const testimonialsData = [
  {
    client_name: "Petter Storm",
    designation: "Designation",
    review: "I'm highly impressed with the quality of their instruction. Experienced instructors have helped improve my understanding of chess strategies and provided valuable insights. Gambit School is the place.",
    client_photo: {
      url: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/4.jpg"
    }
  },
  {
    client_name: "Jenifer Clif",
    designation: "Designation",
    review: "I'm highly impressed with the quality of their instruction. Experienced instructors have helped improve my understanding of chess strategies and provided valuable insights. Gambit School is the place.",
    client_photo: {
      url: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/2.jpg"
    }
  },
  {
    client_name: "Dany Lumens",
    designation: "Designation",
    review: "I'm highly impressed with the quality of their instruction. Experienced instructors have helped improve my understanding of chess strategies and provided valuable insights. Gambit School is the place.",
    client_photo: {
      url: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/8.jpg"
    }
  },
  {
    client_name: "Brian Wise",
    designation: "Designation",
    review: "I'm highly impressed with the quality of their instruction. Experienced instructors have helped improve my understanding of chess strategies and provided valuable insights. Gambit School is the place.",
    client_photo: {
      url: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/9.jpg"
    }
  },
];

export default Gallery3;
