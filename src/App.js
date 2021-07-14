import React, { useState } from 'react';
import useToggle from './hooks/useToggle';
import './App.css';

import Header from './components/Header';
import Main from './pages/Main';
import Posts from './pages/Posts';
import LoginModal from './components/LoginModal';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { fetchPosts } from './API/index';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginModal, toggleLoginModal] = useToggle(false);
  // fetchPosts();

  return (
    <Router>
      <div className='App'>
        <Header
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          toggleLoginModal={toggleLoginModal}
        />
        {loginModal && (
          <LoginModal
            toggleLoginModal={toggleLoginModal}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/posts'>
            <Posts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
