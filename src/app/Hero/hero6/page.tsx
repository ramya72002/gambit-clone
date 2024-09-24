import React from 'react';
import './hero6.scss';

const Hero6: React.FC = () => {
    return (
        <div className="hero6-container">
            <div className="hero6-background">
                <div className="hero6-content">
                    <h6 className="hero6-title">WHY CHOOSE US</h6>
                    <h1 className="hero6-subtitle">Discover Potential Wise, Gambit is the best chess school.</h1>
                    <p className="hero6-description">Viverra dictum curae consectetur molestie orci</p>
                    <div className="hero6-icon-boxes">
                        <div className="icon-box">
                            <i className="mdi mdi-chess-queen"></i>
                            <h4>Experience and Expertise</h4>
                            <p>Viverra dictum curae consectetur molestie orci</p>
                        </div>
                        <div className="icon-box">
                            <i className="mdi mdi-medal"></i>
                            <h4>Official Certifications</h4>
                            <p>Viverra dictum curae consectetur molestie orci</p>
                        </div>
                        <div className="icon-box">
                            <i className="mdi mdi-home-assistant"></i>
                            <h4>Modern Facilities</h4>
                            <p>Viverra dictum curae consectetur molestie orci</p>
                        </div>
                        <div className="icon-box">
                            <i className="mdi mdi-account-group"></i>
                            <h4>Expert Lecturer</h4>
                            <p>Viverra dictum curae consectetur molestie orci</p>
                        </div>
                    </div>
                </div>
                <div className="hero6-image">
                    <img 
                        src="http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/golden-trophy-2021-08-26-15-27-45-utc2.png" 
                        alt="Trophy"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero6;
