import React from 'react';
import './nintendo-format.css';
import Slider from '../slider/Slider';
import NintendoBanner from '../../../assets/images/nintendo-banner.png'

const NintendoFormat = (props) => {
    return ( 
        <div className='nintendo-format-container'>
            <Slider class='card-holder' data={props.data} banner={NintendoBanner}/>
            
        </div>
     );
}
 
export default NintendoFormat;