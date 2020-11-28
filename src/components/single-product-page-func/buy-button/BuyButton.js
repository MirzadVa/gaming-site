import React from 'react';
import './buy-button.css'

const BuyButton = (props) => {
    return ( 
        <div>
            <div className='buy-qty'>
                <label className='qty-label'>Qty</label><br />
                <input type='number' className='quantity'/>
                <button className='buy-game'>Buy game</button>
            </div>
            
        </div>
     );
}
 
export default BuyButton;