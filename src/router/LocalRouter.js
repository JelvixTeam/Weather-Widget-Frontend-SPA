import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Main from '../components/Main';
import WeatherDetails from '../components/WeatherDetails';
import NotFound from '../components/NotFound';

export default function LocalRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/:id" component={WeatherDetails}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}
