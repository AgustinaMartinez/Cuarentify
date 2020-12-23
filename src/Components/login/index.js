import React from 'react';
import './_loginSection.scss';

const LoginSection = props => {

    return (
        <section className="sectionLog">
            <div className="sectionLog__text">
                <div className="sectionLog__text__titles">
                    <h3 className="sectionLog__text__titles__title">Welcome to</h3>
                    <h1 className="sectionLog__text__titles__subtitle">Cuarentify</h1>
                </div>
                <p className="sectionLog__text__paragraph">
                    This is a React project, please log in with your Spotify account to start using the web app!
                </p>
            </div>
            <button className="sectionLog__button" onClick={props.onClick}>Log in</button>
        </section>
    );
}

export default LoginSection;