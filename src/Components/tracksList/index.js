import React, {useState} from 'react';
import PlayPauseButton from '../play-pauseButton';
import './_trackList.scss';

const TracksList = props => {

    const [starIcon, setStarIcon] = useState("/Assets/star_icon.svg");
    const [isFav, setIsFav] = useState(false);
    
    const toggleFav = () => {
        if(!isFav) {
            setIsFav(true);
            setStarIcon("/Assets/star_icon2.svg");
        } else{
            setIsFav(false);
            setStarIcon("/Assets/star_icon.svg");
            // localStorage.removeItem();
        }
    }

    // const saveFavs = () => {
    //     const currentFavorites = JSON.parse(localStorage.getItem('favs')) || []
    //     // const newFavorites = [...currentFavorites, {'favTrackID': album.tracks.items.id, 'favTrack': props.name, 'favAlbum': album.name, 'favArtist': album.artists[0].name, isFav: true, starIcon: starIcon}]
    //     if(!newFavorites.find(currentFavorites => currentFavorites.favTrack === props.name && currentFavorites.favAlbum === album.name)){
    //         const newFavorites = localStorage.setItem('favs', JSON.stringify(newFavorites));
    //     }
    //     localStorage.setItem('favs', JSON.stringify(newFavorites));
    //     setFavorite(newFavorites);
    //     localStorage.getItem('favs');
    //     console.log(newFavorites);
    // }

    // useEffect(() => {
    //     localStorage.setItem('favs', JSON.stringify(favorite));
    // }, favorite);

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