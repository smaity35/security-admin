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
        <Route path="/login"  ><LoginPageComponent /></Route>
        <Route path="/home"  ><HomePageComponent /></Route>

        <Route path="*"  ><LoginPageComponent /></Route>
      </HashRouter>
    </>
  );
}

export default App;