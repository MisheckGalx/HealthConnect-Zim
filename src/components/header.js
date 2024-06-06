import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/how-it-works">How it Works</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/faq">FAQ</Link>
            </nav>
        </header>
    );
};

export default Header;
