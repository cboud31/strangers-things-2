import React from 'react';

import classes from './LoginModal.module.css';

import Button from '../UI/Button';

const LoginModal = ({ toggleLoginModal }) => {
  const onSubmitLogin = (event) => {
    event.preventDefault();
    console.log('onSubmitLogin');
  };

  return (
    <>
      <div className={classes.backdrop}></div>
      <div>
        <form className={classes['login-modal']} onSubmit={onSubmitLogin}>
          <header>Register / Login</header>
          <div className={classes['login-inputs']}>
            <div>
              <label>Name</label>
              <input type='text' />
            </div>
            <div>
              <label>Password</label>
              <input type='text' />
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
