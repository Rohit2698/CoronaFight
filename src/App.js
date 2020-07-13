import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import {Route,Switch} from 'react-router';
import HomePage from './Component/Home/HomePage';
import Check from './Component/Check/Check';
import Country from './Component/CountryData/Country';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/check" component={Check}/>
        <Route exact path="/country" component={Country} />
      </Switch>
    
    </>
  );
}

export default App;
