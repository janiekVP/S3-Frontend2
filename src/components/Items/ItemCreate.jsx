import React from 'react';
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import ItemService from '../../services/ItemService';

function ItemCreate() {

    const inputvalues = {   name: '', description: ''};
    const [item, setItem] = useState(inputvalues);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setItem({ ...item, [name]: value });
        console.log(item);
      };

    const handleSubmit = e => {
        e.preventDefault();
            const currentItem = {
                name: item.name,
                description: item.description
            }
            console.log(currentItem);
            ItemService.CreateItem(currentItem)
                return navigate('/');   
            }

    return ( 
        <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className='profile-container'>
                    <label className="label">name</label>
                    <input
                        onChange={handleChange}
                        className="form-control"
                        defaultValue={''}
                        name="name"
                        type="text"
                    /></div>

                    <div className='profile-container'>
                    <label className="label">description</label>
                    <input
                        onChange={handleChange}
                        className="form-control"
                        defaultValue={''}
                        name="description"
                        type="text"
                    /></div>
                    
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
    )
}
 
export default ItemCreate;