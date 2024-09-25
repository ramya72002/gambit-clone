import React from 'react';
import './FAQ4.scss'; // Import your SCSS styles

const FAQ4 = () => {
    const questions = [
        {
            title: "Ex feugiat felis vel vulputate suspendisse?",
            isActive: true,
        },
        {
            title: "Sagittis et litora quisque rhoncus diam?",
            isActive: false,
        },
        {
            title: "Congue ex massa blandit sollicitudin sapien?",
            isActive: false,
        },
        {
            title: "Hendrerit himenaeos ac curae pellentesque tempor?",
            isActive: false,
        },
        {
            title: "Habitant quisque consectetur non nibh etiam?",
            isActive: false,
        },
    ];

    return (
        <div className="faq-container">
            <div className="faq-header">
                <h6 className="faq-title">COMMON QUESTIONS</h6>
                <h5 className="faq-subtitle">Most Popular Questions</h5>
                <p className="faq-description">Your most common questions answered here.</p>
            </div>
            <div className="accordion-container">
                {questions.map((question, index) => (
                    <div key={index} className={`accordion-item ${question.isActive ? 'active' : ''}`}>
                        <div className="accordion-header">
                            <h5>{question.title}</h5>
                            <span className="accordion-icon">{question.isActive ? '▲' : '▼'}</span>
                        </div>
                        {question.isActive && (
                            <div className="accordion-content">
                                {/* Content for the active accordion item */}
                                <p>This is the answer to the question.</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ4;
