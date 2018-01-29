import React, { Component } from 'react';
import '../css/all.css';
import mainContainer from '../containers/mainContainer';
import Card from './Card';
import PropTypes from 'prop-types';

class Main extends Component {
  render() {
    const {
      arr,
      getWeather,
      close,
      error,
      history
    } = this.props;

    return (
      <div>
        <header class="header">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
              <i class="fa fa-cloud" aria-hidden="true"></i>
            </a>
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            </div>
          </nav>
        </header>
        <main class="main pt-5 pb-5">
          <div class="container">
            <div class="row justify-content-md-center pb-5">
              <div class="col-lg-6 col-md-8">
                <div class="input-group">
                  <input
                    ref={(input)=>{this.city=input}}
                    type="text"
                    class="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"/>
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary">
                      <i
                        onClick={()=>getWeather(this.city.value)}
                        class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
                {error ? <p>{error}</p> : null}
              </div>
            </div>
            <div class="row">
              {arr.length ?
                arr.map((item)=>(
                  <Card
                    key={item.id}
                    close={close}
                    value={item}
                    history={history}
                  />
                )) : null}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  arr: PropTypes.array,
  getWeather: PropTypes.func,
  close: PropTypes.func,
  error: PropTypes.string
};

export default mainContainer(Main);
