import React, { useContext, useState } from 'react';
// contexts
import { UserContext } from '../contexts/UserContext.js';

import './styles/SignIn.css';
import axios from 'axios';


const SignUp = (props) => {
    const {credentials, setCredentials} = useContext(UserContext);
    const [canSubmit, setCanSubmit] = useState(true);

    const handleChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    const signUp = (event) => {
        event.preventDefault();
        if (credentials.username.length === 0 || credentials.password.length === 0) {
            setCanSubmit(false);
        } else {
            axios.post('https://african-marketplace-2020.herokuapp.com/api/auth/register', credentials)
            .then((response) => {
                console.log("This is the response from signUp:", response)
                props.history.push('/SignIn')
            })
            .catch((error) => {
                console.log("This is an error from signUp:", error.message)
            })
        }
    }
    
    return (
        <div className='container'>
            <h1 className='title'>Welcome to Sauti Africa!</h1>
            <p className='error'>{canSubmit ? null : "You need a username and a password."}</p>
            <div className='sign-in-card'>   
                <form onSubmit={signUp}>
                    <label type="text" className='form-label'>
                        Username
                    </label>
                    <input name="username" value={credentials.username} onChange={handleChange} type='text' className='form-input'/>
                    <div className='password'>
                        <div><label htmlFor='password' className='form-label'>Password:</label></div>
                    </div>
                    <input name="password" value={credentials.password} onChange={handleChange} type='password' className='form-input'/>
                    <button onClick={signUp} className='sign-in'>Sign Up</button>
                </form>
                <p className='new-user'>New user? <a href='#'>Create an account.</a></p>
            </div>
        </div>
    )
}

export default SignUp;