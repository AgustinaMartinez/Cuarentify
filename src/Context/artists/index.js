import {useContext} from 'react';
import AppContext from '../app';

const useArtist = () => {

    const [storage, setStorage] = useContext(AppContext);

    const setArtists = (artists) => {
        setStorage(
            (prevState) => (
                {...prevState, artists}
            )
        );
    }

    return {
        artists: storage.artists,
        setArtists,
    }
}

export default useArtist;