import React, {useState} from 'react';
import Navbar1 from '../navbar1';
import SearchBar from '../searchbar';
import './_layout1.scss';

const Layout1 = props => {

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
            <Navbar1 toggleSearchBar={toggleSearchBar} arrow={arrow}/>
            <SearchBar search={search}/>
            {props.children}
        </div>
    );
}

export default Layout1;