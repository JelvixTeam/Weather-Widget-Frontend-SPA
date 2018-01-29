import Immutable, { List } from 'immutable';
import { createReducer } from 'redux-create-reducer';
import { loadState } from '../store/localStorage';
import { checkData } from "../utils/checkData";

export const initialState = Immutable.fromJS({
  data: [],
  errorMessage: ''
});

const FETCH_DATA = (state) => {
  return state
    .set('errorMessage', '')
    ;
};

const FETCH_DATA_SUCCESS = (state, action) => {
  const newValue = state.get('data').toJS();

  if(checkData(action.value.id, newValue)) return state
  else newValue.push(action.value);
  return state
    .set('data', List(newValue));
    ;
};

const FETCH_DATA_FAILURE = (state, action) => {
  return state
    .set('errorMessage', action.value.error)
    ;
};

const DELETE_DATA = (state, action) => {
  let newValue = state.get('data').toJS();

  newValue = newValue.filter((item)=>{return item.id !== action.payload.id});

  return state
    .set('data', List(newValue));
  ;
};

const mainReducer = createReducer(loadState(), {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  DELETE_DATA
});

export default mainReducer;