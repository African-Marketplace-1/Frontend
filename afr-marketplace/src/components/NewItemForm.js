import React from 'react';
import { Link } from 'react-router-dom';
import './NewItem.css'

const NewItem = (props) => {
    return (
        <div>
            <h1 className='title'>Add an Item</h1>
            <form>
                <select className='entry'>
                    <option>Somalia</option>
                    <option>Ethiopia</option>
                    <option>Kenya</option>
                    <option>Uganda</option>
                    <option>Tanzania</option>
                </select>
                <input type='text' placeholder='Item Name' className='entry'/>
                <textarea  className='entry description' placeholder='Type in a description.'></textarea>
                <input type='text' placeholder='Price' className='entry'/>
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
            </form>
        </div>
    )
};

export default NewItem;