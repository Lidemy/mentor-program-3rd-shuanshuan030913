/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Blog } from './pages';
import { Navbar } from './components';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <Navbar />
        </header>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
      </div>
    );
  }
}

export default App;
