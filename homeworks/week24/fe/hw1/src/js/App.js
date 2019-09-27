import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './container/homeContainer';
import Blog from './container/blogContainer';
import ActiveLink from './container/activeLinkContainer';
import Edit from './container/editContainer';
import Post from './container/postContainer';

import About from './component/about';
import NoMatch from './component/noMatch';

import '../scss/normalize.css';
import '../scss/style.scss';

const App = () => (
  <Router basename="/React-blog">
    <header className="header">
      <nav className="nav wrap">
        <div className="logo">
          <ActiveLink activeExact={true} to="/" label="My Space" />
        </div>
        <div className="nav__group">
          <ActiveLink to="/about" label="About" />
          <ActiveLink to="/blog" label="Blog" />
          <ActiveLink to="/edit" label="New Post" />
        </div>
      </nav>
    </header>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/blog/:id" component={Post} />
      <Route exact path="/edit" render={props => <Edit {...props} key="new" />} />
      <Route exact path="/edit/:id" render={props => <Edit {...props} key="update" />} />
      <Route component={NoMatch} />
    </Switch>
    <footer className="footer">
      <div className="wrap">
        <small>© 2019 • Terms of Service • Privacy Policy • All Legal Stuff</small>
      </div>
    </footer>
  </Router>
);

export default App;
