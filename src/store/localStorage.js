import Immutable from 'immutable';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return Immutable.fromJS({
        data: [],
        errorMessage: ''
      });
    }
    return Immutable.fromJS(JSON.parse(serializedState));
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  // configuring structure of data for persist in state
  const persistState = state.get('mainReducer');

  try {
    const serializedState = JSON.stringify(persistState.toJS());
    localStorage.setItem('state', serializedState);
  } catch (err) {
    return undefined;
  }
};