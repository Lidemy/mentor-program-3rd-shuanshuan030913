/* eslint-disable react/jsx-one-expression-per-line */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { First, Page } from './components';
import '../css/normalize.css';
import '../css/style.css';

const About = () => (
  <div className="about">
    <main>
      <h1 className="main__title">About Me</h1>
      <section>
        <article>
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
  </div>
);

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = async () => {
    const dataAPI = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json());

    this.setState({
      data: dataAPI,
    });
  }

  render() {
    const { data } = this.state;
    const { match } = this.props;
    return (
      <div className="blog">
        <main>
          <h1 className="main__title">Blog Posts</h1>
          <Switch>
            {data.map(e => (
              <Route
                key={e.id}
                path={`${match.path}/${e.id}`}
                render={() => <Page dataItem={e} />}
              />
            ))}
            <Route
              path={`${match.path}`}
              data={data}
              render={() => <First data={data} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}
const Home = () => (
  <div>
    <main>
      <h1 className="main__title">Home</h1>
    </main>
  </div>
);

export {
  Home,
  About,
  Blog,
};
