import React from 'react';
import './buy-button.css'
import CartImage from '../../assets/icons/cart.png';
const BuyButton = (props) => {
    return ( 
            <span className={props.class}>
                <img src={CartImage} className={props.cartClass}/>{props.title}
            </span>
     );
}
 
export default BuyButton;