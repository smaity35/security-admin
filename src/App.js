import React from 'react';

import './master.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
import LoginPageComponent from './PagesComponent/LoginPageComponent';
import HomePageComponent from './PagesComponent/HomePageComponent';
import SocietyPageComponent from './PagesComponent/SocietyPageComponent';

$(window).on("load resize", function (event) {
  var windowWidth = $(window).width();
  if (windowWidth < 1010) {
    $('body').addClass('small-device');
  } else {
    $('body').removeClass('small-device');
  }

});



function App() {
  return (
    <>
      <Router >
        <Switch>
          <Route path="/" exact ><LoginPageComponent /></Route>
          <Route path="/login" exact ><LoginPageComponent /></Route>
          <Route path="/home" exact ><HomePageComponent /></Route>
          <Route path="/society" exact ><SocietyPageComponent /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;