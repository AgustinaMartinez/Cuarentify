import React from 'react';
import './_tracks-container.scss';

const TracksContainer = props => {
    
    return (
        <div className="tracksContainer">
            <div className="tracksContainer__each">
                <h3 className="tracksContainer__each__title">CD {props.number}</h3>
                {props.children}
            </div>
        </div>
    );
}

export default TracksContainer;