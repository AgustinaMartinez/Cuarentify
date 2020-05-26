import React from 'react';
import Input from '../input';

import './_searchBar.scss';

const SearchBar = props => {

    let barClasses = 'searchNavbar';
    if(props.search){
        barClasses = 'searchNavbar open';
    }

    return (
        <div className={barClasses}>
            <Input
                name="artist"
                type="text"
                placeholder="Search for another artist"
            />
        </div>
    );
}

export default SearchBar;