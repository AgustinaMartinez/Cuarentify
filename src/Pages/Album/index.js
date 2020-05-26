import React, {useEffect} from 'react';
import Layout2 from '../../Components/layout2';
import Layout3 from '../../Components/layout3';
import Header3 from '../../Components/header-artist';
import TracksContainer from '../../Components/tracksContainer';
import TracksList from '../../Components/tracksList';
import Footer from '../../Components/footer';
import {albumEndpoint, header} from '../../Config/config';
import useArtist from '../../Context/artists';
import useTracks from '../../Context/tracks';
import useAlbum from '../../Context/album';
import {useParams} from 'react-router-dom';
import './_albums.scss';

const AlbumPage = props => {

    const {artists} = useArtist();
    const {album, setAlbum} = useAlbum();
    const {tracks, setTracks} = useTracks();
    const {id} = useParams();

    let widthScreen = window.innerWidth;

    useEffect(() => {
        const getDisco = async () => {
            const res = await fetch(`${albumEndpoint.url}/${id}`, {headers: header});
            const data = await res.json();
            setAlbum(data);
            console.log(data)
            const info = data.tracks.items;
            setTracks(info);
        }
        getDisco();
    },[]);

    const tracksByCD = tracks.reduce((accumulator, tracks) => {
        const {disc_number} = tracks;
        const previousTracks = accumulator[disc_number] || [];
        return {...accumulator, [disc_number]: [...previousTracks, tracks]}
    }, {});

    const containerList = Object.keys(tracksByCD).map(cd => {
        return (
            <TracksContainer number={cd} key={cd}>
            {tracksByCD[cd].map(item => 
                <TracksList 
                    key={item.id}
                    name={item.name.length > 30 ? item.name.substring(0, 30) + "..." : item.name}
                    comment={'Track n° ' + item.track_number}
                    image={props.icon}
                    url={item.preview_url}
                />
            )}
            </TracksContainer>
        );
    });

    return (
        <React.Fragment>
            {widthScreen < 1000 ? <Layout2/> : <Layout3/>}
            <Header3
                src={album.images ? album.images[1].url : "/Assets/cd.png"}
                name={album.name}
                comment={`Released in ${album.release_date}`}
                link={`/artist/${artists.id}`}
                link2="/artists"
                link3={`/artist/${artists.id}`}
                linkArtistName={artists.name}
            />
            {containerList}
            <Footer/>
        </React.Fragment>
    );
}

export default AlbumPage;