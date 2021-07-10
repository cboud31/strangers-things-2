import React from 'react';

import classes from './NavControls.module.css';
import NavLink from '../UI/NavLink';
import Button from '../UI/Button';

const VisitorLinks = ({ isLoggedIn, toggleLoginModal }) => {
  return (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/posts'>Posts</NavLink>
      <Button onClick={toggleLoginModal}>Sign In/ Register</Button>
    </>
  );
};
const MemberLinks = () => {
  return (
    <>
      <NavLink to='/'>Profile</NavLink>
      <NavLink to='/'>Posts</NavLink>
      <NavLink to='/'>Create Post</NavLink>
      <Button>Logout</Button>
    </>
  );
};

const NavControls = ({ isLoggedIn, toggleLoginModal }) => {
  return (
    <div className={classes['nav-controls']}>
      {!isLoggedIn ? (
        <VisitorLinks toggleLoginModal={toggleLoginModal} />
      ) : (
        <MemberLinks />
      )}
    </div>
  );
};

export default NavControls;
