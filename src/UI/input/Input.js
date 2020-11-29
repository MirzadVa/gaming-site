import React from 'react';
import './input.css';


const Input = (props) => {
    let formElement = null;

    switch(props.elementtype){
        case('input'):
            formElement = <input 
                        {...props.config}
                        onChange={props.change}
                        value={props.value}
                        className='input-field'/>
            break;
        case('textarea'):
            formElement = <textarea 
                        {...props.config}
                        onChange={props.change}
                        value={props.value}
                        className='input-field'/>
            break;
        case('select'):
            formElement = <select
                        type={props.config.type}
                        placeholder={props.config.placeholder}
                        onChange={props.change}
                        value={props.value}
                        className='input-field-select'>
                        {props.config.options.map(elem =>(
                            <option key={elem.value} value={elem.value}>
                               {elem.displayValue}
                            </option>
                        ))}
                         {props.config.displaylabel}
                        </select> 
            break;
        default: <input /> 
    }
    





    return ( 
        <div>
            <label className='label-field'>{props.displaylabel}: </label><br/>
            {formElement}
            
        </div>
     );
}
 
export default Input;