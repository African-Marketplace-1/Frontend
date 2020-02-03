import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
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
        <div>
          <Link to='/SignIn'>Sign In</Link>
        </div>
        <div>
          <Link to='/SignUp'>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;