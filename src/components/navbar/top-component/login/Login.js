import React from 'react';
import './login.css';
import CartImage from '../../../../assets/icons/cart.png';
import ProfilePicture from '../../../../assets/images/profile-picture.jpg'

const Login = () => {
    return ( 
        <div className='login-container'>

            <div className=' login-item currency'>
                <p>Currency: USD</p>
            </div>

            <div className=' login-item account'>
                <img src={ProfilePicture} className='login-image' id='login-image'/>
                <p className='login-text'>My Account</p>
            </div>

            <div className=' login-item cart'>
                <img src={CartImage} className='login-image'/>
                <p className='login-text'>My Cart</p>
                <div className='notiffication'>1</div>
            </div>

        </div>
     );
}
 
export default Login;