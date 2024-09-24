import React from 'react';

const ChessComponent = () => {
    return (
        <section className="hero">
        <div style={{ display: 'flex', padding: '7em 0' }}>
            <div style={{ width: '40%', padding: '3em 5em' }}>
                <h6>WHO WE ARE</h6>
                <h2>The magic of chess, beauty and complexity.</h2>
                <p>Your text here...</p>
                <div>
                    <h4>Chess Club</h4>
                    <p>Dignissim mus orci pretium...</p>
                </div>
                <div>
                    <h4>Chess Training Center</h4>
                    <p>Dignissim mus orci pretium...</p>
                </div>
            </div>
            <div style={{ width: '60%', backgroundImage: `url(http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/chessboard-with-black-chess-figures-isolated-on-black-e1698059185527.jpg)`, backgroundSize: 'cover' }}>
                <h4>Full of passion and dedication...</h4>
                <img src="http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/Martin-Richter-marking.png" alt="GM Martin Richter" />
                <h6>GM MARTIN RICHTER</h6>
            </div>
        </div>
        </section>
    );
};

export default ChessComponent;
