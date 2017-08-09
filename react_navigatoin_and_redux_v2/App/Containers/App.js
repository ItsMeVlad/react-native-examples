import React from 'react';
import reducer from '../Reducers'
import { createStore} from 'redux';
import { Root } from '../Config/router';
import { Provider, connect } from 'react-redux';

const store = createStore(reducer, {});

export default () => (
  <Provider store={store}>
    <Root />
  </Provider>
);
