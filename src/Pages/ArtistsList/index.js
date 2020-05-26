import React from 'react';
import Layout1 from '../../Components/layout1';
import Layout2 from '../../Components/layout2';
import Header2 from '../../Components/header-artistsList';
import List from '../../Components/list';
import Footer from '../../Components/footer';
import useArtist from '../../Context/artists';
import './_artist-list.scss';

const ArtistsPage = () => {

    const {artists} = useArtist();
    let widthScreen = window.innerWidth;

    const list = artists.map(artist => (
        <List
            key={artist.id}
            name={artist.name}
            comment={artist.followers.total + ' followers'}
            src={artist.images.length > 0 ? artist.images[1].url : "/Assets/artist_icon.svg"}
            link={`/artist/${artist.id}`}
        />
    ));

    return (
        <div className="artistsList">
            {widthScreen < 700 ? <Layout2/> : <Layout1/>}
            <Header2/>
            <div className="artistsList__each">
                {list}
            </div>
            <Footer/>
        </div>
    );
}
export default ArtistsPage;