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
const MemberLinks = () => {
  return (
    <>
      <NavLink to="/">Profile</NavLink>
      <NavLink to="/">Posts</NavLink>
      <NavLink to="/">Create Post</NavLink>
      <NavLink to="/">Logout</NavLink>
    </>
  );
};

const NavControls = ({ isLoggedIn }) => {
  return (
    <div className={classes['nav-controls']}>
      {!isLoggedIn ? <VisitorLinks /> : <MemberLinks />}
    </div>
  );
};

export default NavControls;
