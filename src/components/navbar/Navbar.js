import React from 'react';
import TopComponent from './top-component/TopComponent';
import LowComponent from './low-component/LowComponent';
import './navbar.css';

const Navbar = () =>{

    return(
        <div className='navbar-container'>
            <TopComponent />
            <LowComponent />
        </div>
    )
}


export default Navbar;