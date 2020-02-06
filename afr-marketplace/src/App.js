import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// contexts
import { UserContext } from './contexts/UserContext.js';
// Private Route
import PrivateRoute from './utils/PrivateRoute.js';
// components
import Landing from './components/Landing.js';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import Dashboard from './components/Dashboard.js';
import UserListings from './components/UserListings.js';
import Item from './components/Item.js';
import UpdateForm from './components/UpdateItem.js';
import ItemView from './components/ItemView.js';

import './App.css';

function App(props) {

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  // const { id } = useParams()

  return (
    <div className="App">
     <UserContext.Provider value={{ ...props, credentials, setCredentials }} > 
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/view/:id" component={ItemView} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignIn" component={SignIn} />
        {/* <Route path='/about' component={() => { 
          window.location.href = 'https://sautimarketplace202.netlify.com/ourteam.html'; 
          return null;
        }}/> */}
        <PrivateRoute path="/Dashboard" component={Dashboard} />
        <PrivateRoute path="/UserListings" component={UserListings} />
        <PrivateRoute path="/Item/:id" component={Item} />
        <PrivateRoute path="/listingEdit/:id" component={UpdateForm} />
      </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
