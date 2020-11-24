import React from 'react';
import './trailer-button.css'
import PlayButton from '../../assets/icons/play.png'


const TrailerButton = (props) => {
    return ( 
            <span className='trailer-button'>
                <img src={PlayButton} className='play-button'/>SEE TRAILER
            </span>
     );
}
 
export default TrailerButton;