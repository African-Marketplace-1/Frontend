import React, { useState, useEffect } from 'react';
// axiosWithAuth
import { axiosWithAuth } from '../utils/AxiosWithAuth.js';

// styles
import './styles/Dashboard.css';

// components
import Navigation from './Navigation.js';
import NewItemForm from './NewItemForm.js';

const Dashboard = (props) => {
    const [items, setItems] = useState([])


    useEffect(() => {
        axiosWithAuth().get('api/prices')
            .then((response) => {
                console.log("This is response from Dashboard:", response.data)
                setItems(response.data)
            })
            .catch((error) => {
                console.log("This is an error from Dashboard:", error)
            })
    }, [])



    return (
        <div>
            <Navigation />
        <div className="content">
            
            <div className="item-container-dash">
                
            {items.map((item) => {
                    return (
                        <div className="item-dash" key={item.id}>
                            <h1 className="product-name">{item.product}</h1>
                            <br/>
                            <h6 className="product-category"><span>Category: </span>{item.product_cat}</h6>
                            <h6 className="product-subcategory"><span>Sub-category: </span>{item.sub_category}</h6>
                            <br/>
                            <h3 className="product-price"><span>Current Price: </span>${item.avg_price}</h3>
                        </div>
                    )
                })
            }
            </div>
            <div className="form-container">
                <NewItemForm />
            </div>
        </div>
        </div>
    )
}

export default Dashboard