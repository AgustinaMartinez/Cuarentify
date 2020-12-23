import React, {useState, createContext} from 'react';

const AppContext = createContext();

export const AppProvider = props => {

    const [storage, setStorage] = useState(
        {
            artists: [],
            albums: [],
            album: [],
            tracks: [],
            songs: [],
            input: [],
            favorites: JSON.parse(localStorage.getItem("favs") || "[]"),
            token: "",
            isLogged: false
        }
    );

    return (
        <AppContext.Provider value={[storage, setStorage]}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContext;