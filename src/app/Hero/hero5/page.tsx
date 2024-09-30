/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import './hero5.scss'; // Import your SCSS file here

const Hero5 = () => {
    return (
        <div className="hero5-container">
            <div className="hero5-content">
                <h6 className="hero5-title">What we offer</h6>
                <h2 className="hero5-subtitle">In every chess position, there are opportunities.</h2>
            </div>
            <div className="hero5-boxes">
                {/* Box 1 */}
                <div className="hero5-box">
                <div className="icon-box" style={{ border: '1px solid #ccc', padding: '2em', borderRadius: '5px',backgroundColor:'black',color:'white'  }}>
                        <i className="fas fa-chess-pawn" style={{ fontSize: '28px', marginBottom: '7px',backgroundColor:'white',color:'black' }}></i>
                        <div className="icon-box-title" style={{ marginBottom: '7px' }}>Adult</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="icon-box" style={{ border: '1px solid #ccc', padding: '2em', borderRadius: '5px',backgroundColor:'black',color:'white'  }}>
                        <i className="fas fa-chess-bishop" style={{ fontSize: '28px', marginBottom: '7px',backgroundColor:'white',color:'black' }}></i>
                        <div className="icon-box-title" style={{ marginBottom: '7px' }}>Private</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
                {/* Call to Action Boxes */}
                {[ 
                    { title: 'Basic', imageUrl: 'http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/school-boys-playing-chess-e1698161918720.jpg' },
                    { title: 'Intermediate', imageUrl: 'http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/friends-playing-in-chess-e1698161837628.jpg' },
                    { title: 'Advance', imageUrl: 'http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/smart-boy-playing-chess-and-staring-at-the-chessboard-e1698161801842.jpg' },
                    { title: 'Basic', imageUrl: 'http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/school-boys-playing-chess-e1698161918720.jpg' },
                    { title: 'Intermediate', imageUrl: 'http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/friends-playing-in-chess-e1698161837628.jpg' },
                ].map((cta, index) => (
                    <div className="hero5-cta" key={index}>
                        <div className="cta-box" style={{ backgroundImage: `url(${cta.imageUrl})` }}>
                            <div className="cta-title">{cta.title}</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                            <button className="learn-more-button">Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero5;
