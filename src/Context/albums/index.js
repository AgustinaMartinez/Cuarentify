import {useContext} from 'react';
import AppContext from '../app';

const useAlbums = () => {

    const [storage, setStorage] = useContext(AppContext);

    const setAlbums = (albums) => {
        setStorage(
            (prevState) => (
                {...prevState, albums}
            )
        );
    }

    return {
        albums: storage.albums,
        setAlbums,
    }
}

export default useAlbums;