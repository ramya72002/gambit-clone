import React from 'react';
import './hero7.scss';

const Hero7 = () => {
    return (
        <div className="hero7" style={{ padding: '5em 0 7em 0', backgroundColor: '#f9f9f9' }}>
            <div className="container" style={{ maxWidth: '600px', padding: '2em' }}>
                <h6 className="title">FACILITIES AND AMENITIES</h6>
                <h2 className="subtitle">Discover your potential: Gambit, your best chess school.</h2>
            </div>

            <div className="flex-container">
                {/* Flip Box 1 */}
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <h3>Modern Training</h3>
                            <p>Tincidunt vehicula lorem vulputate primis fames eget proin dui a ullamcorper eu id imperdiet fusce</p>
                        </div>
                        <div className="flip-box-back" style={{ backgroundImage: 'url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/school-boys-playing-chess-e1698161918720.jpg)' }}>
                            {/* Add back content if needed */}
                        </div>
                    </div>
                </div>

                {/* Flip Box 2 */}
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <h3>Best Quality Training</h3>
                            <p>Tincidunt vehicula lorem vulputate primis fames eget proin dui a ullamcorper eu id imperdiet fusce</p>
                        </div>
                        <div className="flip-box-back" style={{ backgroundImage: 'url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/chess-playing-e1697916016480.jpg)' }}>
                            {/* Add back content if needed */}
                        </div>
                    </div>
                </div>

                {/* Flip Box 3 */}
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <h3>Practical Training</h3>
                            <p>Tincidunt vehicula lorem vulputate primis fames eget proin dui a ullamcorper eu id imperdiet fusce</p>
                        </div>
                        <div className="flip-box-back" style={{ backgroundImage: 'url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/game-of-chess-e1698161986705.jpg)' }}>
                            {/* Add back content if needed */}
                        </div>
                    </div>
                </div>

                {/* Flip Box 4 */}
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <h3>Library & Resources</h3>
                            <p>Tincidunt vehicula lorem vulputate primis fames eget proin dui a ullamcorper eu id imperdiet fusce</p>
                        </div>
                        <div className="flip-box-back" style={{ backgroundImage: 'url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/friends-playing-in-chess-e1698161837628.jpg)' }}>
                            {/* Add back content if needed */}
                        </div>
                    </div>
                </div>

                {/* Flip Box 5 */}
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <h3>Accommodations</h3>
                            <p>Tincidunt vehicula lorem vulputate primis fames eget proin dui a ullamcorper eu id imperdiet fusce</p>
                        </div>
                        <div className="flip-box-back" style={{ backgroundImage: 'url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/teenager-playing-chess.jpg)' }}>
                            {/* Add back content if needed */}
                        </div>
                    </div>
                </div>

                {/* Flip Box 6 */}
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <h3>Training Equipment</h3>
                            <p>Tincidunt vehicula lorem vulputate primis fames eget proin dui a ullamcorper eu id imperdiet fusce</p>
                        </div>
                        <div className="flip-box-back" style={{ backgroundImage: 'url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/chess-equipment.jpg)' }}>
                            {/* Add back content if needed */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero7;
