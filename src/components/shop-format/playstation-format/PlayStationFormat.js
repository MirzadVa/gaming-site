import React from 'react';
import './playstation-format.css'
// import PlayStationImage from '../../../assets/images/playstation-background.png';
import PlaystationSlider from '../slider/Slider';
import PsBanner from '../../../assets//images/ps4.png'

const PlayStationFormat = (props) => {
    return ( 
        <div className='playstation-format-container'>
            {/* <img src={PlayStationImage} className='playstation-wallpaper'/> */}
            <div className='card-holder'>
                <PlaystationSlider data={props.data} class={'playstation-format-slider'} banner={PsBanner} topBannerClass='top-xb-banner'/>
            </div>
            
        </div>
     );
}
 
export default PlayStationFormat;