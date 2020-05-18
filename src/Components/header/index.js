import React from 'react';
import Input from '../input';
import './_header.scss';

const Header = props => (

    <header className="header">
        <div className="header__titles">
            <h3 className="header__titles__title">Welcome to</h3>
            <h1 className="header__titles__subtitle">Cuarensearch</h1>
        </div>
        <p className="header__paragraph">
            Search your favorite songs over Cuarentify, just enter an artist's name in the following
            search box and enjoy!
        </p>
        <div className="header__searchBox">
            <Input
                name="artist"
                type="text"
                placeholder="Type the name of your favorite artist"
            />
        </div>
    </header>
);

export default Header;