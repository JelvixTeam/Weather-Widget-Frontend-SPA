import * as Constants from './actionTypes';

export function fetchData(value) {
  return (dispatch) => {
    dispatch({
      type: Constants.FETCH_DATA,
      payload: {
        city: value
      }
    });
  };
}

export function deleteData(id) {
  return (dispatch) => {
    dispatch({
      type: Constants.DELETE_DATA,
      payload: {
        id
      }
    });
  };
}