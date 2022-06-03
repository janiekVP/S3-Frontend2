import React from 'react';
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import UserService from '../../services/UserService';
//import ItemService from '../../services/ItemService'

function UserCreate() {

    const inputvalues = {   userName: '', email: '', favorite: 0};
    const [user, setUser] = useState(inputvalues);
    // const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // ItemService.GetAllItems().then((result) => {
        //     setItems(result.data)
        //     console.log(result.data);
        //     console.log(items);
        // })
      }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
        console.log(user);
      };

    // const listItems = items.map(item => {
    //     return <option key={item.id} value={item.id}>{item.name}</option>
    // });

    const handleSubmit = e => {
        e.preventDefault();
            const currentUser = {
                userName: user.userName,
                email: user.email,
                favorite: user.favorite
            }
            console.log(currentUser);
            UserService.CreateUser(currentUser)
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
                        defaultValue={''}
                        name="userName"
                        type="text"
                    /></div>

                    <div className='profile-container'>
                    <label className="label">email</label>
                    <input
                        onChange={handleChange}
                        className="form-control"
                        defaultValue={''}
                        name="email"
                        type="text"
                    /></div>

                    {/* <div className='profile-container'>
                    <label className="label">favorite</label>
                    <select 
                        id = "dropdown"
                        onChange={handleChange}
                        name="favorite">
                        {listItems}
                    </select>
                    </div> */}

                    
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
    )
}
 
export default UserCreate;