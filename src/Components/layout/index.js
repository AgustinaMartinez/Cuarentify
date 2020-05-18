import React, {useState} from 'react';
import Navbar from '../navbar';
import SearchBar from '../searchbar';

const Layout = props => {

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
        <React.Fragment>
            <Navbar toggleSearchBar={toggleSearchBar} arrow={arrow}/>
            <SearchBar search={search}/>
            {props.children}
        </React.Fragment>
    );
}

export default Layout;