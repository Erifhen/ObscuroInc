import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-logo-box">
                        <h2 className="font-gothic footer-logo-text">Obscuro Inc.</h2>
                    </div>
                    <p className="footer-copy">© 2025 Obscuro Inc. Direitos autorais GPL.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
