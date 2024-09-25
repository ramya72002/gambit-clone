/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './hero8.scss';

interface TestimonialProps {
    name: string;
    designation: string;
    review: string;
    photo: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, designation, review, photo }) => {
    return (
        <div className="testimonial">
            <img src={photo} alt={name} className="testimonial-photo" />
            <div className="testimonial-content">
                <h4 className="testimonial-name">{name}</h4>
                <p className="testimonial-designation">{designation}</p>
                <p className="testimonial-review">{review}</p>
            </div>
        </div>
    );
};

const Hero8: React.FC = () => {
    const testimonials = [
        {
            name: "Petter Storm",
            designation: "Designation",
            review: "I'm highly impressed with the quality of their instruction. Experienced instructors have helped improve my understanding of chess strategies and provided valuable insights. Gambit School is the place.",
            photo: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/4.jpg"
        },
        {
            name: "Jenifer Clif",
            designation: "Designation",
            review: "I'm highly impressed with the quality of their instruction. Experienced instructors have helped improve my understanding of chess strategies and provided valuable insights. Gambit School is the place.",
            photo: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/2.jpg"
        },
        {
            name: "Dany Lumens",
            designation: "Designation",
            review: "I'm highly impressed with the quality of their instruction. Experienced instructors have helped improve my understanding of chess strategies and provided valuable insights. Gambit School is the place.",
            photo: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/8.jpg"
        },
        {
            name: "Brian Wise",
            designation: "Designation",
            review: "I'm highly impressed with the quality of their instruction. Experienced instructors have helped improve my understanding of chess strategies and provided valuable insights. Gambit School is the place.",
            photo: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/9.jpg"
        }
    ];

    return (
        <div className="hero8-container">
            <div className="hero8-background" style={{
                backgroundImage: 'url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/chess-player-hitting-the-chess-clock-e1697916105818.jpg)',
                padding: '5em 0 7em 0'
            }}>
                <div className="hero8-overlay"></div>
                <div className="hero8-content">
                    <h6 className="hero8-title">TESTIMONIAL</h6>
                    <h2 className="hero8-subtitle">Feedback & Reviews</h2>
                    <p className="hero8-description">
                        I'm highly impressed with the quality of their instruction. Experienced instructors have helped improve my understanding of chess strategies and provided valuable insights. Gambit School is the place.
                    </p>
                    <div className="hero8-testimonials">
                        {testimonials.map((testimonial, index) => (
                            <Testimonial
                                key={index}
                                name={testimonial.name}
                                designation={testimonial.designation}
                                review={testimonial.review}
                                photo={testimonial.photo}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero8;
