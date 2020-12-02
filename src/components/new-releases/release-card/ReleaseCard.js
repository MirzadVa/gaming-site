import React from 'react';
import './release-card.css';

const ReleaseCard = (props) => {

    const style = {

        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})`,
        backgroundSize: '100% 100%',
    }


    return ( 
        <div className='release-card' style={style}>
            <p className='release-name'>{props.name}</p> <br />
            <p className='release-description'>{props.description}</p>
           
        </div>
     );
}
 
export default ReleaseCard;