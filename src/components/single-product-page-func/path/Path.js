import React from 'react';
import {Link} from 'react-router-dom';
import './path.css';


const Path = (props) => {
    return ( 
        <div>
            <div className='path-container'>
                <Link to='/'className='home-link'>Home</Link> {'>'} <p className='game-name'>{props.gameName}</p>
            </div>
        </div>
     );
}
 
export default Path;