import React from 'react';
import  Home from './Pages/Home';
import Artists from './Pages/Artists';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import authenticate from './Authentication/authenticate';
import './App.scss';

const App = () => {

  //authenticate();
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/artists" component={Artists}/>
    </Router>
  );
}

export default App;