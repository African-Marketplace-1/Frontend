import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// context
import { UserContext } from '../contexts/UserContext.js';

const Navigation = (props) => {
  const [isSignedIn, setIsSignedIn] = useState({
    isSignedIn: ''
  })

  useEffect(() => {
    const status = localStorage.getItem('isSignedIn')
    if (status) {
      setIsSignedIn({
        isSignedIn: status
      })
    }
  })



  let history = useHistory()

  const signOut = (event) => {
    event.preventDefault()
    // setIsSignedIn({isSignedIn: false})
    localStorage.clear()
    history.push('/')
  }



  return (
    <div>
      <div className="nav">
        <h1>African Marketplace</h1>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <a herf="">About</a>
        </div>

        { isSignedIn.isSignedIn === 'true' ?
        <div>
        <div>
          <Link to='/SignIn'>Sign In</Link>
        </div>
        <div>
          <Link to='/SignUp'>Sign Up</Link>
        </div>
        </div> :  
        <div>  
        <Link onClick={signOut} to='/'> Sign Out </Link>
        </div>
        }

      </div>
    </div>
  );
};

export default Navigation;