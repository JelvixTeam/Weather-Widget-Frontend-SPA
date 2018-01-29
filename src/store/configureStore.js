import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { loadState } from './localStorage';

const persistedState = loadState();

export default function configureStore(sagaMiddleware, initialState = persistedState) {
  const enhancer = compose(
    applyMiddleware(thunk, sagaMiddleware)
  );

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );
  return store;
}
