import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { axiosWithAuth } from '../utils/AxiosWithAuth';



// const NewItem = (props) => {
    
//     let [name, setName] = useState('');
//     let [description, setDescription] = useState('');
//     let [price, setPrice] = useState('');
//     let [canPass, setCanPass] = useState(true);
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (name.length === 0 || description.length === 0) {
//             setCanPass(false);
//             return false;
//         }
//         else if (!price) {
//             setCanPass(false);
//             return false;
//         }
//         else if (isNaN(price)) {
//             setCanPass(false);
//             return false;
//         }
//         //submit
//         setCanPass(true);
//         return true;
//     };

const SubmitListings = () => {
    const [listing, setListing] =useState({
        location: '',
        item: '',
        description: '',
        price: ''
    });

        let history = useHistory()
        let id = localStorage.getItem('id')
    
    const submitListings = event => {
        event.preventDefault();
        console.log(listing);
        console.log(id)
        axiosWithAuth().post(`https://african-marketplace-2020.herokuapp.com/api/users/${id}/listings`, listing)
        .then(response => {
            console.log(response.data)
            history.push('/UserListings')
        })
    }

    const handleChange = event => {
        setListing({
            ...listing,
            [event.target.name]: event.target.value
        })
        console.log(listing);
    }


    return (
        <div className="newItemForm">
            <h1 className='title'>Add an Item</h1>
            {/* <p className='error'>{canPass ? null : "You need a name and a description, and the price must be a number."}</p> */}
            <form onSubmit={submitListings}>
                <label className="entry">Shop Location:
                    <input
                    name="location"
                    value={listing.location}
                    onChange={handleChange}
                    className="entry"
                    />
                </label>
                <label className="entry"> Product Name:
                    <input
                    name="item"
                    value={listing.item}
                    onChange={handleChange}
                    className="entry"
                    />
                </label>
                <label className="entry"> Description:
                    <input
                    name="description"
                    value={listing.description}
                    onChange={handleChange}
                    className="entry description"
                    />
                </label>
                <label className="entry"> Price:
                    <input
                    name="price"
                    value={listing.price}
                    onChange={handleChange}
                    className="entry"
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default SubmitListings;


                {/* <select className='entry'
                        label="location"
                        type='text' 
                        placeholder='Location' 
                        className='entry' 
                        onChange={handleChange}
                >
                    <option>Somalia</option>
                    <option>Ethiopia</option>
                    <option>Kenya</option>
                    <option>Uganda</option>
                    <option>Tanzania</option>
                </select>
                <input 
                    label="item"
                    type='text' 
                    value={listings.item}
                    placeholder='Item Name' 
                    className='entry' 
                    onChange={handleChange}/>
                <textarea
                    label="description"  
                    className='entry description' 
                    placeholder='Type in a description.' 
                    onChange={handleChange}>
                </textarea>
                <input 
                    label="price"
                    type='text' 
                    placeholder='Price' 
                    className='entry' 
                    onChange={handleChange}/>
                <select className='entry'>
                    <option>Animal Products</option>
                    <option>Dry Goods</option>
                    <option>Fruit</option>
                    <option>Vegetable</option>
                    <option>Other</option>
                </select>
                <select className='entry'>
                    <option>Dairy and Eggs</option>
                    <option>Meat</option>
                    <option>Livestock</option>
                    <option>Beans</option>
                    <option>Rice</option>
                    <option>Cereals</option>
                    <option>Bananas</option>
                    <option>Apples</option>
                    <option>Roots and Tubers</option>
                    <option>Greens</option>
                    <option>Smokables</option>
                </select> */}