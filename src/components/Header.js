import React from 'react';

import classes from './Header.module.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes['nav-bar']}>
      {/* nav-bar */}
      <h2 className={classes.title}>Strangers' Things 2</h2>
      <div className={classes['nav-controls']}>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </div>
      {/* search-filter */}
    </header>
  );
};

export default Header;

// Title should be a link to the home-page.
// Links (!isLoggedIn): Posts, Register/Login
// Links (isLoggedIn): Posts, Create Posts/ Create Posts(?), Messages, Logout
