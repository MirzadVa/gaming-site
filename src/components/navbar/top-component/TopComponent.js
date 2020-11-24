import React from 'react';
import Login from './login/Login';
import Search from './search/Search';
import './top-component.css';

const TopComponent = () =>{


    return(
        <div className='top-component-container'>
            <Search />
            <Login />
        </div>
    )
}

export default TopComponent;