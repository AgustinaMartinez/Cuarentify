import React from 'react';
import Layout1 from '../../Components/layout1';
import LoginSection from '../../Components/login';
import Footer from '../../Components/footer';
import useLogin from '../../Context/login';
import {loginConfig} from '../../Config/config';

import './_login.scss';

const LoginPage = () => {

    let widthScreen = window.innerWidth;

    const {isLogged, setIsLogged} = useLogin();

    const url = `${loginConfig.authEndpoint}?client_id=${loginConfig.clientId}&response_type=${loginConfig.responseType}&redirect_uri=${loginConfig.redirectUri}`;

    const toggleLogin = () => {
        setIsLogged(!isLogged);
        window.location = url;
    }

    return (
        <div className="loginPage">
            <Layout1/>
            <LoginSection onClick={toggleLogin}/>
            {widthScreen > 1000 ? <Footer/> : ''}
        </div>
    );
};

export default LoginPage;