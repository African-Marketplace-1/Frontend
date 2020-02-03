import React from 'react';
import './SignIn.css';

const SignIn = (props) => {
    return (
        <div className='container'>
            <h1 className='title'>Welcome back to Sauti Africa!</h1>
            <div className='sign-in-card'>   
                <form>
                    <label htmlFor='email' className='form-label'>
                        Email Address
                    </label>
                    <input type='email' className='form-input'/>
                    <div className='password'>
                        <div><label htmlFor='password' className='form-label'>Password</label></div> 
                        <div className='forgot-password'><a href='#'>Forgot password?</a></div>
                    </div>
                    <input type='password' className='form-input'/>
                    <button className='sign-in'>Sign in</button>
                </form>
                <p className='new-user'>New user? <a href='#'>Create an account.</a></p>
            </div>
        </div>
    )
}

export default SignIn;