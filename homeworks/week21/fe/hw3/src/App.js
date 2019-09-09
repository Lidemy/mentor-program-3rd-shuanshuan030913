/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Blog } from './pages';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
      </div>
    );
  }
}

export default App;
