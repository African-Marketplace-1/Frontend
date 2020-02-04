import React, { useState, useEffect, useContext } from 'react';

// Context
import UserContext from '../contexts/UserContext.js';
// axios
import axios from 'axios'
// Components
import Navigation from './Navigation.js';

const Landing = (props) => {
    const [listings, setListings] = useState()

    useEffect(() => {
        axios.get('https://african-marketplace-2020.herokuapp.com/api/prices')
            .then((response) => {
                console.log("This is the response from landing page:", response)
            })
            .catch((error) => {
                console.log("This is an error from the landing page:", error.message)
            })
    }, [])

    const toSignIn = () => {
        console.log("To Login Component...")
        props.history.push('/SignIn')
    }

    const toSignUp = () => {
        console.log("To Sign Up Component...")
        props.history.push('/SignUp')
    }

    return (
    <div>
        <Navigation />
        <div className="landing-container">
            <h1>Welcome to The Official Marketplace of Sauti Africa</h1>
            <div>
                <p> Connecting small businesses to customers throughout the region. </p>
                <div className="landing-btn-div">
                    <button onClick={toSignIn}>Sign In</button>
                            or
                    <button onClick={toSignUp}>Sign Up</button>
                </div>
            </div>


        </div>
    </div>
    )

}

export default Landing