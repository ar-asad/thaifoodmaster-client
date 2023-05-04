import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white">
            <div>
                <h2 className='text-xl font-bold'>Thaifoodmaster</h2>
                <p class="logo-col__text">Copyright @ 2027 by Thaifoodmaster.Inc.All rights reserved.</p>
            </div>
            <div>
                <span className="footer-title">Contact us</span>
                <a href="/" className="link link-hover">623 Harrison St., 2nd Floor </a>
                <a href="/" className="link link-hover">San Francisco, CA 94107</a>
                <a href="/" className="link link-hover">415-201-6370</a>
                <a href="/" className="link link-hover">hello@omnifood.com</a>
            </div>
            <div>
                <span className="footer-title">Account</span>
                <a href="/" className="link link-hover">Create account</a>
                <a href="/" className="link link-hover">Sign in</a>
                <a href="/" className="link link-hover">IOS app</a>
                <a href="/" className="link link-hover">Android app</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/" className="link link-hover">Terms of use</a>
                <a href="/" className="link link-hover">Privacy policy</a>
                <a href="/" className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;