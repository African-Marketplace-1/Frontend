import React, { useState, useContext } from 'react';
import './styles/SignIn.css';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
// context
import { UserContext } from '../contexts/UserContext.js';


const SignIn = (props) => {
    

    const { credentials, setCredentials  } = useContext(UserContext)

    const signin = event => {
        event.preventDefault();
        axiosWithAuth().post("https://african-marketplace-2020.herokuapp.com/api/auth/login", credentials)
        .then(response => {
            console.log(response.data)
            localStorage.setItem('token', response.data.token);
            localStorage.setitem('isSignedIn', 'true' )
            props.history.push('/Dashboard');
        })
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
            <h1 className='title'>Welcome back to Sauti Africa!</h1>
            <div className='sign-in-card'>   
                <form onSubmit={signin}>
                    <label className='form-label'>Username</label>
                    <input 
                        label="username"
                        type="text"
                        placeholder="username" 
                        className="form-input"
                        name="username"
                        onChange={handleChange}
                    />
                    <div className='password'>
                        <div>
                            <label htmlFor='password' className='form-label'>Password</label>
                        </div> 
                        <div className='forgot-password'><a href='#'>Forgot password?</a></div>
                    </div>
                    <input
                        label="password"
                        placeholder="password"
                        type='password' 
                        name="password"
                        className='form-input'
                        onChange={handleChange}
                    />
                    <button className='sign-in'>Sign in</button>
                </form>
                <p className='new-user'>New user? <a href='#'>Create an account.</a></p>
            </div>
        </div>
    )
}

export default SignIn;