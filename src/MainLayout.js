import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LocalRouter from './router/LocalRouter';

export default class MainLayout extends Component {
  render() {
    return (
      <LocalRouter/>
    );
  }
}

MainLayout.propTypes = {
  location: PropTypes.object
};
