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
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              <i className="fa fa-cloud" aria-hidden="true"></i>
            </a>
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            </div>
          </nav>
        </header>
        <main className="main pt-5 pb-5">
          <div className="container">
            <div className="row justify-content-md-center pb-5">
              <div className="col-lg-6 col-md-8">
                <div className="input-group">
                  <input
                    ref={(input)=>{this.city=input}}
                    type="text"
                    className="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"/>
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary">
                      <i
                        onClick={()=>getWeather(this.city.value)}
                        className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
                {error ? <p className="error">{error}</p> : null}
              </div>
            </div>
            <div className="row">
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
