import React from 'react';
import './name-description.css';

const NameDescription = (props) => {
    return ( 
        <div className='name-description-container'>
            <p>{props.data.name}</p>
            <p className='genres'>Genres: </p>
            {props.data.genres.map(elem =>{
                return <p className='genres genre'> {elem.name}</p>
            })}
            <p className='price'><b>Price: BAM 18.00</b></p>
            
            
        </div>
     );
}
 
export default NameDescription;