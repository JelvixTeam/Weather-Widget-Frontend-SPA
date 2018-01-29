import { takeEvery } from 'redux-saga/effects';
import * as Constants from '../actions/actionTypes';
import {
  fetchInitialData
} from './initialSaga';

function* mainSaga() {
  yield takeEvery(Constants.FETCH_DATA, fetchInitialData);
}

export default mainSaga;
