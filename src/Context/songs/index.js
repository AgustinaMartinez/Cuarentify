import {useContext} from 'react';
import AppContext from '../app';

const useSong = () => {

    const [storage, setStorage] = useContext(AppContext);

    const setSong = (song) => {
        setStorage(
            (prevState) => (
                {...prevState, song}
            )
        );
    }

    return {
        song: storage.song,
        setSong,
    }
}

export default useSong;