import React from 'react';

import classes from './Header.module.css';

import NavControls from './NavControls';

const Header = (props) => {
  const { isLoggedIn } = props;
  return (
    <header className={classes['nav-bar']}>
      {/* nav-bar */}
      <h2 className={classes.title}>Strangers' Things 2</h2>
      <NavControls isLoggedIn={isLoggedIn} />

      {/* search-filter */}
    </header>
  );
};

export default Header;

// Title should be a link to the home-page.
// Links (!isLoggedIn): Posts, Register/Login
// Links (isLoggedIn): Posts, Create Posts/ Create Posts(?), Messages, Logout
