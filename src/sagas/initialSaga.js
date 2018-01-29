import { call, put } from 'redux-saga/effects';
import * as Constants from '../actions/actionTypes';
import axios from 'axios';

/* global API_URL */

export function getData(payload) {
  return axios(payload.url, payload)
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      } else {
        return {};
      }
    }).catch(error => {
      return { error: error.response.data.message };
    });
}

export function* fetchInitialData(action) {
  try {
    let value = yield call(
      getData,
      {
        method: 'GET',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${action.payload.city}&APPID=c6743a4f84f85795c1774a832079e4ec`
      });
    if (!value.error) {
      yield put({ type: Constants.FETCH_DATA_SUCCESS, value });
    } else {
      yield put({ type: Constants.FETCH_DATA_FAILURE, value });
    }
  } catch (error) {
    yield put({ type: Constants.FETCH_DATA_FAILURE });
  }
}