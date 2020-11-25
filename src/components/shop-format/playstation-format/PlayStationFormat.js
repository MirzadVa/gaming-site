import React from 'react';
import './playstation-format.css'
// import PlayStationImage from '../../../assets/images/playstation-background.png';
import PlaystationSlider from '../slider/Slider';
import PsBanner from '../../../assets//images/ps4.png';
import ViewMoreButton from '../../../UI/view-more-button/ViewMoreButton';
import {Link} from 'react-router-dom';

const PlayStationFormat = (props) => {
    return ( 
        <div className='playstation-format-container'>
            {/* <img src={PlayStationImage} className='playstation-wallpaper'/> */}
            <div className='card-holder'>
                <PlaystationSlider data={props.data} class={'playstation-format-slider'} banner={PsBanner} topBannerClass='top-xb-banner'/>
                <Link to='/playstation-store'>
                    <ViewMoreButton class='view-more-format'/>
                </Link>
                
            </div>
            
        </div>
     );
}
 
export default PlayStationFormat;