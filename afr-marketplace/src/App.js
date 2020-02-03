import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
// contexts
import { UserContext } from './contexts/UserContext.js';
// Private Route
import PrivateRoute from './utils/PrivateRoute.js';
// components
import Landings from './components/Landing.js';
import Navigation from './components/Navigation.js';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';

import './App.css';

function App(props) {

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const [user, setUser]

  return (
    <div className="App">
     <UserContext.Provider value={{ ...props, credentials, setCredentials, user, setUser }} > 
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/SignUp" component={SignUp} />
        <Route path ="/SignIn" component={SignIn} />
      </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
