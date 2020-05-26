import {useContext} from 'react';
import AppContext from '../app';

const useTracks = () => {

    const [storage, setStorage] = useContext(AppContext);

    const setTracks = (tracks) => {
        setStorage(
            (prevState) => (
                {...prevState, tracks}
            )
        );
    }

    return {
        tracks: storage.tracks,
        setTracks,
    }
}

export default useTracks;