import {useContext} from 'react';
import AppContext from '../app';

const useInput = () => {

    const [storage, setStorage] = useContext(AppContext);

    const setInput = (input) => {
        setStorage(
            (prevState) => (
                {...prevState, input}
            )
        );
    }

    return {
        input: storage.input,
        setInput,
    }
}

export default useInput;