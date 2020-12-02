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
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            surname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    displaylabel: 'Surname'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    displaylabel: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    displaylabel: 'Password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    displaylabel: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            // gender: {
            //     elementType: 'select',
            //     elementConfig: {
            //         options: [
            //             {value: 'male', displayValue: 'Male'},
            //             {value: 'female', displayValue: 'Female'}
            //         ],
            //         displaylabel: 'Gender'
            //     },
            //     value: 'Male',
            //     validation: {
            //         required: false
            //     },
            //     valid: false
            // },
            
        },
        users: null,
        isRegistered: false,
        registrationError: false
    }
    

    checkValidity(value, rules){
        let isValid = false;

        if(rules.required){

            isValid = value.trim() !== '';
        }
        

        return isValid;
    }
    checkSubmitValid = () =>{
        let submitValid = false
        for(let formKey in this.state.formGroup){
            if(this.state.formGroup[formKey].valid){
                submitValid = true
            }else{
                submitValid = false
            }
        }
    return submitValid;
    
    
    
    
    };
    
    
    inputChangeHandler = (event, name) =>{
        let updatedFormGroup = {...this.state.formGroup};
        
        let updatedElement = updatedFormGroup[name];
        updatedElement.value = event.target.value
        updatedElement.valid =  this.checkValidity(updatedElement.value, updatedElement.validation)
        console.log(updatedElement);
        this.setState({
            formGroup : updatedFormGroup
        })
        
    
    
    }
    registerSubmit = (e) =>{
        e.preventDefault();
        const submitValid = this.checkSubmitValid();
        if(submitValid){
             let formData = {};
                for(let formElement in this.state.formGroup){
                    console.log(formData[formElement] = this.state.formGroup[formElement].value)
                }
        
        Axios.post('https://tutorial-1ce20.firebaseio.com/users.json', formData)
            .then(response =>{
                this.setState({
                    isRegistered : true
                })
                window.location.reload();
                
                
            })
            .catch(error =>{
                console.log(error)
            })
        }else{
            this.setState({
                registrationError : true
            })
        }
        
        
        
        
       
        
            
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
                    value={inputElement.config.value}
                    valid={inputElement.config.valid}/>
            })}
            <SubmitBtn btnType='submit'/>
        </form>)
        
        let registrationError;
        if(this.state.registrationError){
            registrationError =(<p>Please fill out all fields</p>)
        }
        
        return(
            <div className='register-container'>
                <div className='text'>
                    <h1>Register your account <br/> to get the best deals</h1><br/>
                    <div>
                        <p className='log-in'>Already have an account?</p><LoginButton />
                    </div>
                    
                </div>
                
                <div className='form'>{form}</div>
                {/* {registrationError} */}
                {this.state.isRegistered ? <Redirect to='/home'/> : null}
            </div>

            
        )
    }
}

export default Register;