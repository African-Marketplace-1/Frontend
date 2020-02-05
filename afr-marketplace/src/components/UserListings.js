import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// Contexts
import { UserContext } from '../contexts/UserContext.js';
// axiosWithAuth
import { axiosWithAuth } from '../utils/AxiosWithAuth.js';
// components 
import Navigation from './Navigation.js';

const UserListings = () => {
    const [userListings, setUserListings] = useState([])
    let history = useHistory()
    let id = localStorage.getItem('id')

    useEffect(() => {
        axiosWithAuth().get(`https://african-marketplace-2020.herokuapp.com/api/users/${id}/listings`)
            .then((response) => {
                console.log("This is the response from user listings:", userListings)
                setUserListings(response)
            })
            .catch((error) => {
                console.log("This is an error from user listings:", error.message)
            })
    }, [])

    return (
        <div>
            <Navigation />
            <div>
                { userListings.length > 0 ?
                    userListings.map((listing) => {
                        return (
                            <div>
                                <h1>{listing.item}</h1>
                                <h3>{listing.location}</h3>
                            </div>
                        )
                    }) :

                    <h1>Upload a listing today!</h1>

                }
            </div>
        </div>
    )
}

export default UserListings;