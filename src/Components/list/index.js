import React from 'react';
import {Link} from 'react-router-dom';
import './_list.scss';

const List = props => {

    return (
        <Link to={props.link} className="list">
            <div className="list__artist">
                <img className="list__artist__img" src={props.src} alt="artist"/>
                <div className="list__artist__description">
                    <h6 className="list__artist__description--title">{props.name}</h6>
                    <p className="list__artist__description__comment">{props.comment}</p>
                    <p className="list__artist__description__comment2">{props.comment2}</p>
                </div>
            </div>
        </Link>
    );
}

export default List;