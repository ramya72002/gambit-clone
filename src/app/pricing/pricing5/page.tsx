import React from 'react';
import './pricing5.scss';

const testimonials = [
  {
    client_name: "Petter Storm",
    designation: "Designation",
    review: "I'm highly impressed with the quality of their instruction. Experienced instructors have helped improve my understanding of chess strategies and provided valuable insights. Gambit School is the place.",
    client_photo: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/4.jpg",
  },
  {
    client_name: "Jenifer Clif",
    designation: "Designation",
    review: "I'm highly impressed with the quality of their instruction. Experienced instructors have helped improve my understanding of chess strategies and provided valuable insights. Gambit School is the place.",
    client_photo: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/2.jpg",
  },
  {
    client_name: "Dany Lumens",
    designation: "Designation",
    review: "I'm highly impressed with the quality of their instruction. Experienced instructors have helped improve my understanding of chess strategies and provided valuable insights. Gambit School is the place.",
    client_photo: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/8.jpg",
  },
  {
    client_name: "Brian Wise",
    designation: "Designation",
    review: "I'm highly impressed with the quality of their instruction. Experienced instructors have helped improve my understanding of chess strategies and provided valuable insights. Gambit School is the place.",
    client_photo: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/9.jpg",
  },
];

const Pricing5 = () => {
  return (
    <div className="pricing5-container" style={{ backgroundImage: `url('http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/chess-player-hitting-the-chess-clock-e1697916105818.jpg')` }}>
      <div className="testimonial-section">
        <h6 className="testimonial-title">TESTIMONIAL</h6>
        <h2 className="testimonial-heading">Feedback & Reviews</h2>
        <p className="testimonial-description">
          Hear what our students have to say about our teaching methods and chess instruction.
        </p>

        <div className="testimonials-wrapper">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src={testimonial.client_photo} alt={testimonial.client_name} className="testimonial-photo" />
              <h3 className="client-name">{testimonial.client_name}</h3>
              <p className="client-designation">{testimonial.designation}</p>
              <p className="client-review">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing5;
