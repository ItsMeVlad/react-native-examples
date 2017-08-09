import * as types from '../Actions/types';
import createReducer from '../Lib/createReducer';

export const dummyReducer = createReducer ([], {
  [types.DUMMY_ACTION](state, action){
    return state;
  }
});
