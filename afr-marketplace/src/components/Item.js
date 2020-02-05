import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// contexts
import { UserContext } from '../contexts/UserContext.js';
// axiosWithAuth
import { axiosWithAuth } from '../utils/AxiosWithAuth.js';
// styles
import './styles/Item.css';
// components
import Navigation from './Navigation.js';


const Item = (props) => {
const [item, setItem] = useState({})
const [updateStatus, setUpdateStatus] = useState(false)


let history = useHistory()
const { id } = useParams()
const userId = localStorage.getItem('id')

useEffect(() => {
    axiosWithAuth().get(`api/listings/${id}`)
        .then((response) => {
            console.log("This is the response from Item comp:", response)
            setItem(response.data)
        })
        .catch((error) => {
            console.log("This is an error from item comp:", error.message)
        })
}, [])

const backToDash = () => {
    history.push(`/UserListings`)
}

const deleteItem = () => {
    axiosWithAuth().delete(`/api/users/${userId}/listings/${id}`)
        .then((response) => {
            console.log("This is the response from delete:", response)
            setItem({})
            history.push('/UserListings')
        })
        .catch((error) => {
            console.log("This is the error from delete:", error.message)
        })
}

const updateItem = () => {
    history.push(`/listingEdit/${id}`)
}

    return (
        <div>
            <Navigation />
            {
                !item ?
                <button className="first-listing" onClick={backToDash}>Add Your First Listing Today</button> :
                <div>
                    <div className="indv-item-display">
                        <h1 className="indv-prod-name"> {item.item} </h1>
                        <h2 className="indv-price">  ${item.price} </h2>
                        <h4 className="indv-loc"> {item.location} </h4>
                        <div className="indv-desc"> <p> {item.description} </p> </div>
                    </div>
                    <div className="indv-item-btn-div">
                        <button onClick={updateItem} className="btn-update">Update</button>
                        <button onClick={deleteItem} className="btn-delete">Delete</button>
                        <button className="btn-back" onClick={backToDash}>Dashboard</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Item;