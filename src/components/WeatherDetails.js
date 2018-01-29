import React, { Component } from 'react';
import '../css/all.css';
import mainContainer from '../containers/mainContainer';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class WeatherDetails extends Component {
  render() {
    const {
      arr,
      match
    } = this.props;
    const weatherOfcity = arr.filter((item)=>{return item.id === Number(match.params.id)})[0];

    return (
      <div>
        <header class="header">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
              <i class="fa fa-cloud" aria-hidden="true"></i>
            </a>
            <div class="navbar-nav">
              <Link
                to="/"
                class="nav-item nav-link active">Home <span class="sr-only">(current)</span></Link>
            </div>
          </nav>
        </header>
        <main class="main pt-5 pb-5">
          <div class="container">
            <div class="jumbotron">
              <div class="row">
                <div class="col-lg-5">
                  <div class="card mb-3">
                    <div class="card-body">
                      <div class="d-flex justify-content-between pb-4">
                        <div class="card-icon-wrapper">
                          <img
                            src="../assets/images/icons/01d.svg"
                            alt=""
                          />
                        </div>
                        <div class="card-content text-right">
                          <span class="display-3">{`${(weatherOfcity.main.temp - 273.15).toFixed(1)}+°C`}</span>
                          <p>{(weatherOfcity.main.temp_min - 273.15).toFixed(1)
                          + '°C / ' + (weatherOfcity.main.temp_max - 273.15).toFixed(1) + '°C'}</p>
                        </div>
                      </div>
                      <h5 class="card-title">{weatherOfcity.weather.main}</h5>
                      <p class="card-text">{weatherOfcity.weather.description}</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7">
                  <h1 class="display-4">{weatherOfcity.name}</h1>
                  <p class="lead">{weatherOfcity.sys.country}</p>
                  <hr class="my-4" />
                    <h2 class="mb-3">Weather additional data:</h2>
                    <p>Sunrise: {weatherOfcity.sys.sunrise}</p>
                    <p>Sunset: {weatherOfcity.sys.sunset}</p>
                    <p>Pressure: {weatherOfcity.main.pressure}</p>
                    <p>Humidity: {weatherOfcity.main.humidity}</p>
                    <p>Speed of wind: {weatherOfcity.wind.speed}</p>
                    <p>Deg of wind: {weatherOfcity.wind.deg}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

WeatherDetails.propTypes = {
  arr: PropTypes.array
};

export default mainContainer(WeatherDetails);
