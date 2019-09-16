import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeWithRouter as Home, About, BlogWithRouter as Blog, NoMatch } from './pages';
import { Post } from './post';
import { ActiveLink } from './activeLink';
import '../scss/normalize.css';
import '../scss/style.scss';

// basename="/React-blog"

ReactDom.render(
  <Router basename="/React-blog">
    <header className="header">
      <nav className="nav wrap">
        <div className="logo">
          <ActiveLink activeExact={true} to="/" label="My Space" />
        </div>
        <div className="nav__group">
          <ActiveLink to="/about" label="About" />
          <ActiveLink to="/blog" label="Blog" />
        </div>
      </nav>
    </header>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/blog/:blogId" component={Post} />
      <Route component={NoMatch} />
    </Switch>
    <footer className="footer">
      <div className="wrap">
        <small>© 2019 • Terms of Service • Privacy Policy • All Legal Stuff</small>
      </div>
    </footer>
  </Router>, document.getElementById('root'),
);
