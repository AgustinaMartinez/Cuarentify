import {useContext} from 'react';
import AppContext from '../app';

const useToken = () => {

    const [storage, setStorage] = useContext(AppContext);

    const setToken = (token) => {
        setStorage((prevState) => ({...prevState, token}));
    }

    return {
        token: storage.token,
        setToken
    }
}

export default useToken;