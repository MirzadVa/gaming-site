import React from 'react';
import './xbox-format.css';
import Slider from '../slider/Slider';
import XboxBanner from '../../../assets/images/xbox-banner.png';
import {Link} from 'react-router-dom';
import ViewMoreButton from '../../../UI/view-more-button/ViewMoreButton';

const XboxFormat = (props) => {
    
    
    
    
    return ( 
        <div className='xbox-format-container'>
            <Slider class='card-holder' data={props.data} banner={XboxBanner} topBannerClass='top-xb-class'/>
            <Link to='/xbox-one' style={{cursor: 'pointer'}}>
                    <ViewMoreButton class='view-more-format'/>
            </Link>
        </div>
     );
}
 
export default XboxFormat;