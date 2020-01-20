import React from 'react';
import Nav from '../Nav/Nav';
import './header.scss';
// import lightblub from '../../images/lightblub.png';

const Header = () => {

    return (
        <div className="header">
            <div className="header__content">
                {/*<img src={lightblub} alt="header image" />*/}
                <div className="header__content__headline">MindGiant.de</div>
                <Nav />
            </div>
        </div>
    );
};

export default Header;
