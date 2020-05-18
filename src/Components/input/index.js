import React, {useState} from 'react';
import {artistEndpoint, header} from '../../Config/config';
import './_input.scss';

const Input = props => {

    const [value, setValue] = useState('');

    const changeValue = e => {
        setValue(e.target.value);
    }

    const getFetchData = async () => {

        try{
            const res = await fetch(`${artistEndpoint.url}?q=${value}&type=${artistEndpoint.type}`, {headers: header});
            const data = await res.json();

            if(data.status === 401){
                alert("Intentá nuevamente.");
                return;
            }

            if(data.artists.items.length < 1){
                alert("No se encontró al artista, por favor escribí bien.");
                return;
            }

            console.log(data);

        } catch(error){
            console.log(error)
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
        </div>
    )
};

export default Input;