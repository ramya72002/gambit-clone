import React from 'react';
import './about3.scss'; // Import your SCSS file

const About3: React.FC = () => {
    return (
        <div className="container">
            <div className="backgroundOverlay">
                <div className="content">
                    <div className="valueSection">
                        <h6 className="header">OUR VALUE</h6>
                        <h4 className="description">
                            Chess is more than just a game. This is a lesson in life, strategy, and determination.
                        </h4>
                    </div>
                    <div className="cardsContainer">
                        <div className="card">
                            <div className="iconBox">
                                <i className="mdi mdi-eye" />
                                <div className="title">Our Vision</div>
                                <p className="cardDescription">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                            <button className="learnMore">Learn More</button>
                        </div>

                        <div className="card">
                            <div className="iconBox">
                                <i className="icofont icofont-rocket" />
                                <div className="title">Our Mission</div>
                                <p className="cardDescription">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                            <button className="learnMore">Learn More</button>
                        </div>

                        <div className="card">
                            <div className="iconBox">
                                <i className="icomoon icomoon-bullhorn" />
                                <div className="title">Our Motto</div>
                                <p className="cardDescription">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                            <button className="learnMore">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About3;

