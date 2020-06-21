
// libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { initalState } from '../initialstate.json';
import reducer from './reducers';
// container
import App from './routes/App';

initalState.user = {};
initalState.playing = {};

const store = createStore(reducer, initalState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

