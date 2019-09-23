/* eslint-disable react/no-multi-comp */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../scss/normalize.css';
import '../../scss/style.scss';

const NoMatch = () => (
  <main className="page wrap">
    <h2 className="sub__title">
      404 page
    </h2>
  </main>
);

const About = () => (
  <main className="about wrap">
    <h1 className="main__title">About Me</h1>
    <section>
      <article className="article">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In posuere aliquet ex vitae ullamcorper.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In posuere aliquet ex vitae ullamcorper.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In posuere aliquet ex vitae ullamcorper.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In posuere aliquet ex vitae ullamcorper.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In posuere aliquet ex vitae ullamcorper.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In posuere aliquet ex vitae ullamcorper.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In posuere aliquet ex vitae ullamcorper.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In posuere aliquet ex vitae ullamcorper.
        </p>
      </article>
    </section>
  </main>
);

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    fetch('https://qootest.com/posts')
      .then(response => response.json())
      .then(json => this.setState({
        data: json,
      }));
  }

  render() {
    const { data } = this.state;
    const { history } = this.props;
    return (
      <main className="blog wrap">
        <h1 className="main__title">Blog Posts</h1>
        <section>
          <article>
            {data.map(e => (
              <a
                key={e.id}
                className="list link"
                role="link"
                onClick={() => {
                  history.push(`/blog/${e.id}`);
                }}
              >
                <div className="list__title">
                  {e.title}
                </div>
                <p className="list__body">{e.body}</p>
              </a>
            ))}
          </article>
        </section>
      </main>
    );
  }
}

const BlogWithRouter = withRouter(Blog);

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newData: [],
    };
  }

  componentDidMount = () => {
    fetch('https://qootest.com/posts?_limit=15&_sort=id&_order=desc')
      .then(response => response.json())
      .then(json => this.setState({
        newData: json,
      }));
  }

  render() {
    const { newData } = this.state;
    const { history } = this.props;
    return (
      <main className="home wrap">
        <h1 className="main__title">Home is where the heart is.</h1>
        <section>
          <h2 className="sub__title">New Posts</h2>
          <article>
            {newData.map(e => (
              <a
                key={e.id}
                className="list link"
                role="link"
                onClick={() => {
                  history.push(`/blog/${e.id}`);
                }}
              >
                <div className="list__title">
                  {e.title}
                </div>
                <p className="list__body">{e.body}</p>
              </a>
            ))}
          </article>
        </section>
      </main>
    );
  }
}

const HomeWithRouter = withRouter(Home);

export {
  HomeWithRouter,
  About,
  BlogWithRouter,
  NoMatch,
};
