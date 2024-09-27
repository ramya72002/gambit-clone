import React from 'react';
import './faq1.scss'; // Import your SCSS file for styling
import Footer from '@/app/Footer/page';
import Header from '@/app/Header/page';
import FAQ2 from '../faq2/page';
import FAQ3 from '../faq3/page';
import FAQ4 from '../faq4/page';
const FAQ = () => {
    return (
        <div>
                  
        <section className="faq-section" style={{ backgroundImage: `url('http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/chess-board-game-concept-for-competition-and-strategy-5-e1698108442507.jpg')` }}>
        <Header />
            <div className="faq-container">
                <h1 className="faq-title">Heading</h1>
                <h4 className="faq-subtitle">Frequently asked questions.</h4>
                
                <div className="faq-items">
                    <div className="faq-item">
                        <h5 className="faq-question">Question 1?</h5>
                        <p className="faq-answer">Answer to question 1.</p>
                    </div>
                    <div className="faq-item">
                        <h5 className="faq-question">Question 2?</h5>
                        <p className="faq-answer">Answer to question 2.</p>
                    </div>
                    <div className="faq-item">
                        <h5 className="faq-question">Question 3?</h5>
                        <p className="faq-answer">Answer to question 3.</p>
                    </div>
                    {/* Add more FAQ items as needed */}
                </div>
            </div>
        </section>
        <FAQ2 />
        <FAQ3 />
        <FAQ4 />
        <Footer />
        </div>
    );
};

export default FAQ;
