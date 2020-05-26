import {useContext} from 'react';
import AppContext from '../app';

const useAlbum = () => {

    const [storage, setStorage] = useContext(AppContext);

    const setAlbum = (album) => {
        setStorage(
            (prevState) => (
                {...prevState, album}
            )
        );
    }

    return {
        album: storage.album,
        setAlbum,
    }
}

export default useAlbum;