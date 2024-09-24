import React from 'react';
import './footer.scss'; // Make sure to create a corresponding SCSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/Black-Gambit-logo.png" alt="Gambit Logo" />
                </div>
                <div className="footer-description">
                    <p>Maximus tempor nec morbi parturient malesuada. Congue vitae lobortis suspendisse nostra nullam et sociosqu purus letius litora.</p>
                </div>
                <div className="footer-social">
                    <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                </div>
                <div className="footer-links">
                    <h5>Company</h5>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Leadership</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Article & News</a></li>
                        <li><a href="#">Legal Notice</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Ticket Support</a></li>
                        <li><a href="#">Online Support</a></li>
                    </ul>
                </div>
                <div className="footer-newsletter">
                    <h5>Newsletter</h5>
                    <p>Signup our newsletter to get update information, news, insight or promotions.</p>
                    <form>
                        <input type="email" placeholder="Email" required />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Gambit. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
