import React from 'react';
import { Link, useHistory } from 'react-router-dom';



import './styles/nav.css';

const Navigation = (props) => {

  let history = useHistory()

  const signOut = (event) => {
    event.preventDefault()
    localStorage.clear()
    history.push('/')
  }

  return (
    <div>
      <div className="nav">
        <h1>Sauti Africa</h1>
        <div className="navLinks">
            <div>
                <Link to='/Dashboard'>Home</Link>
            </div>
            <div>
                <a target="_blank" rel="noopener noreferrer" href="https://sautimarketplace202.netlify.com/ourteam.html">About</a>
            </div>
        </div>

        { !localStorage.getItem('isSignedIn')  ?
        <div className="navLinks">
        <div>
          <Link to='/SignIn'>Sign In</Link>
        </div>
        <div>
          <Link to='/SignUp'>Sign Up</Link>
        </div>
        </div> :  
        <div className="navLinks"> 
          <div> 
              <Link to='/UserListings'>My Listings</Link>
          </div>
          <div>
              <Link onClick={signOut} to='/'> Sign Out </Link>
          </div>
        </div>
        }

      </div>
    </div>
  );
};

export default Navigation;