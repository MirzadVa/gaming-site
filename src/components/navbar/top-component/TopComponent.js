import React from 'react';
import Search from '../../../container/search-game/SearchGame';
import Login from './login/Login';
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