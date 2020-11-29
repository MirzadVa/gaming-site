import React from 'react';
import './search-results.css'
import wd2 from '../../../assets/images/wd2.jpg'

const SearchResults = (props) => {
    return ( 
        <div className='search-results-container'>

            <div className='search-results-img-cont'>
                <img src={props.image} alt='search-image'/>
            </div>

            <div className='search-results-name'>
                <p>{props.name}</p>
            </div>
        </div>
     );
}
 
export default SearchResults;