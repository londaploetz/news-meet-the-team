import React from 'react';
import './footer.css';

const Footer = () => (
    <div className='footer-container'>
        <div className='footer-layer1'>

            <div className='footer-links'>
                <p>News</p>
                <p>Omaha Everyday </p>
            </div>
            <div className='footer-links'>
                <p>Company</p>
                <p>Terms & Conditions </p>
            </div>
            <div className='footer-links'>
                <p>Contact Us</p>
                <p>6 On Your Side </p>
            </div>
            <div className='footer-links'>
                <p>First Alert Weather</p>
                <p>WOWT</p>
            </div>
        </div>

        <div className='footer-layer2'>
            <p>Public Inspection File</p>
            <p>sixonline@wowt.com - 402-346-6666</p>
            <p>Terms Of Service</p>
            <p>Closed Captions</p>
            <p>Privacy Policy</p>
        </div>
        <div className='footer-layer3'>
            <p> A Gray Media Group, Inc. Station - © 2002-2022 Gray Television, Inc.</p>
        </div>
    </div>
);
export default Footer;