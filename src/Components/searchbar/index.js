import React, {useState} from 'react';
import {artistEndpoint, header} from '../../Config/config';
import './_searchBar.scss';

const SearchBar = props => {

    let barClasses = 'navbar2';
    if(props.search){
        barClasses = 'navbar2 open';
    }

    const [value, setValue] = useState('');

    const changeValue = e => {
        setValue(e.target.value);
    }

    const getFetchData = async () => {

        try{
            const res = await fetch(`${artistEndpoint.url}?q=${value}&type=${artistEndpoint.type}`, {headers: header});
            const data = await res.json();

            if(data.status == 401){
                alert("Intentá nuevamente.");
                return;
            }

            if(data.artists.items.length < 1){
                alert("No se encontró al artista, por favor escribí bien.");
                return;
            }

            console.log(data)

        } catch(error){
            console.log(error)
            alert("Hubo un error para buscar el artista, intentá nuevamente.");
        }
    }

    return (
        <div className={barClasses}>
            <button className="navbar2__button" onClick={getFetchData}>
                <img src="/Assets/search_icon.svg" className="navbar2__button__icon" alt="buscar"/>
            </button>
            <input 
                className="navbar2__input"
                name="artist"
                type="text"
                value={value}
                placeholder="Type the name of your favorite artist"
                onChange={changeValue}
            />
        </div>
    )
}

export default SearchBar;