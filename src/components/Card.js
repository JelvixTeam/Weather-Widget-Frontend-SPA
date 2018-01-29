import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/all.css';

export default class Card extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    const {
      value,
      close,
      history
    } = this.props;

    return (
      <div className="col-lg-4 col-md-6">
        <a href="#?" className="card bg-light mb-3">
          <div onClick={()=>{history.push(`/${value.id}`)}} className="card-body">
            <button
              onClick={()=>close(value.id)}
              type="button"
              className="close"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="card-title font-weight-bold">{value.name}</h4>
            <h5 className="card-subtitle mb-2 text-muted">{value.sys.country}</h5>
            <p className="card-text">{(value.main.temp - 273.15).toFixed(1)}°C</p>
          </div>
        </a>
      </div>
    );
  }
}

Card.propTypes = {
  close: PropTypes.func,
  value: PropTypes.object
};
