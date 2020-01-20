import React from 'react';
import './nav.scss';

const Nav = () => {

    return (
        <div className="nav">
            <a href="#" className="nav__tests">
                Tests
            </a>
            <a href="#" className="nav__images">
                Bilder
            </a>
            <a href="#" className="nav__blog">
                Blog
            </a>
        </div>
    );
};

export default Nav;
