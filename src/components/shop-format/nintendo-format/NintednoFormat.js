import React from 'react';
import './nintendo-format.css';
import Slider from '../slider/Slider';
import NintendoBanner from '../../../assets/images/nintendo-banner.png'
import {Link} from 'react-router-dom';
import ViewMoreButton from '../../../UI/view-more-button/ViewMoreButton';


const NintendoFormat = (props) => {
    return ( 
        <div className='nintendo-format-container'>
            <Slider class='card-holder' data={props.data} banner={NintendoBanner}/>
            <Link to='/nintendo' style={{cursor: 'pointer'}}>
                    <ViewMoreButton class='view-more-format'/>
            </Link>
        </div>
     );
}
 
export default NintendoFormat;