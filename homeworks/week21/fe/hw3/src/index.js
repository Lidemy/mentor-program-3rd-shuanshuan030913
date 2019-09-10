import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
import '../css/normalize.css';
import '../css/style.css';


ReactDom.render(
  <BrowserRouter basename="/React-blog">
    <Switch>
      <App />
    </Switch>
  </BrowserRouter>, document.getElementById('root'),
);
