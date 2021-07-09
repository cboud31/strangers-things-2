import React from 'react';

import classes from './NavControls.module.css';
import NavLink from '../UI/NavLink';

const VisitorLinks = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/posts">Sign In/ Register</NavLink>
    </>
  );
};
const memberLinks = () => {};

const NavControls = ({ isLoggedIn }) => {
  return (
    <div className={classes['nav-controls']}>
      {!isLoggedIn ? <VisitorLinks /> : null}
    </div>
  );
};

export default NavControls;
