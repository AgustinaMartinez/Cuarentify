import React from 'react';
import useAudio from '../../Hooks/audio';
import './_play-pause-button.scss';

const PlayPauseButton = ({url}) => {

    const [playing, toggleButton] = useAudio(url);

    return (
        <button className="ppButton" onClick={toggleButton}>
            <img className="ppButton__ppIcon" src={playing ? "/Assets/pause_icon.svg" : "/Assets/play_icon.svg"} alt="artist"/>
        </button>
    );
}

export default PlayPauseButton;