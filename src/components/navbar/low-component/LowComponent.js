import React from 'react';
import './low-component.css';
import {Link} from 'react-router-dom';
import MyLink from './my-link/MyLink';

const LowComponent = () =>{

    const style={textDecoration: 'none', color: 'white'}

    return(
        <div className='low-component-container'>
            <div className='links-container'>
                <Link to={'/'} style={style}>
                    <MyLink name='HOME' />
                </Link>

                <MyLink name='DIGITAL DOWNLOAD'/>

                <Link to='/preorders' style={style}>
                    <MyLink name='PRE ORDERS'/>
                </Link>
                
                <Link to='/playstation-store' style={style}>
                    <MyLink name='PS4'/>
                </Link>

                <Link to='/xbox-one' style={style}>
                    <MyLink name='XBOX ONE'/>
                </Link>

                <Link to='/nintendo' style={style}>
                    <MyLink name='NINTENDO'/>
                </Link>
                
                <MyLink name='CONSOLES & ACCESSORIES'/>
                <MyLink name='APEX COINS'/>
            </div>
        </div>
    )
}


export default LowComponent;