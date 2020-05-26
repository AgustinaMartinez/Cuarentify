import React from 'react';
import SearchButton from '../search-button';
import './_navbar2.scss';

const Navbar2 = props => {

    return (
        <nav className="navbar2">
            <div className="navbar2__nothing"></div>
            <img className="navbar2__logo" src="/Assets/logo.png" alt="logo"/>
            <SearchButton toggleSearchBar={props.toggleSearchBar} arrow={props.arrow}/>
        </nav>
    );
}

export default Navbar2;