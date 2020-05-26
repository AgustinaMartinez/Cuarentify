import React, {useState} from 'react';
import {artistsListEndpoint, header} from '../../Config/config';
import {Redirect} from "react-router-dom";
import useArtist from '../../Context/artists';
import useInput from '../../Context/input';
import './_input.scss';

const Input = props => {

    const [redirect, setRedirect] = useState(false);
    const [value, setValue] = useState('');
    const {setInput} = useInput('');
    const {setArtists} = useArtist();

    const changeValue = e => {
        setValue(e.target.value);
        setInput(e.target.value);
    }

    const getFetchData = async () => {

        try{
            const res = await fetch(`${artistsListEndpoint.url}?q=${value}&type=${artistsListEndpoint.type}`, {headers: header});
            const data = await res.json();

            let info = data.artists.items;

            if(data.error === 401){
                alert("Token expirado. Intentá nuevamente con otro token.");
                return;
            }

            if(data.artists.items.length < 1){
                alert("No se encontró al artista, por favor escribí bien.");
                return;
            }

            setArtists(info);
            setRedirect(true);

        } catch(error){
            console.log(error);
            alert("Hubo un error para buscar el artista, intentá nuevamente.");
        }
    }

    return (
        <div className='input'>
            <button className="input__button" onClick={getFetchData}>
                <img src="/Assets/search_icon.svg" className="input__button__icon" alt="search"/>
            </button>
            <input
                className="input__input"
                name={props.name}
                type={props.type}
                value={value}
                placeholder={props.placeholder}
                onChange={changeValue}
            />
            {redirect && <Redirect to="/artists"/>}
        </div>
    );
};

export default Input;