import { combineReducers } from 'redux'

import * as dummyReducer from './dummyReducer.js'

export default combineReducers(Object.assign(
  dummyReducer
));
