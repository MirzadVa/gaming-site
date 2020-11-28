import React from 'react';
import Path from './path/Path';
import './single-product-page.css';
import ProductImage from './image-folder/ProductImage';
import NameDescription from './name-description/NameDescription';
import BuyButton from './buy-button/BuyButton';

const SingleProductPageFunc = (props) => {
    return (

        <div className='product-page-container'>

            <Path gameName={props.data.name}/>
            <div className='image-description'>

                <div className='image-cont'>
                    <ProductImage image={props.data.background_image}/>
                </div>

                <div className='name-desc-cont'>
                    <NameDescription data={props.data}/>
                    <BuyButton />
                </div>
                
            </div>

        </div>
     );
}
 
export default SingleProductPageFunc;