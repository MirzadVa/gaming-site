import React from 'react';
import './description.css';
import Wallpaper from '../../../assets/images/watch-dogs.jpg'
import BuyButton from '../../../UI/buy-button/BuyButton';
import TrailerButton from '../../../UI/trailer-button/TrailerButton';

const Description = () => {



    return ( 
        <div>
            <div className="description-container">
                <img src={Wallpaper} className='wd-wallpaper'/>
                <div className='text-container'>
                    <h1>WATCH DOGS</h1>
                    <p >Id labore fugiat aliqua ea ipsum. Sit commodo do est esse veniam ex amet. 
                    Qui irure quis nisi in. Enim ad anim exercitation proident est tempor nostrud est.
                    Id labore fugiat aliqua ea ipsum. Sit commodo do est esse veniam ex amet. 
                    Qui irure quis nisi in. Enim ad anim exercitation proident est tempor nostrud est.</p>
                    <div className='buy-trailer-button'>
                        <BuyButton title="BUY GAME"  class='jumbotron-btn-class' cartClass='cart-button'/>
                        <TrailerButton />
                    </div>
                   
                </div>
                
                <div className='layer'></div>
                
                
            </div>
           
           

        </div>
        
     );
}
 
export default Description;