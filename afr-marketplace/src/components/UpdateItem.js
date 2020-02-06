import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// contexts
import { UserContext } from '../contexts/UserContext.js';
// axiosWithAuth
import { axiosWithAuth } from '../utils/AxiosWithAuth.js';
// styles
import './styles/UpdateItem.css';
// components
import Navigation from './Navigation.js';

const initial = {
    user_id: '',
    location: '',
    item: '',
    description: '',
    price: ''
}

const UpdateForm = () => {
    const [item, setItem] = useState(initial)

    let history = useHistory()
    // console.log("This is history in update form:", history)
    const { id } = useParams()
    const userId = localStorage.getItem('id')
    console.log("This is the id from useParams (item):", id)
    console.log("This is userId (user):", userId)
    console.log("This is the item:", item)

    useEffect(() => {
        axiosWithAuth().get(`api/listings/${id}`)
            .then((response) => {
                console.log("This is the response from the update form:", response)
                // setItem(response.data)
                setItem({
                    user_id: response.data.user_id,
                    location: response.data.location,
                    item: response.data.item,
                    description: response.data.description,
                    price: response.data.price
                })
            })
            .catch((error) => {
                console.log("This is the error from the update form:", error.message)
            })
    }, [])

    const handleChange = (event) => {
        setItem({
            ...item,
            [event.target.name]:event.target.value
        })
    }

    const handleUpdate = (event) => {
        event.preventDefault()
        axiosWithAuth().put(`/api/users/${userId}/listings/${id}`, item)
            .then((response) => {
                console.log("This is the put response from update form:", response)
                setItem(initial)
                history.push('/UserListings')
                
            })
            .catch((error) => {
                console.log("This is the error from put request on update form:", error.message)
            })
    }

    const backToDash = () => {
        history.push('/Dashboard')
    }



    return (
        <div>
            <Navigation />
            <div>
                <form className="divide-container" onSubmit={handleUpdate}>
                    <div className='box'>
                        <label className="label">Location: </label>
                            <input
                            className="entry"
                            name="location"
                            value={item.location || ''}
                            onChange={handleChange}
                            />
                    </div>
                    <div className="box">
                        <label className="label"> Name: </label>
                            <input
                            className="entry"
                            name="item"
                            value={item.item || ''}
                            onChange={handleChange}
                            />
                    </div>
                    <div className="box">
                        <label className="label"> Description: </label>
                            <input
                            className="entry description"
                            name="description"
                            value={item.description || ''}
                            onChange={handleChange}
                            />
                    </div>
                    <div className="box">
                        <label className="label"> Price: $  </label>
                            <input
                            className="entry"
                            name="price"
                            value={item.price || ''}
                            onChange={handleChange}
                            />
                    </div>
                    <div className="box buttons">
                        <button type='submit'>Save Changes</button>
                        <button onClick={backToDash}>Dashboard</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateForm;