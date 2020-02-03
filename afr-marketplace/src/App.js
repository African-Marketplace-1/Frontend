import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './App.css';

function App() {

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/signUp" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
