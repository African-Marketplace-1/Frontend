import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NewItem.css'

const NewItem = (props) => {
    let [name, setName] = useState('');
    let [description, setDescription] = useState('');
    let [price, setPrice] = useState('');
    let [canPass, setCanPass] = useState(true);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.length === 0 || description.length === 0) {
            setCanPass(false);
            return false;
        }
        else if (!price) {
            setCanPass(false);
            return false;
        }
        else if (isNaN(price)) {
            setCanPass(false);
            return false;
        }
        //submit
        setCanPass(true);
        return true;
    };
    return (
        <div>
            <h1 className='title'>Add an Item</h1>
            <p className='error'>{canPass ? null : "You need a name and a description, and the price must be a number."}</p>
            <form onSubmit={(event) => handleSubmit(event)}>
                <select className='entry'>
                    <option>Somalia</option>
                    <option>Ethiopia</option>
                    <option>Kenya</option>
                    <option>Uganda</option>
                    <option>Tanzania</option>
                </select>
                <input type='text' placeholder='Item Name' className='entry' value={name} onChange={(event) => setName(event.target.value)}/>
                <textarea  className='entry description' placeholder='Type in a description.' value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
                <input type='text' placeholder='Price' className='entry' value={price} onChange={(event) => setPrice(event.target.value)}/>
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
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default NewItem;