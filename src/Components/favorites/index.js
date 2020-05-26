import React from 'react';
import List from '../list';
import './_favorites.scss';

const Favorites = () => {

    return (
        <section className="favorites">
            <h3 className="favorites__title">Favorite Songs</h3>
            <div className="favorites__list">
                <List
                    key=""
                    name="track name"
                    comment="artist name"
                    comment2="album name"
                    src="/Assets/cd.png"
                    link="/"
                />
            </div>
        </section>
    );
}

export default Favorites;