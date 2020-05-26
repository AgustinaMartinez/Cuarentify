import React from 'react';
import './_search-button.scss';

const SearchButton = props => {

    return (
        <button className="button" onClick={props.toggleSearchBar}>
            <img className="button__loupe" src="/Assets/search_icon.svg" alt="loupe logo"/>
            <img className="button__arrow" src={props.arrow} alt="arrow"/>
        </button>
    );
}

export default SearchButton;