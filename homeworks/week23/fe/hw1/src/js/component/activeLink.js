import React from 'react';
import { Route, Link } from 'react-router-dom';

function ActiveLink(props) {
  const { to, activeExact, label, navText } = props;
  return (
    <Route
      path={to}
      exact={activeExact}
      children={() => (
        <div
          role="link"
          onClick={() => {
            props.updateNav(to);
          }}
          className={navText === to ? 'active nav__link' : 'nav__link'}
        >
          <Link to={to}>
            {label}
          </Link>
        </div>
      )}
    />
  );
}

export default ActiveLink;
