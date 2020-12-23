import React from 'react';
import LoginPage from './Pages/Login';
import HomePage from './Pages/Home';
import ArtistsPage from './Pages/ArtistsList';
import ArtistPage from './Pages/Artist';
import AlbumPage from './Pages/Album';
import {AppProvider} from './Context/app';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';

const App = () => {

  return (
    <AppProvider>
      <Router>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/artists" component={ArtistsPage}/>
        <Route path="/artist/:id" component={ArtistPage}/>
        <Route path="/album/:id" component={AlbumPage}/>
      </Router>
    </AppProvider>
  );
}

export default App;