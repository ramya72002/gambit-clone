/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './contact.scss';
import Footer from '@/app/Footer/page';
import Header from '@/app/Header/page';
const Contact = () => {
  return (
    <div>
                
    <div className="contact-section">
      
      <div
        className="contact-header"
        style={{
          backgroundImage: `url('http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/chess-board-game-concept-for-competition-and-strategy-6-e1698108470123.jpg')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
          <Header />
        <h1 className="title">Contact</h1>
        <h4 className="subtitle">We would love to hear from you.</h4>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h6>GET IN TOUCH</h6>
          <h4>Seamless Communication, Global Impact.</h4>
          <p>Contact us using the information below, or send us a message.</p>
          
          <div className="icon-box">
            <i className="mdi mdi-map-marker-outline"></i>
            <div className="info">
              <h5>Head Office</h5>
              <p>Jln Cempaka Wangi No 22<br />Jakarta - Indonesia</p>
            </div>
          </div>
          
          <div className="icon-box">
            <i className="mdi mdi-email-outline"></i>
            <div className="info">
              <h5>Email Us</h5>
              <p>support@yourdomain.tld<br />hello@yourdomain.tld</p>
            </div>
          </div>

          <div className="icon-box">
            <i className="mdi mdi-phone-in-talk-outline"></i>
            <div className="info">
              <h5>Let's Talk</h5>
              <p>Phone: +6221.2002.2012<br />Fax: +6221.2002.2013</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h4>Send us a message</h4>
          <form>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Contact;
