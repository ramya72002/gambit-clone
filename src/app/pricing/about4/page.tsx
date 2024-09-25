import React from 'react';
import './about4.scss';

const About4 = () => {
  return (
    <div className="about4-container">
      <div className="inner-container" style={{ padding: '5em 0 7em 0' }}>
        <div className="header">
          <h6 className="title">MEET OUR TRAINER</h6>
          <h2 className="subtitle">Teamwork makes the dream work.</h2>
        </div>
        <div className="trainer-cards">
          <div className="trainer-card">
            <img src="http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/01.jpg" alt="Hans Muller" />
            <div className="trainer-info">
              <div className="trainer-name">Hans Muller</div>
              <div className="trainer-role">Trainer</div>
              <div className="social-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="trainer-card">
            <img src="http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/06.jpg" alt="Eva Schmidt" />
            <div className="trainer-info">
              <div className="trainer-name">Eva Schmidt</div>
              <div className="trainer-role">Trainer</div>
              <div className="social-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="trainer-card">
            <img src="http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/03.jpg" alt="Klaus Wagner" />
            <div className="trainer-info">
              <div className="trainer-name">Klaus Wagner</div>
              <div className="trainer-role">Trainer</div>
              <div className="social-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="trainer-card">
            <img src="http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/20.jpg" alt="Ingrid Becker" />
            <div className="trainer-info">
              <div className="trainer-name">Ingrid Becker</div>
              <div className="trainer-role">Trainer</div>
              <div className="social-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About4;
