import React from 'react';
import './search.css';

const Search = () => {
    return ( 
        <div>
            <div className='search-container'>
                <span className='select-genre'>All </span>
                <input type='text' className='search-input' placeholder='Search entire store here...'/>
                <button className='search-button'>Search</button>

            </div>
        </div>
     );
}
 
export default Search;
