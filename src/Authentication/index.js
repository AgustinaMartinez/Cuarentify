import {useEffect} from 'react';
import useToken from '../Context/token';

const Authentication = () => {

    const {token, setToken} = useToken();

    useEffect(() => {
        const authenticate = () => {
            let theToken = window.location.hash.substr(1);
            if (theToken) {
                const t = Object.fromEntries(new URLSearchParams(theToken));
                setToken(t.access_token);
            }
            return token;
        }
        authenticate();
    }, []);
}

export default Authentication; 