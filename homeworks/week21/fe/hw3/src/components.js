/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
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


function First(props) {
  const { data } = props;
  return (
    <section>
      {data.map(e => (
        <Link key={e.id} className="list link" to={`/blog/${e.id}`}>
          <div className="list__title">
            {e.title}
          </div>
        </Link>
      ))}
    </section>
  );
}

function Page(props) {
  const { dataItem } = props;

  return (
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
  );
}

export { Navbar, First, Page };
