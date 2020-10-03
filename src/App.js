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
           <Route path="/" exact><LoginPageComponent /></Route>
          <Route path="/login" exact><LoginPageComponent /></Route>
          <Route path="/home" exact><HomePageComponent /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
