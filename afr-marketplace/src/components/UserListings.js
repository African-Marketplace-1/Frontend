import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// Contexts
import { UserContext } from '../contexts/UserContext.js';
// axiosWithAuth
import { axiosWithAuth } from '../utils/AxiosWithAuth.js';
// components 
import Navigation from './Navigation.js';
// styles
import './styles/UserListings.css';

const UserListings = () => {
    const [userListings, setUserListings] = useState([])
    let history = useHistory()
    let id = localStorage.getItem('id')
    console.log("This is the id in UserListing:", id)

    useEffect(() => {
        axiosWithAuth().get(`https://african-marketplace-2020.herokuapp.com/api/users/${id}/listings`)
            .then((response) => {
                console.log("This is the response from user listings:", response.data)
                setUserListings(response.data)
            })
            .catch((error) => {
                console.log("This is an error from user listings:", error.message)
            })
    }, [])

    const goToItem = (id) => {
        history.push(`/Item/${id}`)
    }

    return (
        <div>
            <Navigation />
            <div className="item-container">
                { userListings.length > 0 ?
                    userListings.map((listing) => {
                        return (
                            <div onClick={() => goToItem(listing.id)} className="item" key={listing.id} id={listing.id}>
                                <h1 className="item-name">{listing.item}</h1>
                                <h3 className="item-location">{listing.location}</h3>
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