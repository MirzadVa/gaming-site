import React from 'react';
import './card.css';
import PSImage from '../../../assets/images/ps4.png';
import PegiImage from '../../../assets/images/pegi.png';


const Card = (props) => {

    const style = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: '100% 100%'
    }



    return ( 
        <div className='card' style={style}>
            <img  src={PSImage} className='ps-banner'/>
            <img src={PegiImage} className='pegi-image'/>
        </div>
     );
}
 
export default Card;