import React from 'react';
import './product-image.css';

const ProductImage = (props) => {
    return ( 
        <div>
            <img src={props.image} className='product-image'/>
        </div>
     );
}
 
export default ProductImage;