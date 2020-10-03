import React from 'react';
import './master.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPageComponent from './PagesComponent/LoginPageComponent';
import HomePageComponent from './PagesComponent/HomePageComponent';

function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route path="/login"  ><LoginPageComponent /></Route>
          <Route path="/home"  ><HomePageComponent /></Route>
          <Route path="/"  ><LoginPageComponent /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
