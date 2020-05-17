import React from 'react';
import './_searchBar.scss';

const searchBar = props => {

    let barClasses = 'navbar2';
    if(props.search){
        barClasses = 'navbar2 open';
    }

    return (
        <div className={barClasses}>
            <button className="navbar2__button">
                <img src="/Assets/search_icon.svg" className="navbar2__button__icon" alt="buscar"></img>
            </button>
            <input type="text" className="navbar2__input" placeholder="Search for another artist"></input>
        </div>
    )
}

export default searchBar;