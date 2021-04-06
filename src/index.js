//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './config/reactotron.config';

import App from './components/App/App.jsx';
import store from './redux/store';
import './index.css';

//-------------------------------------------------------------------------------
// React Bootstrap
//-------------------------------------------------------------------------------
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

