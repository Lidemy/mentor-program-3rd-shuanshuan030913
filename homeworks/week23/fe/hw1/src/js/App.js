import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeWithRouter as Home, About, BlogWithRouter as Blog, NoMatch } from './component/pages';
import Edit from './component/edit';
import Post from './component/post';
import ActiveLinkContainer from './container/activeLinkContainer';

import '../scss/normalize.css';
import '../scss/style.scss';

const App = () => (
  <Router basename="/React-blog">
    <header className="header">
      <nav className="nav wrap">
        <div className="logo">
          <ActiveLinkContainer activeExact={true} to="/" label="My Space" />
        </div>
        <div className="nav__group">
          <ActiveLinkContainer to="/about" label="About" />
          <ActiveLinkContainer to="/blog" label="Blog" />
          <ActiveLinkContainer to="/edit" label="New Post" />
        </div>
      </nav>
    </header>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/blog/:blogId" component={Post} />
      <Route exact path="/edit" component={Edit} />
      <Route exact path="/edit/:Id" component={Edit} />
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
