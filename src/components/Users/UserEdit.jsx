import React from 'react';
import UserService from '../../services/UserService';
import { useState, useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom';
import ItemService from '../../services/ItemService';

function UserPage() {
    const inputvalues = { id: 0, userName: '', email: '', favorite: ''};
    const [user, setUser] = useState(inputvalues);
    const [items, setItem] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
        console.log(user);
      };

    useEffect(() => {
        UserService.GetById(id)
        .then(resp => {
          const { id, userName, email, favorite} = resp.data
          setUser({ id, userName, email, favorite})
          })
        ItemService.GetAllItems()
        .then(resp => {
          setItem(resp.data)
       
          console.log(resp.data);
          })
        }, []);

        const handleSubmit = e => {
        e.preventDefault();
            const currentUser = {
                id: user.id,
                userName: user.userName,
                email: user.email,
                favorite: user.favorite
            }
            console.log(currentUser);
            UserService.Update(currentUser)
                return navigate('/');   
            }

        return ( 
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className='profile-container'>
                    <label className="label">username</label>
                    <input
                        onChange={handleChange}
                        className="form-control"
                        defaultValue={user.userName || ''}
                        name="userName"
                        type="text"
                    /></div>

                    <div className='profile-container'>
                    <label className="label">email</label>
                    <input
                        onChange={handleChange}
                        className="form-control"
                        defaultValue={user.email || ''}
                        name="email"
                        type="text"
                    /></div>
                    
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
         );
    }

 
export default UserPage;