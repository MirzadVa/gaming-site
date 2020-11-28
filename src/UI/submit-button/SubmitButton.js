import React from 'react';
import './submit-button.css'

const SubmitButton = (props) => {
    return ( 
        <div>
            <button type={props.btnType} className='submit-button-container'>Submit</button>
        </div>
     );
}
 
export default SubmitButton;