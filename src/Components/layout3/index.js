import React from 'react';
import Navbar3 from '../navbar3';
import './_layout3.scss';

const Layout3 = props => {

    return (
        <div className="layout3">
            <Navbar3/>
            {props.children}
        </div>
    );
}

export default Layout3;