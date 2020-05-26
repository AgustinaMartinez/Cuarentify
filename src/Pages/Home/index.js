import React from 'react';
import Layout1 from '../../Components/layout1';
import Header from '../../Components/header-home';
import Footer from '../../Components/footer';

import './_home.scss';

const HomePage = () => (

    <div className="homePage">
        <Layout1/>
        <Header/>
        <Footer/>
    </div>
);

export default HomePage;