import React from 'react';
import {Link} from 'react-router-dom';
import './_footer.scss';

const Footer = () => {

    return (
        <footer className="footer">
            <Link to="/home" className="footer__link">
                <button className="footer__link__homeButton">
                    <img className="footer__link__homeButton__icon" src="/Assets/home_icon.svg" alt="home"/>
                </button>
            </Link>
            <p className="footer__comment">Copyright 2020 
                <span className="footer__comment--bold"> Cuarentify </span> 
                | All rights reserved ©  
                | Made by Agustina Martínez
            </p>
        </footer>
    );
}

export default Footer;