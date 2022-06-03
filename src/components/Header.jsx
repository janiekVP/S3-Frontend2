import React from "react";
import { Link } from "react-router-dom";
import '../style/Header.css'


const Header = () => {
    return(
        <header className='p-3 text-white' id='header'>
            <div className='container'>
                <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
                    {/* <a className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'></a> */}

                    <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
                        <li><Link to='/' className='nav-link px-2 text-lpurple'>Home</Link></li>
                        <li><Link to='/items' className='nav-link px-2 text-lpurple'>Items</Link></li>
                        <li><Link to='/users' className='nav-link px-2 text-lpurple'>Users</Link></li>
                    </ul>


                    <div className='text-end'>
                        <button className='btn btn-outline-light me-2 headbtn'>Login</button>
                        <button className='btn btn-outline-light headbtn'>Register</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;