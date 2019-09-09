/* eslint-disable react/jsx-one-expression-per-line */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <Link className="logo btn" to="/">
      My Space
    </Link>

    <ul className="nav__group">
      <li className="nav__li btn">
        <Link className="nav__link" to="/blog">
          Blog
        </Link>
      </li>
      <li className="nav__li btn">
        <Link className="nav__link" to="/about">
          About
        </Link>
      </li>
    </ul>
  </nav>
);

class Item extends Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    const { dataItem, onClick } = this.props;
    onClick(dataItem.id);
  }

  render() {
    const { dataItem } = this.props;
    return (
      <div
        role="button"
        key={dataItem.id}
        className="list link"
        onClick={this.onClick}
      >
        <h2 className="list__title">
          {dataItem.title}
        </h2>
      </div>
    );
  }
}

export {
  Navbar,
  Item,
};
