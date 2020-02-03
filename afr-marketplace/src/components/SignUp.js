import React from 'react';
import './styles/SignIn.css';

const SignUp = (props) => {
    return (
        <div className='container'>
            <h1 className='title'>Welcome to Sauti Africa!</h1>
            <div className='sign-in-card'>   
                <form>
                    <label htmlFor='email' className='form-label'>
                        Email Address
                    </label>
                    <input type='email' className='form-input'/>
                    <div className='password'>
                        <div><label htmlFor='password' className='form-label'>Password</label></div>
                    </div>
                    <input type='password' className='form-input'/>
                    <button className='sign-in'>Sign Up</button>
                </form>
                <p className='new-user'>New user? <a href='#'>Create an account.</a></p>
            </div>
        </div>
    )
}

export default SignUp;