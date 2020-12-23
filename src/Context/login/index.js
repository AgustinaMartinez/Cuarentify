import {useContext} from 'react';
import AppContext from '../app';

const useLogin = () => {

    const [storage, setStorage] = useContext(AppContext);

    const setIsLogged = (prevState) => {
        setStorage({isLogged: !prevState.isLogged});
    }

    return {
        isLogged: storage.isLogged,
        setIsLogged
    }
}

export default useLogin;