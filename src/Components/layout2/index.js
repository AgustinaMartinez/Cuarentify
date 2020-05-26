import React, {useState} from 'react';
import Navbar2 from '../navbar2';
import SearchBar from '../searchbar';
import './_layout2.scss';

const Layout2 = props => {

    const [search, setSearch] = useState(false);
    const [arrow, setArrow] = useState("/Assets/down_arrow_icon.svg");

    const toggleSearchBar = () => {
        if(!search) {
            setSearch((prevState) => {
                return {searchBar: !prevState.searchBar}
            });
            setArrow("/Assets/up_arrow_icon.svg")
        } else {
            setSearch(false);
            setArrow("/Assets/down_arrow_icon.svg");
        }
    }

    return (
        <div className="layout2">
            <Navbar2 toggleSearchBar={toggleSearchBar} arrow={arrow}/>
            <SearchBar search={search}/>
            {props.children}
        </div>
    );
}

export default Layout2;