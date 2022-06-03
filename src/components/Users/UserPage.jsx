import React from 'react';
import UserService from '../../services/UserService';
import { useState, useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom';

function UserPage() {
    const inputvalues = { id: 0, userName: '', email: '', favorite: ''};
    const [user, setUser] = useState(inputvalues);
    const navigate = useNavigate();
    const { id } = useParams();


        useEffect(() => {
            UserService.GetById(id)
            .then(resp => {
              const { id, userName, email, favorite} = resp.data
              setUser({ id, userName, email, favorite})
            })
          }, []);
    

        return ( 
            <div className='container'>
                <div className='profile-container'>
                    <p>{user.userName}</p>
                    <p>{user.email}</p>
                    <p>{'' || user?.favorite?.name}</p>
                </div>
            </div>
         );
    }

 
export default UserPage;