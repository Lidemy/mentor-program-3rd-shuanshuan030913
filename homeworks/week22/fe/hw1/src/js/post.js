/* eslint-disable react/jsx-one-expression-per-line */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    const { blogId } = this.props.match.params;
    fetch(`https://qootest.com/posts/${blogId}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <main className="page wrap">
        <section>
          <article className="article">
            <h2 className="sub__title">
              {!data.title ? 'Loading' : data.title }
            </h2>
            <p className="context">
              {data.body}
            </p>
            <Link to="/blog"> - back - </Link>
          </article>
        </section>
      </main>
    );
  }
}

export { Post };
