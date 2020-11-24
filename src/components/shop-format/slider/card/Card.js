import React from 'react';
import './card.css'
import PsBanner from '../../../../assets/images/ps4.png'

const Card = (props) => {
    return ( 
        <div className='playstation-format-card'>
            <div className={props.topBannerClass}></div>
            <img src={props.banner} className='format-ps-banner'/>
            <img src={props.image} className='format-image'/>
        
        </div>
     );
}
 
export default Card;