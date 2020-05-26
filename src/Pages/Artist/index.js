import React, {useEffect} from 'react';
import Layout2 from '../../Components/layout2';
import Layout3 from '../../Components/layout3';
import Header3 from '../../Components/header-artist';
import List from '../../Components/list';
import Footer from '../../Components/footer';
import useArtist from '../../Context/artists';
import useAlbums from '../../Context/albums';
import {artistEndpoint, header} from '../../Config/config';
import {useParams} from 'react-router-dom';
import './_artist.scss';

const ArtistPage = () => {
    
    const {artists, setArtists} = useArtist();
    const {albums, setAlbums} = useAlbums();
    const {id} = useParams();

    let widthScreen = window.innerWidth;

    useEffect(() => {
        const getAlbums = async () => {
            const res = await fetch(`${artistEndpoint.url}/${id}/albums`, {headers: header});
            const data = await res.json();
            const info = data.items
            setAlbums(info);
            console.log(info);
        }

        const getArtist = async () => {
            const res = await fetch(`${artistEndpoint.url}/${id}`, {headers: header});
            const data = await res.json();
            setArtists(data);
            console.log("ARTISTA: ", data);
        }
        getArtist();
        getAlbums();
    }, [id]);

    const albumsList = albums.map(album => (
        <List 
            key={album.id}
            name={album.name}
            comment={album.total_tracks + ' tracks'}
            src={album.images.length > 0 ? album.images[1].url : "/Assets/cd.png"}
            link={`/album/${album.id}`}
        />
    ));

    return (
        <React.Fragment>
            {widthScreen < 1000 ? <Layout2/> : <Layout3/>}
            <Header3
                name={artists.name}
                comment={'Genre: ' + artists.genres}
                src={artists.images ? artists.images[1].url : "/Assets/cd.png"}
                linkArtistName={artists.name}
                link2="/artists"
                link3={`/artist/${artists.id}`}
            />
            <div className="albumsList">
                {albumsList}
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default ArtistPage;