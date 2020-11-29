import Axios from 'axios';
import React, { Component } from 'react';
import Input from '../../UI/input/Input';
import SubmitBtn from '../../UI/submit-button/SubmitButton';
import LoginButton from '../../UI/login-button/LoginButton';
import {Redirect} from 'react-router-dom';
import './register.css';

class Register extends Component {
    state= {
        formGroup: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    displaylabel: 'Name'
                },
                value: ''
            },
            surname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    displaylabel: 'Surname'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    displaylabel: 'Email'
                },
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    displaylabel: 'Password'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    displaylabel: 'Country'
                },
                value: ''
            },
            gender: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'male', displayValue: 'Male'},
                        {value: 'female', displayValue: 'Female'}
                    ],
                    displaylabel: 'Gender'
                },
                value: ''
            }
        },
        users: null
    }
    

    inputChangeHandler = (event, name) =>{
        let updatedFormGroup = {...this.state.formGroup};
        
        let updatedElement = updatedFormGroup[name];
        updatedElement.value = event.target.value
        this.setState({
            formGroup : updatedFormGroup
        })
        
    
    
    }
    registerSubmit = (e) =>{
        e.preventDefault();
        let formData = {};
        for(let formElement in this.state.formGroup){
            formData[formElement] = this.state.formGroup[formElement].value
        }
        
        Axios.post('https://tutorial-1ce20.firebaseio.com/users.json', formData)
            .then(response =>{
                window.location.reload();
                
            })
            .catch(error =>{
                console.log(error)
            })
        
            
    }


    render(){
      
        let formElementArray = [];
        for(let key in this.state.formGroup){
            formElementArray.push({
                id: key,
                config: this.state.formGroup[key]
            })
        }
        let form;
        form = (
        <form onSubmit={this.registerSubmit}>
            {formElementArray.map(inputElement =>{
                return <Input 
                    elementtype={inputElement.config.elementType} 
                    key={inputElement.id} 
                    displaylabel={inputElement.config.elementConfig.displaylabel}
                    config={inputElement.config.elementConfig}
                    change={(event) => this.inputChangeHandler(event, inputElement.id)}
                    value={inputElement.config.value}/>
            })}
            <SubmitBtn btnType='submit'/>
        </form>)
        
        
        
        
        return(
            <div className='register-container'>
                <div className='text'>
                    <h1>Register your account <br/> to get the best deals</h1><br/>
                    <div>
                        <p className='log-in'>Already have an account?</p><LoginButton />
                    </div>
                    
                </div>
                
                <div className='form'>{form}</div>
                
            </div>

            
        )
    }
}

export default Register;