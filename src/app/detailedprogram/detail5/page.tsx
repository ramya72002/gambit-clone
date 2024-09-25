import React from 'react';
import './detail5.scss'; // Direct SCSS import

const testimonials = [
  {
    name: 'Petter Storm',
    designation: 'Designation',
    review: "I'm highly impressed with the quality of their instruction. Experienced instructors have helped improve my understanding of chess strategies and provided valuable insights. Gambit School is the place.",
    imageUrl: 'http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/4.jpg',
  },
  {
    name: 'Jenifer Clif',
    designation: 'Designation',
    review: "I'm highly impressed with the quality of their instruction. Experienced instructors have helped improve my understanding of chess strategies and provided valuable insights. Gambit School is the place.",
    imageUrl: 'http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/2.jpg',
  },
  {
    name: 'Dany Lumens',
    designation: 'Designation',
    review: "I'm highly impressed with the quality of their instruction. Experienced instructors have helped improve my understanding of chess strategies and provided valuable insights. Gambit School is the place.",
    imageUrl: 'http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/8.jpg',
  },
  {
    name: 'Brian Wise',
    designation: 'Designation',
    review: "I'm highly impressed with the quality of their instruction. Experienced instructors have helped improve my understanding of chess strategies and provided valuable insights. Gambit School is the place.",
    imageUrl: 'http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/9.jpg',
  },
];

const Detail5 = () => {
  return (
    <div className="detail5-container">
      <div className="testimonial-container">
        <h6>TESTIMONIAL</h6>
        <h3>Feedback & Reviews</h3>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={testimonial.imageUrl} alt={testimonial.name} />
            <p className="review-text">{testimonial.review}</p>
            <h5>{testimonial.name}</h5>
            <p>{testimonial.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail5;
