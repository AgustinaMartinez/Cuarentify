import {useContext} from 'react';
import AppContext from '../app';

const useFavorite = () => {

    const [storage, setStorage] = useContext(AppContext);

    const setFavorite = (favorite) => {
        setStorage(
            (prevState) => (
                {...prevState, favorite}
            )
        );
    }

    return {
        favorite: storage.favorite,
        setFavorite,
    }
}

export default useFavorite;