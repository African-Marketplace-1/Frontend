import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// axios
import axios from 'axios'
// components
import Navigation from './Navigation.js';
// styles
import "./styles/Landing.css";

const ItemView = (props) => {
    const [item, setItem] = useState([])
    // let history = useHistory()
    let { id } = useParams()

    useEffect(() => {
        axios.get(`https://african-marketplace-2020.herokuapp.com/api/listings/${id}`)
            .then((response) => {
                // console.log("This is the response from item view:", response)
                setItem(response.data)

            })
            .catch((error) => {
                console.log("This is the error from item view:", error.message)
            })
    }, [])

    return(
        <div>
            <Navigation />
            <div className="item-view">
            <div className="offering-card-view" key={item.id}>
                <h4 className="offering-seller-view"> {item.username} is selling... </h4>
                <h2 className="offering-product-view"> {item.item}! </h2>
                <h5 className="offering-price-view">Asking: ${item.price} </h5>
                <h5 className="offering-location-view">Location: {item.location} </h5>
                <button className="offering-btn-view">Contact Seller</button>
            </div>
            </div>
        </div>
    )
}

export default ItemView;