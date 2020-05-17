import React from 'react';
import './_navbar.scss';

const Navbar = props => {

    return (
        <nav className="navbar1">
            <div className="navbar1__nothing"></div>
            <img className="navbar1__logo" src="/Assets/icon.png" alt="logo"></img>
            <button className="navbar1__container" onClick={props.toggleSearchBar}>
                <img className="navbar1__container__loupe" src="/Assets/search_icon.svg" alt="loupe logo"/>
                <img className="navbar1__container__arrow" src={props.arrow} alt="arrow"/>
            </button>
        </nav>
    )
}

export default Navbar;