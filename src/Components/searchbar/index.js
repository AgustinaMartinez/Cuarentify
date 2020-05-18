import React from 'react';
import Input from '../input';

import './_searchBar.scss';

const SearchBar = props => {

    let barClasses = 'navbar2';
    if(props.search){
        barClasses = 'navbar2 open';
    }

    return (
        <div className={barClasses}>
            <Input
                name="artist"
                type="text"
                placeholder="Search for another artist"
            />
        </div>
    )
}

export default SearchBar;