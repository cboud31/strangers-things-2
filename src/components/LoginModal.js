import React, { useState } from 'react';

import classes from './LoginModal.module.css';

import Button from '../UI/Button';

import { registerUser, loginUser } from '../API';

const LoginModal = ({ toggleLoginModal, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState(false);
  // isNewUser

  const onSubmit = (event) => {
    event.preventDefault();

    // Remove this console.log before deployment
    // console.log(`username: ${username}, password: ${password}`);
    if (newUser) {
      registerUser(username, password);
    } else {
      loginUser(username, password);
    }

    toggleLoginModal();
    setIsLoggedIn(true);
  };

  return (
    <>
      <div className={classes.backdrop}></div>
      <div>
        <form className={classes['login-modal']} onSubmit={onSubmit}>
          <header>Register / Login</header>
          <div className={classes['login-inputs-container']}>
            <div className={classes['login-input']}>
              <label>Username:</label>
              <input
                type='text'
                size='35'
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={classes['login-input']}>
              <label>Password:</label>
              <input
                type='password'
                size='35'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={classes['login-input']}>
              <label>New User?</label>
              <input
                type='checkbox'
                // checked={newUser}
                checked={true}
                // value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
              />
            </div>
          </div>
          <footer className={classes['login-modal-actions']}>
            <Button className={classes['login-action']} type='submit'>
              Submit
            </Button>
            <Button
              className={classes['login-action']}
              onClick={toggleLoginModal}
            >
              Cancel
            </Button>
          </footer>
        </form>
      </div>
    </>
  );
};

export default LoginModal;
