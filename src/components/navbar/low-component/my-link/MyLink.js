import React from 'react';
import './my-link.css'

const MyLink = (props) => {
    return ( 
        <p className='link-item'>{props.name}</p>
     );
}
 
export default MyLink;