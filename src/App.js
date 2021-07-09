import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Main from './pages/Main';
import Posts from './pages/Posts';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { fetchPosts } from './API/index';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // fetchPosts();

  return (
    <Router>
      <div className='App'>
        <Header isLoggedIn={isLoggedIn} />
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
