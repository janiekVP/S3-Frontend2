import React from 'react';
import ItemService from '../../services/ItemService';
import { useState, useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom';

function ItemPage() {
    const inputvalues = { id: 0, name: '', description: ''};
    const [item, setItem] = useState(inputvalues);
    const navigate = useNavigate();
    const { id } = useParams();


        useEffect(() => {
            ItemService.GetById(id)
            .then(resp => {
              const { id, name, description} = resp.data
              setItem({ id, name, description})
            })
          }, []);
    

        return ( 
            <div className='container'>
                <div className='profile-container'>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                </div>
            </div>
         );
    }

 
export default ItemPage;