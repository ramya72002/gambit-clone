import React from 'react';
import './Hero5.scss'; // Import your SCSS file here

const Hero5 = () => {
    return (
        <div className="hero5-container" style={{ padding: '5em 0 7em 0', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="hero5-content" style={{ maxWidth: '1500px', padding: '2em' }}>
                <h6 className="hero5-title" style={{ textAlign: 'center' }}>What we offer</h6>
                <h2 className="hero5-subtitle" style={{ textAlign: 'center' }}>In every chess position, there are opportunities.</h2>
            </div>
            <div className="hero5-boxes" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {/* Box 1 */}
                <div className="hero5-box" style={{ width: '33%', textAlign: 'left', padding: '2em' }}>
                    <div className="icon-box" style={{ border: '1px solid #ccc', padding: '2em', borderRadius: '5px',backgroundColor:'black',color:'white' }}>
                        <i className="fas fa-chess-pawn" style={{ fontSize: '28px', marginBottom: '7px' ,backgroundColor:'white',color:'black'}}></i>
                        <div className="icon-box-title" style={{ marginBottom: '7px' ,color:'white'}}>Adult</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="icon-box" style={{ border: '1px solid #ccc', padding: '2em', borderRadius: '5px',backgroundColor:'black',color:'white'  }}>
                        <i className="fas fa-chess-bishop" style={{ fontSize: '28px', marginBottom: '7px',backgroundColor:'white',color:'black' }}></i>
                        <div className="icon-box-title" style={{ marginBottom: '7px' }}>Private</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
                {/* Box 2 */}
                {/* Call to Action Box 1 */}
                <div className="hero5-cta" style={{ width: '33%', textAlign: 'left', padding: '2em' }}>
                    <div className="cta-box" style={{ backgroundImage: 'url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/school-boys-playing-chess-e1698161918720.jpg)', backgroundSize: 'cover', minHeight: '275px', padding: '20px', color: '#1B1B1B' }}>
                        <div className="cta-title" style={{ fontSize: '31px', fontWeight: '600' }}>Basic</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                        <button style={{ backgroundColor: '#1B1B1B', color: '#FFFFFF', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Learn More</button>
                    </div>
                </div>
                {/* Call to Action Box 2 */}
                <div className="hero5-cta" style={{ width: '33%', textAlign: 'left', padding: '2em' }}>
                    <div className="cta-box" style={{ backgroundImage: 'url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/friends-playing-in-chess-e1698161837628.jpg)', backgroundSize: 'cover', minHeight: '275px', padding: '20px', color: '#1B1B1B' }}>
                        <div className="cta-title" style={{ fontSize: '31px', fontWeight: '600' }}>Intermediate</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                        <button style={{ backgroundColor: '#1B1B1B', color: '#FFFFFF', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Learn More</button>
                    </div>
                </div>
                {/* Call to Action Box 3 */}
                <div className="hero5-cta" style={{ width: '33%', textAlign: 'left', padding: '2em' }}>
                    <div className="cta-box" style={{ backgroundImage: 'url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/smart-boy-playing-chess-and-staring-at-the-chessboard-e1698161801842.jpg)', backgroundSize: 'cover', minHeight: '275px', padding: '20px', color: '#1B1B1B' }}>
                        <div className="cta-title" style={{ fontSize: '31px', fontWeight: '600' }}>Advance</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                        <button style={{ backgroundColor: '#1B1B1B', color: '#FFFFFF', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Learn More</button>
                    </div>
                </div>
                <div className="hero5-cta" style={{ width: '33%', textAlign: 'left', padding: '2em' }}>
                    <div className="cta-box" style={{ backgroundImage: 'url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/friends-playing-in-chess-e1698161837628.jpg)', backgroundSize: 'cover', minHeight: '275px', padding: '20px', color: '#1B1B1B' }}>
                        <div className="cta-title" style={{ fontSize: '31px', fontWeight: '600' }}>Intermediate</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                        <button style={{ backgroundColor: '#1B1B1B', color: '#FFFFFF', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Learn More</button>
                    </div>
                </div>
                {/* Call to Action Box 3 */}
                <div className="hero5-cta" style={{ width: '33%', textAlign: 'left', padding: '2em' }}>
                    <div className="cta-box" style={{ backgroundImage: 'url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/smart-boy-playing-chess-and-staring-at-the-chessboard-e1698161801842.jpg)', backgroundSize: 'cover', minHeight: '275px', padding: '20px', color: '#1B1B1B' }}>
                        <div className="cta-title" style={{ fontSize: '31px', fontWeight: '600' }}>Advance</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                        <button style={{ backgroundColor: '#1B1B1B', color: '#FFFFFF', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero5;
