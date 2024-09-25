// components/Hero5.js

import React from 'react';
import './hero5.scss';

const Hero5 = () => {
    return (
        <div className="hero5">
            <div className="hero5-container">
                <div className="hero5-heading">
                    <h6 className="hero5-title">What we offer</h6>
                    <h6 className="hero5-subtitle">In every chess position, there are opportunities.</h6>
                </div>
                <div className="hero5-icon-boxes">
                    <div className="icon-box">
                    <div className="icon-box-image">
                            {/* Add the image above Adult */}
                            <img src="" alt="" />
                        </div>
                        <div className="icon-box-content">
                            <div className="title">Adult</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className="icon-box">
                    <div className="icon-box-image">
                            {/* Add the image above Private */}
                        </div>
                        <div className="icon-box-content">
                            <div className="title">Private</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                </div>
                <div className="hero5-cards">
                    <div className="hero5-card" style={{ backgroundImage: `url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/school-boys-playing-chess-e1698161918720.jpg)` }}>
                        <div className="card-content">
                            <div className="card-title">Basic</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                            <button className="learn-more-button">Learn More</button>
                        </div>
                    </div>
                    <div className="hero5-card" style={{ backgroundImage: `url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/friends-playing-in-chess-e1698161837628.jpg)` }}>
                        <div className="card-content">
                            <div className="card-title">Intermediate</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                            <button className="learn-more-button">Learn More</button>
                        </div>
                    </div>
                    <div className="hero5-card" style={{ backgroundImage: `url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/smart-boy-playing-chess-and-staring-at-the-chessboard-e1698161801842.jpg)` }}>
                        <div className="card-content">
                            <div className="card-title">Advance</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                            <button className="learn-more-button">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero5;
