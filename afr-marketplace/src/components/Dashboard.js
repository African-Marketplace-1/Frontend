import React, { useState, useEffect, useContext } from 'react';
// axiosWithAuth
import { axiosWithAuth } from '../utils/AxiosWithAuth.js';
// Context
import { UserContext } from '../contexts/UserContext.js';

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
            {
                items.map((item) => {
                    return (
                        <div key={item.id}>
                            <h1>{item.product}</h1>
                            <h3>${item.avg_price}</h3>
                            <h6>{item.product_cat}</h6>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Dashboard