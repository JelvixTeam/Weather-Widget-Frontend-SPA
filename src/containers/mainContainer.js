import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchData,
  deleteData
} from '../actions/main';

export default function mainContainer(ChildComponent) {
  class Wrapper extends Component {

    static contextTypes = {
      router: PropTypes.object
    };

    static defaultProps = {
      arr: []
    };

    constructor(props) {
      super(props);

      this.state = {
        loader: false
      };
    }

    componentDidMount () {
      this.props.fetchData('London');
      this.props.fetchData('New York');
    }

    componentWillReceiveProps(nextProps) {

    }

    getWeather = (city) => {
      city ? this.props.fetchData(city) : null;
    };

    close = (id) => {
      this.props.deleteData(id)
    };

    render() {
      return (
        <ChildComponent
          {...this.props}
          {...this.state}
          getWeather={this.getWeather}
          close={this.close}
        />
      );
    }
  }

  Wrapper.propTypes = {
    arr: PropTypes.array,
    fetchData: PropTypes.func,
    deleteData: PropTypes.func
  };

  const mapStateProps = (state) => {
    return {
      arr: state.getIn(['mainReducer', 'data']).toJS(),
      error: state.getIn(['mainReducer', 'errorMessage'])
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: bindActionCreators(fetchData, dispatch),
      deleteData: bindActionCreators(deleteData, dispatch)
    };
  };

  return connect(mapStateProps, mapDispatchToProps)(Wrapper);
}
