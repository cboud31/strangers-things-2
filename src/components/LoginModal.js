import React, { useState } from 'react';

import classes from './LoginModal.module.css';

import Button from '../UI/Button';

import { registerUser, loginUser } from '../API';

const LoginModal = ({ toggleLoginModal, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const onRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await registerUser(username, password);
      if (!result.success) {
        setErrorMessage(result.error.message);
        setUsername('');
        setPassword('');
        return;
      }
      toggleLoginModal();
      setIsLoggedIn(true);
      localStorage.setItem('JWT', result.data.token);
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser(username, password);
      if (!result.success) {
        setErrorMessage(result.error.message);
        setUsername('');
        setPassword('');
        return;
      }
      toggleLoginModal();
      setIsLoggedIn(true);
      localStorage.setItem('JWT', result.data.token);
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={classes.backdrop}></div>
      <div>
        <form
          className={classes['login-modal']}
          onSubmit={newUser ? onRegister : onLogin}
        >
          <header>Register / Login</header>
          <div className={classes['submission-feedback']}>
            {errorMessage && <span>{errorMessage}</span>}
          </div>
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
                value={newUser}
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
