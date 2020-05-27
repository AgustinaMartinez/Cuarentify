import React, {useState} from 'react';
import PlayPauseButton from '../play-pauseButton';
import useFavorite from '../../Context/favorites';
import useAlbum from '../../Context/album';
import './_trackList.scss';

const TracksList = props => {

    const [starIcon, setStarIcon] = useState("/Assets/star_icon.svg");
    const [isFav, setIsFav] = useState(false);
    const {favorite, setFavorite} = useFavorite();
    const {album} = useAlbum();

    const toggleFav = () => {
        if(isFav===false) {
            setIsFav((prevState) => {
                return {star: !prevState.star}
            });
            setStarIcon("/Assets/star_icon2.svg");
            const currentFavorites = JSON.parse(localStorage.getItem('favs')) || []
            const newFavorites = [...currentFavorites, {'favTrack': props.name, 'favAlbum': album.name, 'favArtist': album.artists[0].name}]
            localStorage.setItem('favs', JSON.stringify(newFavorites));
            setFavorite(newFavorites);
            localStorage.getItem('favs');
        } else{
            setIsFav(false);
            setStarIcon("/Assets/star_icon.svg");
            localStorage.removeItem('favs', {'favTrack': props.name, 'favAlbum': album.name, 'favArtist': album.artists[0].name});
        }
    }

    console.log(favorite);

    return (
        <div className="tracksList">
            <div className="tracksList__artist">
                <div className="tracksList__artist__box">
                    <PlayPauseButton src={props.src} onClick={props.toggleButton} url={props.url}/>
                    <div className="tracksList__artist__box__description">
                        <h6 className="tracksList__artist__box__description__title">{props.name}</h6>
                        <p className="tracksList__artist__box__description__comment">{props.comment}</p>
                    </div>
                </div>
                <button className="tracksList__artist__button" onClick={toggleFav}>
                    <img className="tracksList__artist__button__star" src={starIcon} alt="star icon"/>
                </button>
            </div>
        </div>
    );
}

export default TracksList;