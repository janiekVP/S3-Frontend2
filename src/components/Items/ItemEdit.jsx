import React from 'react';
import ItemService from '../../services/ItemService';
import { useState, useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom';

function ItemPage() {
    const inputvalues = { id: 0, name: '', description: ''};
    const [item, setItem] = useState(inputvalues);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setItem({ ...item, [name]: value });
        console.log(item);
      };

    useEffect(() => {
        ItemService.GetById(id)
        .then(resp => {
          const { id, name, description} = resp.data
          setItem({ id, name, description})
          })
        }, []);

        const handleSubmit = e => {
        e.preventDefault();
            const currentItem = {
                id: item.id,
                name: item.name,
                description: item.description
            }
            console.log(currentItem);
            ItemService.Update(currentItem)
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
                        defaultValue={item.name || ''}
                        name="name"
                        type="text"
                    /></div>

                    <div className='profile-container'>
                    <label className="label">description</label>
                    <input
                        onChange={handleChange}
                        className="form-control"
                        defaultValue={item.description || ''}
                        name="description"
                        type="text"
                    /></div>
                    
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
         );
    }

 
export default ItemPage;