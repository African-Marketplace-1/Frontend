import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
// contexts
import { UserContext } from './contexts/UserContext.js';
// Private Route
import PrivateRoute from './utils/PrivateRoute.js';

import './App.css';

function App() {

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const [user, setUser]

  return (
    <div className="App">
     <UserContext.Provider value={{ credentials, setCredentials, user, setUser }} > 
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
