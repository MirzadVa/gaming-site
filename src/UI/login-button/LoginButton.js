import React from 'react';
import './login-button.css';
import {Link} from 'react-router-dom'


const LoginButton = (props) => {
    return ( 
        <div>
            <Link to='/login'>
            <button className='login-button'>Log in</button>
            </Link>
        </div>
     );
}
 
export default LoginButton;