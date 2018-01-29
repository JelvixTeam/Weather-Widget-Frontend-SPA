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
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              <i className="fa fa-cloud" aria-hidden="true"></i>
            </a>
            <div className="navbar-nav">
              <Link
                to="/"
                className="nav-item nav-link active">Home <span className="sr-only">(current)</span></Link>
            </div>
          </nav>
        </header>
        <main className="main pt-5 pb-5">
          <div className="container">
            <div className="jumbotron">
              <div className="row">
                <div className="col-lg-5">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex justify-content-between pb-4">
                        <div className="card-icon-wrapper">
                          <img
                            src="../assets/images/icons/01d.svg"
                            alt=""
                          />
                        </div>
                        <div className="card-content text-right">
                          <span className="display-3">{`${(weatherOfcity.main.temp - 273.15).toFixed(1)}+°C`}</span>
                          <p>{(weatherOfcity.main.temp_min - 273.15).toFixed(1)
                          + '°C / ' + (weatherOfcity.main.temp_max - 273.15).toFixed(1) + '°C'}</p>
                        </div>
                      </div>
                      <h5 className="card-title">{weatherOfcity.weather.main}</h5>
                      <p className="card-text">{weatherOfcity.weather.description}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <h1 className="display-4">{weatherOfcity.name}</h1>
                  <p className="lead">{weatherOfcity.sys.country}</p>
                  <hr className="my-4" />
                    <h2 className="mb-3">Weather additional data:</h2>
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
