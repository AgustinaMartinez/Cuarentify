import React from 'react';
import Input from '../input';
import './_header.scss';

const Header = () => (

    <header className="header">
        <div className="header__text">
            <div className="header__text__titles">
                <h3 className="header__text__titles__title">Welcome to</h3>
                <h1 className="header__text__titles__subtitle">Cuarensearch</h1>
            </div>
            <p className="header__text__paragraph">
                Search your favorite songs over Cuarentify, just enter an artist's
                name in the following search box and enjoy!
            </p>
        </div>
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