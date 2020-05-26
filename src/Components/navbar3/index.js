import React from 'react';
import Input from '../input';
import './_navbar3.scss';

const Navbar3 = () => {

    return (
        <nav className="navbar3">
            <img className="navbar3__logo" src="/Assets/logo.png" alt="logo"/>
            <Input placeholder="Search for another artist"/>
        </nav>
    );
}

export default Navbar3;