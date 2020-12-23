import React from 'react';
import {Link} from 'react-router-dom';
import './_header3.scss';

const Header3 = props => {
    return (
        <header className="header3">
            <div className="header3__container">
                <img className="header3__container__img" src={props.src} alt="album"/>
                <div className="header3__container__comments">
                    <h1 className="header3__container__comments__title">{props.name}</h1>
                    <p className="header3__container__comments__p">{props.comment}</p>
                </div>
            </div>
            <div className="header3__links">
                <Link to="/home" className="header3__links--1">Home </Link>
                <Link to={props.link2} className="header3__links--2">Artists</Link>
                <Link to={props.link3} className="header3__links--3">{props.linkArtistName}</Link>
            </div>
        </header>
    );
}

export default Header3;