import React from 'react';
import './low-component.css';
import {Link} from 'react-router-dom';
import MyLink from './my-link/MyLink';

const LowComponent = () =>{

    return(
        <div className='low-component-container'>
            <div className='links-container'>
                <Link to={'/'}>
                    <MyLink name='HOME' />
                </Link>
                <MyLink name='DIGITAL DOWNLOAD'/>
                <MyLink name='PRE ORDERS'/>
                <MyLink name='NEW RELEASES'/>
                <MyLink name='PS4'/>
                <MyLink name='XBOX ONE'/>
                <MyLink name='NINTENDO'/>
                <MyLink name='CONSOLES & ACCESSORIES'/>
                <MyLink name='APEX COINS'/>
            </div>
        </div>
    )
}


export default LowComponent;