import React from 'react';
import './xbox-format.css';
import Slider from '../slider/Slider'
import XboxBanner from '../../../assets/images/xbox-banner.png'

const XboxFormat = (props) => {
    
    
    
    
    return ( 
        <div className='xbox-format-container'>
            <Slider class='card-holder' data={props.data} banner={XboxBanner} topBannerClass='top-xb-class'/>
            
        </div>
     );
}
 
export default XboxFormat;