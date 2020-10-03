import React from 'react';
import './master.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, HashRouter
} from "react-router-dom";
import LoginPageComponent from './PagesComponent/LoginPageComponent';
import HomePageComponent from './PagesComponent/HomePageComponent';

function App() {
  return (
    <>
      <HashRouter basename='/'>
        <Route path="/" exact ><LoginPageComponent /></Route>
        <Route path="/login"  exact ><LoginPageComponent /></Route>
        <Route path="/home" exact ><HomePageComponent /></Route>

       </HashRouter>
    </>
  );
}

export default App;