import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
// context
import { UserContext } from '../contexts/UserContext.js';

import './styles/nav.css';

const Navigation = (props) => {
  const { isSignedIn, setIsSignedIn } = useContext(UserContext)

  let history = useHistory()

  const signOut = (event) => {
    event.preventDefault()
    setIsSignedIn({isSignedIn: false})
    localStorage.clear()
    history.push('/')
  }

  return (
    <div>
      <div className="nav">
        <h1>African Marketplace</h1>
        <div className="navLinks">
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <a herf="">About</a>
            </div>
        </div>

        { !isSignedIn ?
        <div className="navLinks">
            <div>
                <Link to='/SignIn'>Sign In</Link>
            </div>
            <div>
                <Link to='/SignUp'>Sign Up</Link>
            </div>
        </div> :  
        <div className="signOut">  
            <Link onClick={signOut} to='/'> Sign Out </Link>
        </div>
        }

      </div>
    </div>
  );
};

export default Navigation;