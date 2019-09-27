import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

import '../scss/normalize.css';
import '../scss/style.scss';

// basename="/React-blog"

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
