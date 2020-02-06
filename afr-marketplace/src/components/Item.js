import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// contexts
// import { UserContext } from '../contexts/UserContext.js';
// axiosWithAuth
import { axiosWithAuth } from '../utils/AxiosWithAuth.js';
// styles
import './styles/Item.css';
// components
import Navigation from './Navigation.js';


const Item = (props) => {
const [item, setItem] = useState({})
// const [updateStatus, setUpdateStatus] = useState(false)


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
                <div className="editContainer">
                    <div className="indv-item-display">
                        <h1 className="indv-prod-name"> {item.item} </h1>
                        <br/>
                        <h4 className="indv-loc"> {item.location} </h4>
                        
                        <br/>
                        <h2 className="indv-price">Curent Price: ${item.price} </h2>
                        <br/>
                        <div className="indv-desc"> <p> {item.description} </p> </div>
                    </div>
                    
                </div>
            }
            <div className="indv-item-btn-div">
                        <button onClick={updateItem} className="btn-update hoverbutton">Update</button>
                        <button onClick={deleteItem} className="btn-delete hoverbutton">Delete</button>
                        <button className="btn-back hoverbutton" onClick={backToDash}>Dashboard</button>
                    </div>
        </div>
    )
}

export default Item;