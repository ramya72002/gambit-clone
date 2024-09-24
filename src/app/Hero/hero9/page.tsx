import React from 'react';
import './Hero9.scss';

const Hero9: React.FC = () => {
    return (
        <div className="hero9-container">
            <div
                className="hero9-background"
                style={{
                    backgroundImage: 'url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/chessboard-with-black-chess-figures-isolated-on-black-e1698059185527.jpg)',
                    padding: '3em 0',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                }}
            >
                <div className="hero9-video-background">
                    <video
                        autoPlay
                        loop
                        muted
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    >
                        <source src="https://www.youtube.com/watch?v=ZP2njDJErho" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="hero9-content">
                    <div className="hero9-inner-content">
                        <h1 className="hero9-title">Experience the Future of Chess Training! Try Our Fastest Strategy Now!</h1>
                        <p className="hero9-description">
                            Discover advanced techniques to enhance your gameplay and strategy.
                        </p>
                        <button className="hero9-button">DISCOVER MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero9;
