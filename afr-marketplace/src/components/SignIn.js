import React, { useState, useContext } from 'react';
import './styles/SignIn.css';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
// context
import { UserContext } from '../contexts/UserContext.js';

import Navigation from './Navigation'


const SignIn = (props) => {

    const { credentials, setCredentials  } = useContext(UserContext);
    const [canSubmit, setCanSubmit] = useState(true);

    const signin = event => {
        event.preventDefault();
        if (credentials.username.length === 0 || credentials.password.length === 0) {
            setCanSubmit(false);
        } else {
            setCanSubmit(true);
            axiosWithAuth().post("https://african-marketplace-2020.herokuapp.com/api/auth/login", credentials)
            .then(response => {
                console.log(response.data)
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('isSignedIn', 'true' );
                localStorage.setItem('id', JSON.stringify(response.data.user_id));
                props.history.push('/Dashboard');
            })
        }
    }

    const handleChange = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
        console.log(credentials);
    }
        
    return (
        
        <div className='container'>
            <Navigation />
            <div className='container-form'>
            <h1 className='title'>Welcome back to Sauti Africa!</h1>
            <p className='error'>{canSubmit ? null : "You need a username and a password."}</p>
            <div className='sign-in-card'>   
                <form onSubmit={signin}>
                    <label className='form-label'>Username</label>
                    <input 
                        label="username"
                        type="text"
                        placeholder="Username" 
                        className="form-input"
                        name="username"
                        onChange={handleChange}
                    />
                    <div className='password'>
                        <div>
                            <label htmlFor='password' className='form-label'>Password</label>
                        </div> 
                        
                    </div>
                    <input
                        label="password"
                        placeholder="Password"
                        type='password' 
                        name="password"
                        className='form-input'
                        onChange={handleChange}
                    />
                    <button className='sign-in'>Sign in</button>
                </form>
                <p className='new-user'>New user? <a href='/SignUp'>Create an account.</a></p>
            </div>
            </div>
        </div>
    )
}

export default SignIn;