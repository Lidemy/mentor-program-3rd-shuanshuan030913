
import React from 'react';
import { Route, Link } from 'react-router-dom';

function ActiveLink({ label, to, activeExact }) {
  return (
    <Route
      path={to}
      exact={activeExact}
      children={({ match }) => (
        <div className={match ? 'active nav__link' : 'nav__link'}>
          <Link to={to}>
            {label}
          </Link>
        </div>
      )}
    />
  );
}


export { ActiveLink };
