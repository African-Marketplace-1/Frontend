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

const initial = {
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

    useEffect(() => {
        axiosWithAuth().get(`api/listings/${id}`)
            .then((response) => {
                console.log("This is the response from the update form:", response)
                setItem(response.data)
            })
            .catch((error) => {
                console.log("This is the error from the update form:", error.message)
            })
    }, [id])

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
            <div className="divide-container">
                <form onSubmit={handleUpdate}>
                    <label>Location:
                        <input
                        name="location"
                        value={item.location || ''}
                        onChange={handleChange}
                        />
                    </label>
                    <label> Product Name:
                        <input
                        name="item"
                        value={item.item || ''}
                        onChange={handleChange}
                        />
                    </label>
                    <label> Description:
                        <input
                        name="description"
                        value={item.description || ''}
                        onChange={handleChange}
                        />
                    </label>
                    <label> Price: $
                        <input
                        name="price"
                        value={item.price || ''}
                        onChange={handleChange}
                        />
                    </label>
                    <button type='submit' onClick={handleUpdate}>Save Changes</button>
                    <button onClick={backToDash}>Dashboard</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateForm;