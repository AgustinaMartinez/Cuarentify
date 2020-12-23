import React from 'react';
import Input from '../input';
import {Link} from 'react-router-dom';
import useInput from '../../Context/input';
import './_header2.scss';

const Header2 = () => {

    const {input} = useInput();
    let width = window.innerWidth;

    return (
        <header className="header2">
            <div className="header2__text">
                <h1 className="header2__text__title">Artists</h1>
                <p className="header2__text__paragraph">You are currently searching: <span className="header2__paragraph--bold">"{input}"</span></p>
                {width < 700 ? '' : <Input className="header2__text__input" placeholder="Search your favorite artist here"/>}
                <div className="header2__text__links">
                    <Link to="/home" className="header2__text__links--1">Home </Link>
                    <Link to="/artists" className="header2__text__links--2">Artists</Link>
                </div>
            </div>
        </header>
    );
}

export default Header2;