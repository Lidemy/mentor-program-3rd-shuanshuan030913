/* eslint-disable react/jsx-one-expression-per-line */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar, Item } from './components';
import '../css/normalize.css';
import '../css/style.css';

const About = () => (
  <div className="about">
    <header>
      <Navbar />
    </header>
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

function First(props) {
  const { data, onClick } = props;
  return (
    <main>
      <h1 className="main__title">Blog Posts</h1>
      <section>
        {data.map(e => (
          <Item
            key={e.id}
            dataItem={e}
            onClick={onClick}
          />
        ))}
      </section>
    </main>
  );
}

function Page(props) {
  const { dataItem } = props;
  console.log('props', props);

  return (
    <main>
      <h1 className="main__title">Blog Posts</h1>
      <section className="page">
        <article className="list">
          <h2 className="">
            {dataItem.title}
          </h2>
          <p>
            {dataItem.body}
          </p>
        </article>
      </section>
    </main>
  );
}

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  handleClick = (i) => {
    console.log('i', i);
    window.location.href = `/blog/${i}`;
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
    return (
      <div className="page">
        <header>
          <Navbar />
        </header>
        <Switch>
          {data.map(e => (
            <Route
              key={e.id}
              path={`/blog/${e.id}`}
              render={() => <Page dataItem={e} />}
            />
          ))}
          <Route
            path="/blog"
            data={data}
            render={() => <First onClick={this.handleClick} data={data} />}
          />
        </Switch>
      </div>
    );
  }
}
const Home = () => (
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <h1 className="main__title">Home</h1>
    </main>
  </div>
);

export {
  Home,
  About,
  Blog,
  Page,
};
