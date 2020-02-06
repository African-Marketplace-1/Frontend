import React, { useState, useEffect } from 'react';

// Context
// import UserContext from '../contexts/UserContext.js';
// axios
import axios from 'axios'
// Components
import Navigation from './Navigation.js';
// styles
import "./styles/Landing.css";
import undraw from  "./styles/undraw.png"

const Landing = (props) => {
    const [searchTerm, setSearchTerm] = useState("")
const [listings, setListings] = useState([])


useEffect(() => {
    axios.get('https://african-marketplace-2020.herokuapp.com/api/listings')
        .then((response) => {
            console.log("This is the response on the landing page:", response)
            let data = response.data
            let results = data.filter(product => 
                product.item.toLowerCase().includes(searchTerm.toLowerCase())
                )
            setListings(results)
        })
        .catch((error) => {
            console.log("This is the error from the landing page:", error)
        })
},[searchTerm])

    const toSignIn = () => {
        console.log("To Login Component...")
        props.history.push('/SignIn')
    }

    const toSignUp = () => {
        console.log("To Sign Up Component...")
        props.history.push('/SignUp')
    }

    const toItemView = (id) => {
        props.history.push(`/view/${id}`)
    }

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const clearForm = (event) => {
        event.preventDefault()
        setSearchTerm("")
    }

    return (
    <div>

        <Navigation />

        <div className="landing-container">

            <h1 className="landing-header">Welcome to The Official Marketplace of Sauti Africa</h1>

                <div className="content">
                    <div className="right">
                        <h3 className="desc"> Connecting small businesses to customers throughout the region. </h3>
                        <div className="landing-btn-div">
                            <button className="btn-right" onClick={toSignIn}>Sign In</button>
                                    <p className="or">OR</p>
                            <button className="btn" onClick={toSignUp}>Sign Up</button>
                        </div>
                    </div>
                    <div className="left">
                        <img className="image" src={undraw} />
                    </div>
                </div>
                <section>
                    <h1 className="offering-header">Check Out Some Current Offerings</h1>
                    <div className="">
                        <form className="form-contain">
                            <input className="input" placeholder="Search for a product or user" value={searchTerm} onChange={handleChange} /> 
                            <div className="clear-btn" onClick={clearForm}>Clear</div>
                        </form>
                    </div>
                    <div className="offering-div">
                        {
                            listings.length > 0 ?
                            listings.map((item) => {
                                return (
                                    <div className="offering-card" key={item.id}>
                                       <h4 className="offering-seller"> {item.username} is selling... </h4>
                                       <h2 className="offering-product"> {item.item}! </h2>
                                       <h5 className="offering-price">Asking: ${item.price} </h5>
                                       <h5 className="offering-location">Location: {item.location} </h5>
                                        <button onClick={() => toItemView(item.id)} className="offering-btn">View Listing</button>
                                    </div>
                                )
                            }) :
                            <div>
                                There are no current offerings.
                            </div>
                        }
                    </div>
                </section>
        </div>

    </div>
    )

}

export default Landing