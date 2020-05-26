import React from 'react';
import {Link} from 'react-router-dom';
import './_list.scss';

const List = props => {

    return (
        <div className="list">
            <div className="list__artist">
                <img className="list__artist__img" src={props.src} alt="artist"/>
                <div className="list__artist__description">
                    <Link to={props.link} className="list__artist__description__link"><h6 className="list__artist__description__link--title">{props.name}</h6></Link>
                    <p className="list__artist__description__comment">{props.comment}</p>
                    <p className="list__artist__description__comment2">{props.comment2}</p>
                </div>
            </div>
        </div>
    );
}

export default List;